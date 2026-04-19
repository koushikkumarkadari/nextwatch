import {Component} from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import {LoveIcon,LinkText,Container, UnorderedList, ListItem, Image, Text} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'


class SavedVideos extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {savedVids,lightTheme} = value
          return (
            <Container $light={lightTheme}>
              <Navbar />
              <Container $light={lightTheme} $sideBarAndVideosContainer>
                <SideBar />
                {savedVids.length > 0 && (
                  <Container $light={lightTheme} $videos>
                    <Text $light={lightTheme} $savedVideos><LoveIcon $light={lightTheme}>❤️</LoveIcon>{` Saved Videos`}</Text>
                    <UnorderedList $light={lightTheme}>
                      {savedVids.map(item => {
                        return(
                        <LinkText key={item.id} to={`/videos/${item.id}`} $light={lightTheme}>
                          <ListItem>
                          <Image src={item.thumbnailUrl} />
                          <Container $Title $light={lightTheme}>
                            <Text>{item.title}</Text>
                            <Text>{item.channel.name}</Text>
                            <Text>{`${item.viewCount} views • ${item.publishedAt}`}</Text>
                          </Container>
                        </ListItem>
                      </LinkText>
                    )})}
                  </UnorderedList>
                </Container>)}
                {savedVids.length === 0 && (
                  <Container $light={lightTheme} $failureView>
                    <Image src='https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png' alt="no saved videos" />
                    <Text>No saved videos found</Text>
                    <Text>You can save your videos while watching them</Text>
                  </Container>
                )}
              </Container>
            </Container>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
