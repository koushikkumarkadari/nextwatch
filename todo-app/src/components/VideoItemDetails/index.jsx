import {Component} from 'react'
import Cookie from 'js-cookie'
import {formatDistanceToNow}  from 'date-fns'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import VideoPlayer from '../VideoPlayer'
import { LikeButton,Container,Text, Image ,Button, LikeIcon,DislikeIcon,UnsavedIcon,SavedIcon,LikedIcon,DislikedIcon,LoaderContainer} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {theVideo: {channel: {}}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus:apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookie.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const formattedData = {
        id: fetchedData.video_details.id,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        channel: {
          name: fetchedData.video_details.channel.name,
          profileImageUrl: fetchedData.video_details.channel.profile_image_url,
          subscriber: fetchedData.video_details.channel.subscriber_count,
        },
        viewCount: fetchedData.video_details.view_count,
        publishedAt: formatDistanceToNow(new Date(fetchedData.video_details.published_at) , { addSuffix: true }),
        description: fetchedData.video_details.description,
      }
      console.log(formattedData)
      this.setState({theVideo: formattedData,apiStatus:apiStatusConstants.success})
    }else{
      this.setState({apiStatus:apiStatusConstants.failure});
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

  renderPage=(value)=>{
    const {apiStatus}=this.state 
    const {lightTheme}=value
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView(lightTheme)
      case apiStatusConstants.success:
        return this.renderVideoDetails(value)
      case apiStatusConstants.failure:
        return this.renderFailureView(lightTheme)
      default:
        return null
    }
  }

  renderVideoDetails=(value)=>{
    const {theVideo} = this.state
    const {lightTheme,savedVids,saveVid,unsaveVid,likedVideos,dislikedVideos,addToLikedVideos,addToDislikedVideos,removeFromLikedVideos,removeFromDislikedVideos} = value
    const saveThisVideo=(video)=>{
      saveVid(video)
    }
    const unsaveThisVideo=(id)=>{
      unsaveVid(id)
    }
    const likeThisVideo=(id)=>{
      removeFromDislikedVideos(id)
      addToLikedVideos(id)
    }
    const dislikeThisVideo=(id)=>{
      removeFromLikedVideos(id)
      addToDislikedVideos(id)
    }
    const unlikeThisVideo=(id)=>{
      removeFromLikedVideos(id)
    }
    const undislikeThisVideo=(id)=>{
      removeFromDislikedVideos(id)
    }
    const isThisVideoSaved=savedVids.some(vid => vid.id === theVideo.id)
    const isThisVideoLiked=likedVideos.length > 0 ? likedVideos.some(videoId => videoId === theVideo.id) : false
    const isThisVideoDisliked=dislikedVideos.length > 0 ? dislikedVideos.some(videoId => videoId === theVideo.id) : false
    return(
      <>
        <VideoPlayer videoURL={theVideo.videoUrl} />
        <Text>{theVideo.title}</Text>
        <Container $light={lightTheme} $viewsAndLikeDislikeContainer>
          <Text>{`${theVideo.viewCount} views • ${theVideo.publishedAt}`}</Text>
          <Container $likeDislike $light={lightTheme}>
            {isThisVideoLiked ? (
              <LikeButton $active $light={lightTheme} onClick={() => unlikeThisVideo(theVideo.id)}><LikedIcon $light={lightTheme}/>Liked</LikeButton>
            ) : (
              <LikeButton $light={lightTheme} onClick={() => likeThisVideo(theVideo.id)}><LikeIcon $light={lightTheme} />Like</LikeButton>
            )}
            {isThisVideoDisliked ? (
              <LikeButton $active $light={lightTheme} onClick={() => undislikeThisVideo(theVideo.id)}><DislikedIcon $light={lightTheme} />Disliked</LikeButton>
            ) : (
              <LikeButton $light={lightTheme} onClick={() => dislikeThisVideo(theVideo.id)}><DislikeIcon $light={lightTheme} />Dislike</LikeButton>
            )}
            {isThisVideoSaved ? (
              <LikeButton $active $light={lightTheme} onClick={() => unsaveThisVideo(theVideo.id)}><SavedIcon $light={lightTheme} />Saved</LikeButton>
            ) : (
              <LikeButton $light={lightTheme} onClick={() => saveThisVideo(theVideo)}><UnsavedIcon $light={lightTheme} />Save</LikeButton>
            )}
          </Container>
        </Container>
        <br/>
        <Container $light={lightTheme} $channelContainer>
          <Image alt="channel logo" src={theVideo.channel.profileImageUrl} />
          <Container $light={lightTheme} $Title>
            <Text>{theVideo.channel.name}</Text>
            <Text>{theVideo.channel.subscriber} subscribers</Text>
            <Text $desc>{theVideo.description}</Text>
          </Container>
        </Container>
      </>
    )
  }

  render() {
    return (
        <ThemeContext.Consumer>
        {value => {
          const{lightTheme}=value
          return (
            <Container $light={lightTheme}>
              <Navbar />
              <Container $light={lightTheme} $sideBarAndVideosContainer>
                <Sidebar />
                <Container $light={lightTheme} $videos>
                  {this.renderPage(value)}
                </Container>
              </Container>
            </Container>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
