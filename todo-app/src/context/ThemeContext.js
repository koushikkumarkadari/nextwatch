import React from 'react'

const ThemeContext = React.createContext({
  lightTheme: true,
  banner:true,
  closeBanner: () => {},
  changeActiveTheme: () => {},
  savedVids: [],
  saveVid: () => {},
  unsaveVid: () => {},
})
export default ThemeContext
