import styled from 'styled-components';
import {Link} from 'react-router-dom'



export const LinkText = styled(Link)`
  text-decoration: none;
  color: ${props => (props.$light ? 'black' : 'white')};
`

export const Container = styled.div`
  display: ${props=> (props.$sideBarAndVideosContainer || props.$failureView ? 'flex' : 'block')};
  flex-direction: ${props => (props.$failureView ? 'column' : 'row')};
  justify-content:${props => (props.$failureView && 'center')};
  align-items: ${props => (props.$failureView && 'center')};
  width:${props => (props.$videos || props.$failureView ? '100%' : 'auto')};
  padding-top:${props => (props.$sideBarAndVideosContainer ? '60px' : 'auto')};
  margin-left:${props => (props.$videos || props.$failureView ? '20vw' : 'auto')};
  background-color: ${props => (props.$Title ? (props.$light ? '#f8fafc' : '#181818') : (props.$light ? 'white' : 'black'))};
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
  padding: ${props => (props.$savedVideos ? '20px 10px 20px 40px' : '0px')};
  margin:0px;
  background-color:${props => (props.$savedVideos? `${props.$light ? '#F4F4F4' : '#7e858e'}` : '')};
`
export const LoveIcon = styled.span`
  padding:10px;
  margin:0px 10px 0px 0px;
  border-radius:40px;
  background-color:${props => (props.$light ? '#e2e8f0' : '#383838')};
  text-align:center;
`
export const UnorderedList = styled.ul`
  list-style-type: none;
  padding:30px 20px 0px 40px;
  width:100%;
  overflow-y: auto;
  margin:0px;
  height:100vh;
  background-color: ${props => (props.$light ? '#f8fafc' : '#181818')};
`
export const ListItem = styled.li`
  display:flex;
`
