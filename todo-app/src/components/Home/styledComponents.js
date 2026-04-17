import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { MdCancel } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

export const LinkText=styled(Link)`
  text-decoration: none;
  color: ${props => (props.$light ? 'black' : 'white')};
`
export const CancelIcon = styled(MdCancel)`
  color: black;
  font-size: 20px;
  cursor: pointer;
`
export const SearchIcon = styled(FaSearch)`
  color: ${props => (props.$light ? 'black' : 'white')};
  font-size: 20px;
  cursor: pointer;
`
export const SearchContainer = styled.div`
  display:flex;
  align-items:center;
  margin-left:20px;
  margin-top:20px;
  width:300px;

`
export const InputContainer = styled.div`
  width:80%;
  background-color: ${props => (props.$light ? 'white' : 'black')};
  border: ${props => (props.$light ? '1px solid black' : '1px solid white')};
  width:240px;
  padding:5px;
  margin-right:10px;
  border-radius:10px;
`
export const BannerContainer = styled.div`
  display:flex;
  flex-direction:${props => (props.$Banner ? 'column' : 'row')};
  justify-content: space-between;
  align-items: ${props => (props.$Banner ? 'start' : 'auto')};
  padding: 20px;
  background-image: ${props => (!props.$Banner ? 'url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png")' : 'none')};
  background-size: cover;
  background-position: center;
`
export const Container = styled.div`
  display: ${props => ((props.$main||props.$Banner) ? 'flex' : 'block')};
  flex-direction: ${props => ((props.$main||props.$Banner) ? 'row' : '')};
  justify-content: ${props => ((props.$Banner) ? 'space-between' : '')};
  width:100%;
  background-color: ${props => (props.$light ? 'white' : 'black')};
  background-size: cover;
  background-position: center;
  padding: ${props => (props.$Banner ? '20px' : '0px')};
  padding-top:${props => (props.$main ? '60px' : 'auto')};
  margin-left:${props=>(props.$BannerandVideosContainer ? '20vw' : 'auto')};
  min-height:${props => (props.$loader || props.$failureContainer ? '100vh' : 'auto')};
  height:auto;
  color: ${props => (props.$light ? 'black' : 'white')};
`;
export const VideosContainer = styled.div`
  width:78vw;
  background-color: ${props => (props.$light ? 'white' : 'black')};
  overflow-y: auto;
  min-height:100vh;
  height:auto;
`
export const ChannelContainer = styled.div`
  display:flex;
  align-items:start;
  padding-bottom:10px;
`

export const Image = styled.img`
  width: ${props => (props.$thumbnail ? '100%' : `${props.$profilechannel ? '40px' : `${props.$bannerLogo ? '140px' : 'auto'}`}`)};
  padding:5px;
`
export const BannerText = styled.p`
  font-size: 16px;
  font-weight:500;
  color:black;
`
export const Text=styled.p`
  margin:0px;
`
export const UnorderedList=styled.ul`
  height:auto;
  width:100%;
  list-style-type:none;
  padding-left:20px;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
    overflow-y: auto;
  min-height:100vh;
  max-height:auto;
`
export const ListItem=styled.li`
  width:33%;
`
export const SearchButton=styled.button`
  background-color:transparent;
  border-width:0px;
  color: ${props => (props.$light ? 'black' : 'white')};
`
export const Button=styled.button``
export const Input=styled.input`
  border-width:0px;
  background-color:transparent;
  font-size:16px;
  outline:none;
  color: ${props => (props.$light ? 'black' : 'white')};
`