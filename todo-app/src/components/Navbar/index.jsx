import {Link} from 'react-router-dom'
import {Component} from 'react'

import Cookies from 'js-cookie'
import ReactPopUp from '../ReactPopUp'
import {MainContainer ,Container, Image, Button,SunIcon,MoonIcon} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme,changeActiveTheme,sidebarOpen,toggleSidebar} = value

          const toggleTheme = () => {
            changeActiveTheme()
          }

          return(
            <MainContainer $light={lightTheme}>
              <Container>
                <Image
                  src={lightTheme ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"}
                  alt="nxt-watch-logo"
                />
              </Container>
              <Container>
                <Button data-testid="theme" $profile onClick={toggleTheme} >
                  {lightTheme ? <SunIcon /> : <MoonIcon />}
                </Button>
                <Button $profile>
                  <Image $profile src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" alt="profile" />
                </Button>
                <ReactPopUp/>
              </Container>
            </MainContainer>
        )}}
      </ThemeContext.Consumer>
    )
  } 
}
export default Navbar
