import { NotFoundContainer,Image,Text ,Heading} from './styledComponents';
import  ThemeContext  from '../../context/ThemeContext';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const NotFound = () => (
    <ThemeContext.Consumer>
      {value => {
        const {lightTheme} = value
        return(
          <NotFoundContainer $main $light={lightTheme}>
            <Navbar />
            <NotFoundContainer $sub1 $light={lightTheme}>
              <Sidebar />
              <NotFoundContainer $sub2 $light={lightTheme}>
                <Image src={lightTheme ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png" : "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"} alt="not found" />
                <Heading $light={lightTheme}>Page Not Found</Heading>
                <Text $light={lightTheme}>We are sorry, the page you requested could not be found.</Text>
              </NotFoundContainer>
            </NotFoundContainer>
          </NotFoundContainer>
        )
      }
    }
    </ThemeContext.Consumer>
  )

export default NotFound;
