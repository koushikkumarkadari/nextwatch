import styled from 'styled-components';
import {Link} from 'react-router-dom'



export const LinkText = styled(Link)`
  text-decoration: none;
  color: ${props => (props.$light ? 'black' : 'white')};
`

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => (props.$failureView ||props.$videos || props.$Title? 'column' : 'row')};
  justify-content:${props => (props.$failureView && 'center')};
  align-items: ${props => (props.$failureView && 'center')};
  width:${props => (props.$videos || props.$failureView ? '80vw' : 'auto')};
  padding-top:${props => (props.$sideBarAndVideosContainer ? '60px' : 'auto')};
  margin-left:${props => (props.$videos || props.$failureView ? '20vw' : 'auto')};
  background-color: ${props => (props.$Title ||props.$channel ? (props.$light ? '#f8fafc' : '#181818') : (props.$light ? 'white' : 'black'))};
  color: ${props => (props.$light ? 'black' : 'white')};
  min-height:${props => (props.$videos || props.$failureView ? '100vh' : 'auto')};
  height:auto;
  @media screen and (max-width:767px){
    margin:0px;
    width:${props => (props.$videos || props.$failureView ? '100%' : 'auto')};
  }
`
export const Image = styled.img`
  width:50%;
  padding:10px;
  @media screen and (max-width:767px){
    width:100%;
  } 
`
export const ChannelLogo=styled.img`
  display:none;
  border-radius:40px;
  margin:10px;
  width:40px;
  height:40px;
  @media screen and (max-width:575px){
    display:flex;
  }
`
export const Text = styled.p`
  font-size: ${props => (props.$savedVideos ? '24px' : '16px')};
  font-weight: ${props => (props.$savedVideos || props.$nothing ? 'bold' : 'normal')};
  padding: ${props => (props.$savedVideos ? '20px 10px 20px 40px' : '0px')};
  margin:0px;
  background-color:${props => (props.$savedVideos? `${props.$light ? '#F4F4F4' : '#7e858e'}` : '')};
  text-align:${props=>props.$nothing?'center':'start'};
  @media screen and (max-width:767px){
    padding:${props=>(props.$heading? '20px':'0px 10px 0px 10px')};
  }
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
  @media screen and (min-width:576px) and (max-width:767px){
    padding:20px;
  }
  @media screen and (max-width:575px){
    padding:0px;
  }
`
export const ListItem = styled.li`
  display:flex;
  @media screen and (max-width:575px){
    flex-direction:column;
  }
`
