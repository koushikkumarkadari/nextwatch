import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {LoaderContainer,TextContainer,SearchButton, LinkText,BannerText,InputContainer,BannerContainer,ChannelContainer,Container, UnorderedList, ListItem, Image, Text,VideosContainer,Button,CancelIcon,SearchContainer,SearchIcon,Input} from './styledComponents'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'

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
      <Image $failure src={lightTheme ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png' : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'} alt="failure view" />
      <Text as="h1" $failText>Oops! Something Went Wrong</Text>
      <Text $failText>We are having some trouble to complete your request. Please try again.</Text>
      <Button $retry onClick={this.getVideosApiCall}>Retry</Button>
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
        <SearchContainer   $light={lightTheme}>
          <InputContainer $light={lightTheme}><Input $light={lightTheme} type="search" placeholder="Search" onChange={this.onChangeSearchInput} /></InputContainer>
          <SearchButton onClick={this.getVideosApiCall} type="button" $light={lightTheme} data-testid="searchButton"><SearchIcon $light={lightTheme}/></SearchButton>
        </SearchContainer>
        <UnorderedList>
          {videoList.map(item => (
            <ListItem key={item.id}>
              <LinkText $light={lightTheme} to={`/videos/${item.id}`} >
                <Image alt="video thumbnail" $thumbnail src={item.thumbnail} />
                <ChannelContainer>
                  <Image alt="channel logo" $profilechannel src={item.channel.profileImageUrl} />
                  <TextContainer $light={lightTheme}>
                    <Text>{item.title}</Text>
                    <Text>{item.channel.name}</Text>
                    <Text>{`${item.viewCount} • ${item.publishedAt}`}</Text>
                  </TextContainer>
                </ChannelContainer>
              </LinkText>
            </ListItem>
          ))}
        </UnorderedList>
      </VideosContainer>
    )
  }

  renderSuccessView = (lightTheme) => {
    const {videoList} = this.state
    return videoList.length > 0 ? this.renderVideos(lightTheme) : (
      <Container $light={lightTheme}  $failureContainer>
        <Image $failure src='https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png' alt="no videos" />
        <Text as="h1" $failText>No Search results found</Text>
        <Text $failText>Try different key words or remove search filter</Text>
        <Button type="button" $retry onClick={this.getVideosApiCall}>Retry</Button>
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
          const {lightTheme,banner,closeBanner} = value
          return (
            <Container $light={lightTheme} data-testid="home">
              <Navbar />
              <Container $light={lightTheme} $main>
                  <Sidebar />
                  <Container $light={lightTheme} $BannerandVideosContainer>
                    {banner && (
                      <BannerContainer data-testid="banner">
                        <BannerContainer $Banner>
                          <Image $bannerLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt="nxt watch logo" />
                          <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
                          <Button>GET IT NOW</Button>
                        </BannerContainer>
                        <Button data-testid="close"  onClick={closeBanner}><CancelIcon  /></Button>
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
