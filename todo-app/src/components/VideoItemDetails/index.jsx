import {Component} from 'react'
import Cookie from 'js-cookie'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import VideoPlayer from '../VideoPlayer'
import {formatDistanceToNow}  from 'date-fns'
import { Container,Text, Image ,Button, LikeIcon,DislikeIcon,UnsavedIcon,SavedIcon,LikedIcon,DislikedIcon} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class VideoItemDetails extends Component {
  state = {theVideo: {channel: {}}}

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
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
      //console.log(fetchedData.video_details)
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
      this.setState({theVideo: formattedData})
    }
  }

  render() {
    const {theVideo} = this.state
    return (
        <ThemeContext.Consumer>
        {value => {
          const {lightTheme,savedVids,saveVid,unsaveVid,likedVideos,dislikedVideos,addToLikedVideos,addToDislikedVideos,removeFromLikedVideos,removeFromDislikedVideos} = value
          const saveThisVideo=(theVideo)=>{
            saveVid(theVideo)
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
          return (
            <Container $light={lightTheme}>
              <Navbar />
              <Container $light={lightTheme} $sideBarAndVideosContainer>
                <SideBar />
                <Container $light={lightTheme} $videos>
                  <VideoPlayer videoURL={theVideo.videoUrl} />
                  <Text>{theVideo.title}</Text>
                  <Container $light={lightTheme} $viewsAndLikeDislikeContainer>
                    <Text>{`${theVideo.viewCount} views • ${theVideo.publishedAt}`}</Text>
                    <Container $likeDislike $light={lightTheme}>
                      {isThisVideoLiked ? (
                        <Button $light={lightTheme} onClick={() => unlikeThisVideo(theVideo.id)}><LikedIcon $light={lightTheme}/></Button>
                      ) : (
                        <Button $light={lightTheme} onClick={() => likeThisVideo(theVideo.id)}><LikeIcon $light={lightTheme} /></Button>
                      )}
                      {isThisVideoDisliked ? (
                        <Button $light={lightTheme} onClick={() => undislikeThisVideo(theVideo.id)}><DislikedIcon $light={lightTheme} /></Button>
                      ) : (
                        <Button $light={lightTheme} onClick={() => dislikeThisVideo(theVideo.id)}><DislikeIcon $light={lightTheme} /></Button>
                      )}
                      {isThisVideoSaved ? (
                        <Button $light={lightTheme} onClick={() => unsaveThisVideo(theVideo.id)}><SavedIcon $light={lightTheme} /></Button>
                      ) : (
                        <Button $light={lightTheme} onClick={() => saveThisVideo(theVideo)}><UnsavedIcon $light={lightTheme} /></Button>
                      )}
                    </Container>
                  </Container>
                  <br/>
                  <Container $light={lightTheme} $channelContainer>
                    <Image src={theVideo.channel.profileImageUrl} />
                    <Container $light={lightTheme} $Title>
                      <Text>{theVideo.channel.name}</Text>
                      <Text>{theVideo.channel.subscriber} subscribers</Text>
                      <Text $desc>{theVideo.description}</Text>
                    </Container>
                  </Container>
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
