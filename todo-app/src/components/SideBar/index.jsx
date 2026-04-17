import {Component} from 'react'
import {SideBarContainer,Text,Image, LinkText } from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class Sidebar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme} = value
          return (
            <SideBarContainer $main>
              <SideBarContainer >
                <LinkText $light={lightTheme} to="/"><Text>Home</Text></LinkText>
                <LinkText $light={lightTheme} to="/trending"><Text>Trending</Text></LinkText>
                <LinkText $light={lightTheme} to="/gaming"><Text>Gaming</Text></LinkText>
                <LinkText $light={lightTheme} to="/saved-videos"><Text>Saved Videos</Text></LinkText>
              </SideBarContainer>
              <SideBarContainer $light={lightTheme}>
                <Text>Contact Us</Text>
                <SideBarContainer>
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

export default Sidebar
