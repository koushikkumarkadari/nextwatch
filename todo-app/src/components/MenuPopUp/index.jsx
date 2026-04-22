import {Component} from 'react'
import Popup from 'reactjs-popup'
import {SideBarContainer,Container,Text, LinkText,MenuButton,FaBarsIcon ,ListItem} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class MenuPopUp extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme} = value
          const overlayStyles = {
            backgroundColor: `${lightTheme ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)'}`,
          }
          return (
            <>
              <Popup trigger={<MenuButton $light={lightTheme}><FaBarsIcon $light={lightTheme} /></MenuButton>} overlayStyle={overlayStyles}>
                  {() => (
                      <SideBarContainer $light={lightTheme} $sub1>
                        <SideBarContainer as="ul" $sub1>
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
                        </SideBarContainer>
                      </SideBarContainer>
                  )}
              </Popup>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default MenuPopUp
