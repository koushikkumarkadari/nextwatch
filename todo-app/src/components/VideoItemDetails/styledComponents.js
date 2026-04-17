import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: ${props=> (props.$sideBarAndVideosContainer|| props.$viewsAndLikeDislikeContainer || props.$channelContainer || props.$likeDislike? 'row' : 'column')};
  justify-content: ${props => (props.$sideBarAndVideosContainer || props.$viewsAndLikeDislikeContainer || props.$channelContainer ? 'space-between' : `${props.$likeDislike ? 'flex-end' : 'auto'}`)};
  align-items: ${props => (props.$viewsAndLikeDislikeContainer ? 'center' : 'start')};
  width:100%;
  min-height:${props=>(props.$videos ? '100vh' : 'auto')};
  max-height:auto;
  background-color: ${props => (props.$light ? 'white' : 'black')};
  color: ${props => (props.$light ? 'black' : 'white')};
  padding-top:${props => (props.$sideBarAndVideosContainer ? '60px' : 'auto')};
  margin-left:${props => (props.$videos ? '20vw' : 'auto')};

`;
export const Image = styled.img`
  padding:20px;
  width:${props => (props.$channel ? '80px' : '100%')};
`
export const Text = styled.p`
  padding-left:20px;
  padding-right:20px;
`
export const Button = styled.button`
  margin-right:20px;
  width:100px;
  height:40px;
`