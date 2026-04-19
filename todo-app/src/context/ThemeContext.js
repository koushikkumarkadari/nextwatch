import React from 'react'

const ThemeContext = React.createContext({
  lightTheme: true,
  changeActiveTheme: () => {},

  sidebarOpen: false,
  toggleSidebar: () => {},

  likedVideos: [],
  addToLikedVideos: () => {},
  removeFromLikedVideos: () => {},

  dislikedVideos: [],
  addToDislikedVideos: () => {},
  removeFromDislikedVideos: () => {},

  banner:true,
  closeBanner: () => {},

  savedVids: [],
  saveVid: () => {},
  unsaveVid: () => {},
})
export default ThemeContext
