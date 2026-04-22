import {Component} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {ChannelLogo,LoveIcon,LinkText,Container, UnorderedList, ListItem, Image, Text} from './styledComponents'
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
                <Sidebar />
                {savedVids.length > 0 && (
                  <Container $light={lightTheme} $videos>
                    <Text as="h1" $heading $light={lightTheme} $savedVideos><LoveIcon $light={lightTheme}>❤️</LoveIcon>{` Saved Videos`}</Text>
                    <UnorderedList $light={lightTheme}>
                      {savedVids.map(item => (
                          <ListItem key={item.id} >
                            <LinkText to={`/videos/${item.id}`} $light={lightTheme}>
                              <Image alt="video thumbnail" src={item.thumbnailUrl} />
                              <Container $channel $light={lightTheme}>
                                <ChannelLogo src={item.channel.profileImageUrl}/>
                                <Container $Title $light={lightTheme}>
                                  <Text>{item.title}</Text>
                                  <Text>{item.channel.name}</Text>
                                  <Text>{`${item.viewCount} views • ${item.publishedAt}`}</Text>
                                </Container>
                              </Container>
                            </LinkText>
                          </ListItem>
                      ))}
                    </UnorderedList>
                  </Container>)}
                {savedVids.length === 0 && (
                  <Container $light={lightTheme} $failureView>
                    <Image src='https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png' alt="no saved videos" />
                    <Text as="h1" $nothing>No saved videos found</Text>
                    <Text $nothing>You can save your videos while watching them</Text>
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
