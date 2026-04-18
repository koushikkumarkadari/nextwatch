import {Component} from 'react'
import Cookies from 'js-cookie'
import {LoaderContainer,LinkText,Container, UnorderedList, ListItem, Image, Text,Button} from './styledComponents'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    videoList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideosApiCall()
  }

  getVideosApiCall = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure
      })
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
      <UnorderedList>
        {videoList.map(item => (
          <LinkText to={`/videos/${item.id}`} key={item.id}>
            <ListItem>
              <Image src={item.thumbnail} />
              <Container $light={lightTheme}>
                <Text>{item.title}</Text>
                <Text>{item.channel.name}</Text>
                <Text>{`${item.viewCount} views • ${item.publishedAt}`}</Text>
              </Container>
            </ListItem>
          </LinkText>
        ))}
      </UnorderedList>
    )
  }

  renderAllVideos = (lightTheme) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView(lightTheme)
      case apiStatusConstants.success:
        return this.renderVideos(lightTheme)
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
          const {lightTheme} = value
          return (
            <Container $light={lightTheme}>
              <Navbar />
              <Container $light={lightTheme} $sideBarAndVideosContainer>
                <SideBar />
                <Container $light={lightTheme} $videocontainer>
                  <Container $light={lightTheme}>
                    <Text $trendingText>🔥 Trending</Text>
                  </Container>
                  {this.renderAllVideos(lightTheme)}
                </Container>
              </Container>
            </Container>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
