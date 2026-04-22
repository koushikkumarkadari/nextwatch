import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

export const ListItem=styled.li`
`
export const UnorderedList=styled.ul`
  display:flex;
  flex-direction:column;
  padding:0px;
  list-style-type:none;
`
export const SideBarContainer = styled.div`
  display:${props => (props.$main ? 'flex' : '')};
  height:${props => (props.$main ? '90%' : 'auto')};
  flex-direction:${props => (props.$main ? 'column' : 'auto')};
  justify-content:${props => (props.$main ? 'space-between' : 'auto')};
  width:${props => (props.$main ? '20vw' : 'auto')};
  padding: ${props => (props.$bottom ? '20px' : '0px')};
  position:${props => (props.$main ? 'fixed' : '')};
  color:${props => (props.$light ? 'black' : 'white')};
  @media screen and (max-width: 767px) {
    display: ${props => (props.$main ? 'none' : '')};
  }
`

export const Container = styled.div`
  color: ${props => (props.$light ? 'black' : 'white')};
  height: 40px;
  padding-left: 20px;
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