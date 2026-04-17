import styled from 'styled-components';
import {Link} from 'react-router-dom'



export const LinkText = styled(Link)`
  text-decoration: none;
  color: ${props => (props.$light ? 'black' : 'white')};
`

export const Container = styled.div`
  display: ${props=> (props.$sideBarAndVideosContainer ? 'flex' : 'block')};
  width:${props => (props.$videos ? '100%' : 'auto')};
  padding-top:${props => (props.$sideBarAndVideosContainer ? '60px' : 'auto')};
  margin-left:${props => (props.$videos || props.$failureView ? '20vw' : 'auto')};
  background-color: ${props => (props.$light ? 'white' : 'black')};
  color: ${props => (props.$light ? 'black' : 'white')};
  min-height:${props => (props.$videos || props.$failureView ? '100vh' : 'auto')};
  height:auto;
`
export const Image = styled.img`
  width:50%;
  padding:10px;
`
export const Text = styled.p`
  font-size: ${props => (props.$savedVideos ? '24px' : '16px')};
  font-weight: ${props => (props.$savedVideos ? 'bold' : 'normal')};
  margin: ${props => (props.$savedVideos ? '20px' : '5px')};
`
export const UnorderedList = styled.ul`
  list-style-type: none;
  padding:40px;
  width:100%;
  overflow-y: auto;
`
export const ListItem = styled.li`
  display:flex;
`
