import {Component} from 'react'
import ReactPopUp from '../ReactPopUp'
import {ListItem,LinkText,MainContainer ,Container, Image, Button,SunIcon,MoonIcon,ProfileButton, UnorderedList} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import MenuPopUp from '../MenuPopUp'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme,changeActiveTheme} = value

          const toggleTheme = () => {
            changeActiveTheme()
          }
          return(
            <MainContainer $light={lightTheme}>
              <Container $logo>
                <LinkText to="/">
                  <Image
                    src={lightTheme ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"}
                    alt="website logo"
                  />
                </LinkText>
              </Container>
              <UnorderedList>
                <ListItem>
                  <Button data-testid="theme" $profile onClick={toggleTheme} >
                    {lightTheme ? <SunIcon /> : <MoonIcon />}
                  </Button>
                </ListItem>
                <ListItem>
                  <ProfileButton $profile>
                    <Image $profile src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" alt="profile" />
                  </ProfileButton>
                </ListItem>
                <ListItem>
                  <MenuPopUp/>
                </ListItem>
                  <ReactPopUp/>
              </UnorderedList>
            </MainContainer>
        )}}
      </ThemeContext.Consumer>
    )
  } 
}
export default Navbar
