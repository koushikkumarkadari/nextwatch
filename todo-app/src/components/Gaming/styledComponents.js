import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const LinkText = styled(Link)`
  text-decoration: none;
  color: ${props => (props.$light ? 'black' : 'white')};
`

export const Container = styled.div`
  display: flex;
  flex-direction:${props=>(props.$sideBarAndVideosContainer?'row':'column')};
  align-items:${props=>(props.$failureContainer?'center':'')};
  padding-top:${props => (props.$sideBarAndVideosContainer ? '60px' : 'auto')};
  width:${props => (props.$videos ? '80vw' : 'auto')};
  margin-left:${props => (props.$videos ? '20vw' : 'auto')};
  background-color: ${props => (props.$light ? 'white' : 'black')};
  color: ${props => (props.$light ? 'black' : 'white')};
  min-height:100vh;
  height:auto;
  @media screen and (max-width:767px){
    margin:0px;
    width:${props => (props.$videos ? '100%' : 'auto')};
  }
`;
export const LoaderContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height:100vh;
`;

export const UnorderedList = styled.ul`
  display:flex;

  flex-wrap:wrap;
  list-style-type: none;
  padding:30px 40px 0px 40px;
  width:100%;
  overflow-y: auto;
  margin:0px;
  background-color: ${props => (props.$light ? '#f8fafc' : '#181818')};
  @media screen and (max-width:576px){
    padding:20px;
  }
`
export const ListItem = styled.li`
  padding:10px;
  width:33%;
  @media screen and (max-width:575px){
    width:50%;
  }
  
`
export const Image = styled.img`
  width:100%;
`
export const Text = styled.p`
  font-size: ${props => (props.$gamingText ? '24px' :'14px')};
  font-weight: ${props => (props.$gamingText ? 'bold' : 'normal')};
  padding: ${props => (props.$gamingText ? '20px 10px 20px 40px' : '0px')};
  margin:0px;
  text-align:${props=>(props.$failText?'center':'start')};
  background-color:${props => (props.$gamingText? `${props.$light ? '#F4F4F4' : '#7e858e'}` : '')};
`

export const GameIcon = styled.span`
  padding:10px;
  margin:0px 10px 0px 0px;
  border-radius:40px;
  background-color:${props => (props.$light ? '#e2e8f0' : '#383838')};
  text-align:center;
`
export const Button=styled.button`
  background-color:#4f46e5;
  height:40px;
  width:80px;
  border:0px;
  color:white;
`