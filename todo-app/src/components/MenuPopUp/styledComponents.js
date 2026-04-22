import styled from 'styled-components';
import {NavLink} from 'react-router-dom'
import {FaBars } from 'react-icons/fa'
import { IoIosClose } from "react-icons/io";

export const ListItem=styled.li``
export const SideBarContainer = styled.div`
  background-color:${props => (props.$light ? 'white':'black') };
  display:flex;
  flex-direction:${props => (props.$sub1 ? 'column' : 'row')};
  padding:0px;
  margin:0px;
  color:${props => (props.$light ? 'black' : 'white')};
  list-style-type:none;
  @media screen and (min-width: 768px) {
    display: none;
  }
    
`
export const MenuButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: ${props=>(props.$light?'white':'black')};
    border: 0px solid transparent;
    cursor: pointer;
    display: none;
    padding:0px;

    @media screen and (max-width: 767px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const CloseIcon=styled(IoIosClose)`
    color: ${props => props.$light ? '#000000' : '#ffffff'};
    font-size: 44px;
    cursor: pointer;
`

export const FaBarsIcon = styled(FaBars)`
    color: ${props => props.$light ? '#000000' : '#ffffff'};
    font-size: 24px;
    cursor: pointer;
`

export const Container = styled.div`
  background-color:${props=>(props.$light?'white':'black')};
  color: ${props => (props.$light ? 'black' : 'white')};
  display: flex;
  align-items: center;
  cursor:pointer;
  padding:10px;
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