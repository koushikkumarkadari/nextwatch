import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Container, Text,Button} from './styledComponents'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'

class ReactPopUp extends Component {
    onClickLogout = () => {
        const {history} = this.props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
  render() {
    return (
        <ThemeContext.Consumer>
            {value => {
                const {lightTheme} = value
                const overlayStyles = {
                    backgroundColor: `${lightTheme ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)'}`,
                    }
                return (
                    <Container  $light={lightTheme}>
                        <Popup modal trigger={<Button $Close type="button" $light={lightTheme} onClick={this.onClickLogout}>Logout</Button>} overlayStyle={overlayStyles}>
                            {close => (
                                <Container $light={lightTheme} $main>
                                    <Container $light={lightTheme} $popupContainer>
                                        <Text $light={lightTheme}>Are you sure you want to logout?</Text>
                                    </Container>
                                    <Container $light={lightTheme} $popupButtonsContainer>
                                        <Button $Close type="button" $light={lightTheme} onClick={() => close()}>Close</Button>
                                        <Button type="button" $light={lightTheme} onClick={this.onClickLogout}>Confirm</Button>
                                    </Container>
                                </Container>
                            )}
                        </Popup>
                    </Container>
                )
            }}
        </ThemeContext.Consumer>
    )
    }
}
export default withRouter(ReactPopUp)