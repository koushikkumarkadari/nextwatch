import styled from 'styled-components'
import {FaSun} from 'react-icons/fa'
import {FaMoon} from 'react-icons/fa'

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
`
export const Button = styled.button`
    width: 70px;
    height: 30px;
    background-color: transparent;
    border: ${props => props.$profile ? '0px solid transparent' : `1px solid ${props.$light ? '#3b82f6' : '#ffffff'}`};
    color: ${props =>props.$light ? '#3b82f6' : '#ffffff'};
    border-radius: 5px;
    cursor: pointer;
    padding: 0px;
`
