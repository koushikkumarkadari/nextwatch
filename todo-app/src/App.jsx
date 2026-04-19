import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import Gaming from './components/Gaming'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import SavedVideos from './components/SavedVideos'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import { LikeIcon } from './components/VideoItemDetails/styledComponents'

class App extends Component {
  state = {
    lightTheme: true,
    sidebarOpen: false,
    likedVideos:[],
    dislikedVideos: [],
    banner:true,
    savedVids: [
      /*{
        id: '30b642bd-7591-49f4-ac30-5c538f975b15',
        title:
          'Sehwag shares his batting experience in iB Cricket | iB Cricket Super Over League',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-1-img.png',
        channel: {
          name: 'iB Cricket',
          profileImageUrl:
            'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png',
        },
        viewCount: '1.4K',
        publishedAt: 'Apr 19, 2019',
      },{
        id: '30b642bd-7591-49f4-ac30-5c538f975b15',
        title:
          'Sehwag shares his batting experience in iB Cricket | iB Cricket Super Over League',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-1-img.png',
        channel: {
          name: 'iB Cricket',
          profileImageUrl:
            'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png',
        },
        viewCount: '1.4K',
        publishedAt: 'Apr 19, 2019',
      },{
        id: '30b642bd-7591-49f4-ac30-5c538f975b15',
        title:
          'Sehwag shares his batting experience in iB Cricket | iB Cricket Super Over League',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-1-img.png',
        channel: {
          name: 'iB Cricket',
          profileImageUrl:
            'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png',
        },
        viewCount: '1.4K',
        publishedAt: 'Apr 19, 2019',
      },{
        id: '30b642bd-7591-49f4-ac30-5c538f975b15',
        title:
          'Sehwag shares his batting experience in iB Cricket | iB Cricket Super Over League',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-1-img.png',
        channel: {
          name: 'iB Cricket',
          profileImageUrl:
            'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png',
        },
        viewCount: '1.4K',
        publishedAt: 'Apr 19, 2019',
      },{
        id: '30b642bd-7591-49f4-ac30-5c538f975b15',
        title:
          'Sehwag shares his batting experience in iB Cricket | iB Cricket Super Over League',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-1-img.png',
        channel: {
          name: 'iB Cricket',
          profileImageUrl:
            'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png',
        },
        viewCount: '1.4K',
        publishedAt: 'Apr 19, 2019',
      },*/
    ],
  }

  toggleSidebar = () => {
    this.setState(prevState => ({sidebarOpen: !prevState.sidebarOpen}))
  }


  addToLikedVideos= (id) => {
    this.setState(prevState => ({likedVideos: [...prevState.likedVideos, id]}))
  }

  addToDislikedVideos= (id) => {
    this.setState(prevState => ({dislikedVideos: [...prevState.dislikedVideos, id]}))
  }

  removeFromLikedVideos= (id) => {
    this.setState(prevState => ({likedVideos: prevState.likedVideos.filter(videoId => videoId !== id)}))
  }

  removeFromDislikedVideos= (id) => {
    this.setState(prevState => ({dislikedVideos: prevState.dislikedVideos.filter(videoId => videoId !== id)}))
  }

  changeActiveTheme = () => {
    this.setState(prevState => ({lightTheme: !prevState.lightTheme}))
  }

  closeBanner = () => {
    this.setState({banner: false})
  }

  saveVid = vid => {
    this.setState(prevState => ({savedVids: [...prevState.savedVids, vid]}))
  }

  unsaveVid = id => {
    const {savedVids} = this.state
    const newSet = savedVids.filter(each => each.id !== id)
    this.setState({savedVids: newSet})
  }

  render() {
    const {lightTheme,banner, savedVids, likedVideos, dislikedVideos,sidebarOpen} = this.state
    return (
      <ThemeContext.Provider
        value={{
          lightTheme,
          sidebarOpen,
          toggleSidebar: this.toggleSidebar,
          banner,
          likedVideos,
          dislikedVideos,
          addToLikedVideos: this.addToLikedVideos,
          addToDislikedVideos: this.addToDislikedVideos,
          removeFromLikedVideos: this.removeFromLikedVideos,
          removeFromDislikedVideos: this.removeFromDislikedVideos,
          closeBanner: this.closeBanner,
          changeActiveTheme: this.changeActiveTheme,
          savedVids,
          saveVid: this.saveVid,
          unsaveVid: this.unsaveVid,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
export default App
