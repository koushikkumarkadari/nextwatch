import {Component} from 'react'
import Cookie from 'js-cookie'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import { Container,Text, Image ,Button} from './styledComponents'
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
        publishedAt: fetchedData.video_details.published_at,
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
          const {lightTheme,savedVids,saveVid,unsaveVid} = value
          const saveThisVideo=(theVideo)=>{
            saveVid(theVideo)
          }
          const unsaveThisVideo=(id)=>{
            unsaveVid(id)
          }
          const isThisVideoSaved=savedVids.some(vid => vid.id === theVideo.id)
          console.log(isThisVideoSaved)
          return (
            <Container $light={lightTheme}>
              <Navbar />
              <Container $light={lightTheme} $sideBarAndVideosContainer>
                <SideBar />
                <Container $light={lightTheme} $videos>
                  <Image src={theVideo.thumbnailUrl} />
                  <Text>{theVideo.title}</Text>
                  <Container $light={lightTheme} $viewsAndLikeDislikeContainer>
                    <Text>{`${theVideo.viewCount} views • ${theVideo.publishedAt}`}</Text>
                    <Container $likeDislike $light={lightTheme}>
                      <Button>Like</Button>
                      <Button>Dislike</Button>
                      {isThisVideoSaved ? (
                        <Button onClick={() => unsaveThisVideo(theVideo.id)}>Unsave</Button>
                      ) : (
                        <Button onClick={() => saveThisVideo(theVideo)}>Save</Button>
                      )}
                    </Container>
                  </Container>
                  <br/>
                  <Container $light={lightTheme} $channelContainer>
                    <Image $channel src={theVideo.channel.profileImageUrl} />
                    <Container $light={lightTheme}>
                      <Text>{theVideo.channel.name}</Text>
                      <Text>{theVideo.channel.subscriber} subscribers</Text>
                      <Text>{theVideo.description}</Text>
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
