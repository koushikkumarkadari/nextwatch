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
  cursor: pointer;
  font-weight:100;
`
export const SearchContainer = styled.form`
  display:flex;
  width:50%;
  height:35px;
  border: ${props => (props.$light ? '1px solid black' : '1px solid white')};
  margin-top:25px;
  margin-left:25px;
  border-radius:3px;

  @media screen and (max-width:767px){
    margin:15px;
    width:90%;
  }
`
export const InputContainer = styled.div`
  width:80%;
  background-color: ${props => (props.$light ? 'white' : 'black')};
  border-radius:3px;
  @media screen and (max-width: 575px) {
    width:100%;
  }
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

  @media screen and  (max-width: 575px) {
    flex-direction: ${props => ((props.$main||props.$Banner) ? 'column' : '')};
    justify-content: ${props => ((props.$Banner) ? 'center' : '')};
    align-items: ${props => ((props.$Banner) ? 'center' : '')};
    margin-left: ${props => (props.$BannerandVideosContainer ? '0vw' : 'auto')};
  }
`;
export const LoaderContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height:100vh;
  `
export const TextContainer = styled.div`
  display:flex;
  flex-direction:column;
  padding:10px;
  background-color: ${props => (props.$light ? '#f9f9f9' : '#0f0f0f')};

`
export const VideosContainer = styled.div`
  width:78vw;
  background-color: ${props => (props.$light ? '#f9f9f9' : '#0f0f0f')};
  overflow-y: auto;
  min-height:100vh;
  height:auto;
  @media (max-width: 767px) {
    width:100%;
  }
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
  width:100%;
  list-style-type:none;
  padding-left:20px;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  overflow-y: auto;
  min-height:100vh;
  height:auto;

  @media screen and (max-width:575px){
    padding:10px;
  }
`
export const ListItem=styled.li`
  width:33%;
  @media screen and (max-width: 575px) {
    width:100%;
  }
`
export const SearchButton=styled.button`
    background-color: ${props => (props.$light ? '#f4f4f4' : '#383838')};

  border-width:0px 0px 0px 1px;
  color: ${props => (props.$light ? 'black' : 'white')};
  height:100%;
  width:20%;
`
export const Button=styled.button`
  background-color:transparent;
  border-width:1px;
  height:40px;
  width:100px;
  cursor:pointer;
`
export const Input=styled.input`
  border-width:0px;
  background-color:transparent;
  font-size:14px;
  outline:none;
  color: ${props => (props.$light ? 'black' : 'white')};
  width:100%;
  height:100%;
  padding-left:10px;
`