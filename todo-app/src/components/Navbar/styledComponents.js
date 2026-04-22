import styled from 'styled-components'
import {FaSun,FaMoon } from 'react-icons/fa'
import {Link} from 'react-router-dom'

export const ListItem=styled.li`
`
export const UnorderedList=styled.ul`
    display:flex;
    align-items:center;
    margin:0px;
    padding:10px;
    list-style-type:none;
`

export const LinkText=styled(Link)`
  text-decoration: none;
`


export const SunIcon = styled(FaSun)`
    color: #000000; 
    font-size: 24px;
    cursor: pointer;
`

export const MoonIcon = styled(FaMoon)`
    color: white; 
    font-size: 24px;
    cursor: pointer;
`

export const MainContainer = styled.div`
    background-color: ${props => props.$light ? '#ffffff' : '#000000'};
    display:flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width:100%;
    z-index: 1;
`
export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`
export const Image = styled.img`
    height:${props => props.$profile ? '80%' : '40px'};
    @media screen and (max-width: 767px) {
        height: ${props => props.$profile ? '80%' : '20px'};
    }
`
export const ProfileButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: 0px solid transparent;
    cursor: pointer;
    display: flex;
    padding:0px;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 767px) {
        display: none;
    }
`


export const Button = styled.button`
    width: 70px;
    height: 30px;
    background-color: transparent;
    border: ${props =>(props.$light ? '#3b82f6' : '#ffffff')};
    color: ${props =>props.$light ? '#3b82f6' : '#ffffff'};
    border-radius: 5px;
    cursor: pointer;
    padding: 0px;
`
