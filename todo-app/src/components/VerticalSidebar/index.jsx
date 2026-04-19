import {Component} from 'react'
import {SideBarContainer,Container,Text,Image, LinkText } from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class VerticalSidebar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme} = value
          return (
                    <SideBarContainer $light={lightTheme} $main>
                        <SideBarContainer $light={lightTheme} $sub1>
                            <LinkText exact to="/" activeClassName="active" $light={lightTheme}>
                            <Container $link $light={lightTheme}>
                                <Text>Home</Text>
                            </Container>
                            </LinkText>
                            <LinkText to="/trending" activeClassName="active" $light={lightTheme}>
                            <Container $link $light={lightTheme}>
                                <Text>Trending</Text>
                            </Container>
                            </LinkText>
                            <LinkText to="/gaming" activeClassName="active" $light={lightTheme}>
                            <Container $link $light={lightTheme}>
                                <Text>Gaming</Text>
                            </Container>
                            </LinkText>
                            <LinkText to="/saved-videos" activeClassName="active" $light={lightTheme}>
                            <Container $link $light={lightTheme}>
                                <Text>Saved Videos</Text>
                            </Container>
                            </LinkText>
                        </SideBarContainer>
                        <SideBarContainer $bottom $light={lightTheme}>
                            <Text>Contact Us</Text>
                            <SideBarContainer $light={lightTheme}>
                            <Image src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png" alt="facebook logo" />
                            <Image src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png" alt="twitter logo" />
                            <Image src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png" alt="linkedin logo" />
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

export default VerticalSidebar
