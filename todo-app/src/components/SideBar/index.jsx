import {Component} from 'react'
import {ListItem,SideBarContainer,Container,Text,Image, LinkText,UnorderedList } from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class Sidebar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme} = value
          return (
            <SideBarContainer $main>
              <UnorderedList>
                <ListItem>
                  <LinkText exact to="/" activeClassName="active" $light={lightTheme}>
                    <Container $link $light={lightTheme}>
                      <Text>Home</Text>
                    </Container>
                  </LinkText>
                </ListItem>
                <ListItem>
                  <LinkText to="/trending" activeClassName="active" $light={lightTheme}>
                    <Container $link $light={lightTheme}>
                      <Text>Trending</Text>
                    </Container>
                  </LinkText>
                </ListItem>
                <ListItem>
                  <LinkText to="/gaming" activeClassName="active" $light={lightTheme}>
                    <Container $link $light={lightTheme}>
                      <Text>Gaming</Text>
                    </Container>
                  </LinkText>
                </ListItem>
                <ListItem>
                  <LinkText to="/saved-videos" activeClassName="active" $light={lightTheme}>
                    <Container $link $light={lightTheme}>
                      <Text>Saved Videos</Text>
                    </Container>
                  </LinkText>
                </ListItem>
              </UnorderedList>
              <SideBarContainer $bottom $light={lightTheme}>
                <Text>Contact Us</Text>
                <SideBarContainer>
                  <Image src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png" alt="facebook logo" />
                  <Image src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png" alt="twitter logo" />
                  <Image src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png" alt="linked in logo" />
                </SideBarContainer>
                <Text>Enjoy! Now to see your channels and recommendations!</Text>
              </SideBarContainer>
            </SideBarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Sidebar
