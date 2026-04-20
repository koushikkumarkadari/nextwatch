import styled from 'styled-components';
import {NavLink} from 'react-router-dom'


export const SideBarContainer = styled.div`
  background-color:${props => (props.$light ? 'white':'black') };
  display:${props => (props.$main ? 'flex' : '')};
  height:${props => (props.$main ? '90%' : 'auto')};
  flex-direction:${props => (props.$main ? 'column' : 'auto')};
  justify-content:${props => (props.$main ? 'space-between' : 'auto')};
  width:${props => ( props.$bottom || props.$main ? '80%' : 'auto')};
  padding: ${props => (props.$bottom ? '5px' : '0px')};
  color:${props => (props.$light ? 'black' : 'white')};
  z-index: 1;
  position:${props => (props.$main ? 'fixed' : '')};
  @media screen and (min-width:576px) and (max-width:767px){
    width:${props=>(props.$bottom) || (props.$main)?'50%':'auto'};
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Container = styled.div`
  background-color:${props=>(props.$light?'white':'black')};
  color: ${props => (props.$light ? 'black' : 'white')};
  height: 40px;
  padding-left:5px;
  display: flex;
  align-items: center;
  cursor:${props => (props.$link ? 'pointer' : 'auto')};
`

export const Text=styled.p`
  text-decoration: none;
  margin: 0px;
  font-weight:500;
`

export const LinkText = styled(NavLink)`
  text-decoration: none;
  &.active div {
    background-color: ${props => (props.$light ? '#f1f5f9' : '#383838')};
  }
`

export const Image=styled.img`
  width: 30px;
  height: 30px;
  margin: 5px;
`