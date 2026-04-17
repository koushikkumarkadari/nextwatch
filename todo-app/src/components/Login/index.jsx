import {Component} from 'react'
import Cookies from 'js-cookie'
import {
  ContainerBig,
  ContainerOne,
  Container,
  Image,
  Text,
  InputContainer,
  Input,
  CustomButton,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    error: '',
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      Cookies.set('jwt_token', data.jwt_token, {expires: 1})
      const {history} = this.props
      history.push('/')
    } else {
      const data = await response.json()
      console.log(data)
      this.setState({showError: true, error: data.error_msg})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {username, password, showPassword, error, showError} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme} = value
          return (
            <ContainerBig $theme={lightTheme}>
              <ContainerOne $theme={lightTheme}>
                <Image
                  src={`https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-${lightTheme ? 'light' : 'dark'}-theme-img.png`}
                  alt="website logo"
                />
                <Container
                  $theme={lightTheme}
                  as="form"
                  onSubmit={this.onLogin}
                >
                  <Container $theme={lightTheme}>
                    <Text as="label" htmlFor="username">
                      USERNAME
                    </Text>
                    <br />
                    <InputContainer>
                      <Input
                        $light={lightTheme}
                        onChange={this.onChangeUsername}
                        value={username}
                        type="text"
                        id="username"
                      />
                    </InputContainer>
                  </Container>
                  <Container $theme={lightTheme}>
                    <Text  as="label" htmlFor="password">
                      PASSWORD
                    </Text>
                    <br />
                    <InputContainer>
                      <Input
                        $light={lightTheme}
                        onChange={this.onChangePassword}
                        value={password}
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                      />
                    </InputContainer>
                  </Container>
                  <Container $theme={lightTheme}>
                    <Input
                      $light={lightTheme}
                      onChange={this.onChangeShowPassword}
                      id="showPassword"
                      checked={showPassword}
                      type="checkbox"
                      $checkbox={1}
                    />
                    <Text
                      as="label"
                      htmlFor="showPassword"
                    >
                      Show Password
                    </Text>
                  </Container>
                  <CustomButton type="submit">Login</CustomButton>
                  {showError && <Text>{`*${error}`}</Text>}
                </Container>
              </ContainerOne>
            </ContainerBig>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
