import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'

import Cookies from 'js-cookie'

import {MainContainer,Container, Image, Button,SunIcon,MoonIcon} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class Navbar extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

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
                <Button $light={lightTheme} onClick={this.onClickLogout}>Logout</Button>
              </Container>
            </MainContainer>
        )}}
      </ThemeContext.Consumer>
    )
  } 
}
export default withRouter(Navbar)
