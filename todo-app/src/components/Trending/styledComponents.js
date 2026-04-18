import styled from 'styled-components';
import {Link} from 'react-router-dom'


export const LinkText = styled(Link)`
  text-decoration: none;
`
export const Button = styled.button`
  background-color: ${props => (props.$light ? 'blue' : 'lightblue')};
  color: ${props => (props.$light ? 'white' : 'black')};
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`
export const Container = styled.div`
  width:100%;
  background-color: ${props => (props.$light ? 'white' : 'black')};
  display: ${props=> (props.$sideBarAndVideosContainer ? 'flex' : 'block')};
  padding-top:${props => (props.$sideBarAndVideosContainer ? '60px' : 'auto')};
  margin-left: ${props => (props.$videocontainer ? '20vw' : 'auto')};
  color: ${props => (props.$light ? 'black' : 'white')};
  min-height:${props => (props.$videocontainer ? '100vh' : 'auto')};
  height:auto;
`;
export const LoaderContainer = styled.div`
  display:flex;

  justify-content: center;
  align-items: center;
  height:100vh;
`;

export const UnorderedList = styled.ul`
  list-style-type: none;
  padding:40px;
  width:100%;
  overflow-y: auto;

`
export const ListItem = styled.li`
  display:flex;
  margin-bottom:20px;
`
export const Image = styled.img`
  width:50%;
`
export const Text = styled.p`
  font-size: ${props => (props.$trendingText ? '24px' : '16px')};
  font-weight: ${props => (props.$trendingText ? 'bold' : 'normal')};
  margin: ${props => (props.$trendingText ? '20px' : '0px')};
  margin-left:20px;
`

