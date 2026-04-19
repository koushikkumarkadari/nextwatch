import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {LoaderContainer,TextContainer,SearchButton, LinkText,BannerText,InputContainer,BannerContainer,ChannelContainer,Container, UnorderedList, ListItem, Image, Text,VideosContainer,Button,CancelIcon,SearchContainer,SearchIcon,Input} from './styledComponents'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import VerticalSidebar from '../VerticalSidebar'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videoList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideosApiCall()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getVideosApiCall = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const formattedData = fetchedData.videos.map(item => ({
        id: item.id,
        title: item.title,
        thumbnail: item.thumbnail_url,
        channel: {
          name: item.channel.name,
          profileImageUrl: item.channel.profile_image_url,
        },
        viewCount: item.view_count,
        publishedAt: item.published_at,
      }))
      this.setState({
        videoList: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    }else{
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderFailureView = (lightTheme) => (
    <Container $light={lightTheme} $failureContainer>
      <Image src={lightTheme ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png' : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'} alt="failure view" />
      <Text>Oops! Something Went Wrong</Text>
      <Text>We are having some trouble to complete your request. Please try again.</Text>
      <Button onClick={this.getVideosApiCall}>Retry</Button>
    </Container>
  )

  renderLoadingView = (lightTheme) => (
    <LoaderContainer $light={lightTheme} $loader data-testid="loader">
      <Text>Loading...</Text>
    </LoaderContainer>
  )


  renderVideos = (lightTheme) => {
    const {videoList} = this.state
    return (
      <VideosContainer $light={lightTheme}>
        <SearchContainer onSubmit={this.getVideosApiCall} $light={lightTheme}>
          <InputContainer $light={lightTheme}><Input $light={lightTheme} type="search" placeholder="Search" onChange={this.onChangeSearchInput} /></InputContainer>
          <SearchButton type="submit" $light={lightTheme} data-testid="searchButton"><SearchIcon $light={lightTheme}/></SearchButton>
        </SearchContainer>
        <UnorderedList>
          {videoList.map(item => {
            return(
            <ListItem key={item.id}>
              <LinkText $light={lightTheme} to={`/videos/${item.id}`} >
                <Image $thumbnail src={item.thumbnail} />
                <ChannelContainer>
                  <Image $profilechannel src={item.channel.profileImageUrl} />
                  <TextContainer $light={lightTheme}>
                    <Text>{item.title}</Text>
                    <Text>{item.channel.name}</Text>
                    <Text>{`${item.viewCount} • ${formatDistanceToNow(new Date(item.publishedAt), { addSuffix: true })}`}</Text>
                  </TextContainer>
                </ChannelContainer>
              </LinkText>
            </ListItem>
          )})}
        </UnorderedList>
      </VideosContainer>
    )
  }

  renderSuccessView = (lightTheme) => {
    const {videoList} = this.state
    return videoList.length > 0 ? this.renderVideos(lightTheme) : (
      <Container $light={lightTheme} $failureView>
        <Image src='https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png' alt="no results" />
        <Text>No Results Found</Text>
        <Text>Please try with a different keyword</Text>
      </Container>
    )
  }

  renderAllVideos = (lightTheme) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView(lightTheme)
      case apiStatusConstants.success:
        return this.renderSuccessView(lightTheme)
      case apiStatusConstants.failure:
        return this.renderFailureView(lightTheme)
      default:
        return null
    }
  }


  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme,banner,closeBanner,sidebarOpen} = value

          const onCloseBanner = () => {
            closeBanner()
          }

          return (
            <Container $light={lightTheme}>
              <Navbar />
              <Container $light={lightTheme} $main>
                  <SideBar />
                  {sidebarOpen && <VerticalSidebar />}
                  <Container $light={lightTheme} $BannerandVideosContainer>
                    {banner && (
                      <BannerContainer >
                        <BannerContainer $Banner>
                          <Image $bannerLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt="home" />
                          <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
                          <Button>GET IT NOW</Button>
                        </BannerContainer>
                        <CancelIcon onClick={closeBanner} />
                      </BannerContainer>)}
                    <VideosContainer $light={lightTheme}>{this.renderAllVideos(lightTheme)}</VideosContainer>
                  </Container>
              </Container>
            </Container>
          )
        }
      }
      </ThemeContext.Consumer>
    )
  }
}

export default Home
