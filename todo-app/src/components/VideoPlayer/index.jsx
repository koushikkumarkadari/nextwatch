import {Component} from 'react'
import {Container} from './styledComponents'
import ReactPlayer from 'react-player'

class VideoPlayer extends Component {

  render() {
    const {videoURL} = this.props
    return (
      <Container $main>
          <ReactPlayer
            src={videoURL}
            controls
            width="100%"
            height="60vh"
          />
      </Container>
    )
  }
}

export default VideoPlayer