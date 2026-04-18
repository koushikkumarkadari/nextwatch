import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import Navbar from '../Navbar'
import SideBar from '../SideBar'
import {LoaderContainer, LinkText,ListItem, UnorderedList, Text, Container, Image} from './styledComponents'
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
      <UnorderedList>
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
      <Image src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" alt="failure view" />
      <Text>Failed to fetch gaming videos</Text>
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
          const {lightTheme} = value
          return (
            <Container $light={lightTheme}>
              <Navbar />
              <Container $light={lightTheme} $sideBarAndVideosContainer>
                <SideBar />
                <Container $light={lightTheme} $videos>
                  <Text $light={lightTheme} $gamingText>
                    <Text $light={lightTheme} $icon>🎮 </Text>Gaming
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
