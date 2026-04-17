import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const LinkText = styled(Link)`
  text-decoration: none;
  color: ${props => (props.$light ? 'black' : 'white')};
`

export const Container = styled.div`
  display: ${props=> (props.$sideBarAndVideosContainer ? 'flex' : 'block')};
  padding-top:${props => (props.$sideBarAndVideosContainer ? '60px' : 'auto')};
  width:${props => (props.$videos ? '100%' : 'auto')};
  margin-left:${props => (props.$videos ? '20vw' : 'auto')};
  background-color: ${props => (props.$light ? 'white' : 'black')};
  color: ${props => (props.$light ? 'black' : 'white')};
  min-height:100vh;
  height:auto;
`;

export const UnorderedList = styled.ul`
  display:flex;
  flex-wrap:wrap;
  list-style-type: none;
  padding:40px;
  width:100%;
  overflow-y: auto;
`
export const ListItem = styled.li`
  padding:10px;
  width:33%;
`
export const Image = styled.img`
  width:100%;
`
export const Text = styled.p`
  font-size: ${props => (props.$gamingText ? '24px' : '16px')};
  font-weight: ${props => (props.$gamingText ? 'bold' : 'normal')};
  margin: ${props => (props.$gamingText ? '20px' : '5px')};
`
