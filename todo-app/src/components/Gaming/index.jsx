import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import VerticalSidebar from '../VerticalSidebar'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import {GameIcon,LoaderContainer, LinkText,ListItem, UnorderedList, Text, Container, Image,Button} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
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
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
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
        viewCount: item.view_count,
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

  renderVideos = (lightTheme) => {
    const {videoList} = this.state
    return (
      <UnorderedList $light={lightTheme}>
        {videoList.map(item => (
          <ListItem key={item.id}>
            <LinkText to={`/videos/${item.id}`} $light={lightTheme}>
              <Image src={item.thumbnail} />
              <Text>{item.title}</Text>
              <Text>{item.viewCount} views</Text>
            </LinkText>
          </ListItem>
        ))}
      </UnorderedList>
    )
  }

  renderLoadingView = (lightTheme) => (
    <LoaderContainer $light={lightTheme}>
      <div>Loading...</div>
    </LoaderContainer>
  )

  renderFailureView = (lightTheme) => (
      <Container $light={lightTheme} $failureContainer>
        <Image $failure src={lightTheme ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png' : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'} alt="failure view" />
        <Text $failText>Oops! Something Went Wrong</Text>
        <Text $failText>We are having some trouble to complete your request. Please try again.</Text>
        <Button $retry onClick={this.getVideosApiCall}>Retry</Button>
      </Container>
    )

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
          const {lightTheme,sidebarOpen} = value
          return (
            <Container $light={lightTheme}>
              <Navbar />
              <Container $light={lightTheme} $sideBarAndVideosContainer>
                <SideBar />
                {sidebarOpen && <VerticalSidebar />}

                <Container $light={lightTheme} $videos>
                  <Text $light={lightTheme} $gamingText>
                    <GameIcon $light={lightTheme} $icon>🎮</GameIcon>{` Gaming`}
                  </Text>
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

export default Gaming
