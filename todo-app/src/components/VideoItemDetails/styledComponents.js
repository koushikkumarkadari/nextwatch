import styled from 'styled-components';
import { AiOutlineLike ,AiOutlineDislike ,AiFillLike ,AiFillDislike } from "react-icons/ai";
import { BiListPlus,BiListCheck  } from "react-icons/bi";

export const LikeIcon = styled(AiOutlineLike)`
  font-size: 24px;
  color: ${props => (props.$light ? 'black' : 'white')};
`;

export const DislikeIcon = styled(AiOutlineDislike)`
  font-size: 24px;
  color: ${props => (props.$light ? 'black' : 'white')};
`;

export const UnsavedIcon = styled(BiListPlus)`
  font-size: 24px;
  color: ${props => (props.$light ? 'black' : 'white')};
`;
export const SavedIcon = styled(BiListCheck)`
  font-size: 24px;
  color: ${props => (props.$light ? 'black' : 'white')};
`;
export const LikedIcon = styled(AiFillLike)`
  font-size: 24px;
  color: ${props => (props.$light ? 'black' : 'white')};
`;
export const DislikedIcon = styled(AiFillDislike)`
  font-size: 24px;
  color: ${props => (props.$light ? 'black' : 'white')};
`;


export const Container = styled.div`
  display: flex;
  flex-direction: ${props=> (props.$sideBarAndVideosContainer|| props.$viewsAndLikeDislikeContainer || props.$channelContainer || props.$likeDislike? 'row' : 'column')};
  justify-content: ${props => (props.$sideBarAndVideosContainer || props.$viewsAndLikeDislikeContainer || props.$channelContainer ? 'space-between' : `${props.$likeDislike ? 'flex-end' : 'auto'}`)};
  align-items: ${props => (props.$viewsAndLikeDislikeContainer ? 'center' : 'start')};
  width:100%;
  min-height:${props=>(props.$videos ? '100vh' : 'auto')};
  max-height:auto;
  background-color: ${props => (props.$videos || props.$viewsAndLikeDislikeContainer || props.$likeDislike || props.$channelContainer || props.$Title ? `${props.$light ? '#f8fafc' : '#181818'}` : `${props.$light ? 'white' : 'black'}`)};
  color: ${props => (props.$light ? 'black' : 'white')};
  padding-top:${props => (props.$sideBarAndVideosContainer ? '60px' : 'auto')};
  margin-left:${props => (props.$videos ? '20vw' : 'auto')};
  @media screen and (max-width:767px){
    margin:0px;
  }
`;
export const Image = styled.img`
  padding:0px 0px 0px 20px;
  width:80px;
`
export const Text = styled.p`
  padding-left:20px;
  padding-right:20px;
  font-weight:${props => props.$desc ? '400' : '500'};
  margin:5px;
`
export const Button = styled.button`
  margin-right:20px;
  width:40px;
  height:40px;
  background-color: ${props => (props.$light ? '#e2e8f0' : '#383838')};
  border: none;
  border-radius: 40px;
  cursor: pointer;
`