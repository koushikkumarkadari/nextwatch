import styled from 'styled-components';
import { AiOutlineLike ,AiOutlineDislike ,AiFillLike ,AiFillDislike } from "react-icons/ai";
import { BiListPlus,BiListCheck  } from "react-icons/bi";

export const LoaderContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height:100vh;
  width:100%;
`;
export const LikeIcon = styled(AiOutlineLike)`
  font-size: 24px;
  color: #64748b;
`;
export const DislikeIcon = styled(AiOutlineDislike)`
  font-size: 24px;
  color: #64748b;
`;
export const UnsavedIcon = styled(BiListPlus)`
  font-size: 24px;
  color: #64748b;
`;
export const SavedIcon = styled(BiListCheck)`
  font-size: 24px;
  color: #2563eb;
`;
export const LikedIcon = styled(AiFillLike)`
  font-size: 24px;
  color: #2563eb;
`;
export const DislikedIcon = styled(AiFillDislike)`
  font-size: 24px;
  color: #2563eb;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: ${props=> (props.$sideBarAndVideosContainer|| props.$viewsAndLikeDislikeContainer || props.$channelContainer || props.$likeDislike? 'row' : 'column')};
  justify-content: ${props => (props.$sideBarAndVideosContainer || props.$viewsAndLikeDislikeContainer || props.$channelContainer ? 'space-between' : `${props.$likeDislike ? 'end' : `${props.$failureContainer?'center':'start'}`}`)};
  align-items: ${props => (props.$viewsAndLikeDislikeContainer ||props.$failureContainer ? 'center' : 'start')};
  width:100%;
  min-height:${props=>(props.$videos || props.$failureContainer ? '100vh' : 'auto')};
  height:auto;
  background-color: ${props => (props.$videos || props.$viewsAndLikeDislikeContainer || props.$likeDislike || props.$channelContainer || props.$Title ? `${props.$light ? '#f8fafc' : '#181818'}` : `${props.$light ? 'white' : 'black'}`)};
  color: ${props => (props.$light ? 'black' : 'white')};
  padding-top:${props => (props.$sideBarAndVideosContainer ? '60px' : 'auto')};
  margin-left:${props => (props.$videos ? '20vw' : 'auto')};
  @media screen and (max-width:767px){
    margin:0px;
  }
`;
export const Image = styled.img`
  padding:${props=>(props.$failure?'0px':'0px 0px 0px 20px')};
  width:${props=>(props.$failure?'50%':'80px')};
  @media (max-width:575px){
    width:${props=>(props.$failure?'90%':'80px')};
  }
`
export const Text = styled.p`
  padding-left:20px;
  padding-right:20px;
  font-weight:${props => props.$desc ? '400' : '500'};
  margin:5px;
  text-align:${props=>(props.$failText?'center':'start')};
`
export const Button = styled.button`
  display:flex;
  justify-content:space-around;
  align-items:center;
  margin-right:20px;
  height:40px;
  background-color: ${props =>(props.$retry?'#4f46e5':`${(props.$light ? 'white' : 'black')}`) };
  border: none;
  border-radius: ${props=>(props.$retry?'0px':'40px')};
  cursor: pointer;
  width:${props=>(props.$retry?'80px':'auto')};
  color:${props=>props.$retry?'white':'black'};
`

export const LikeButton=styled(Button)`
  color:${props=>(props.$active?'#2563eb':"#64748b")}
`