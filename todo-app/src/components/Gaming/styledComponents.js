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
export const LoaderContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height:100vh;
`;

export const UnorderedList = styled.ul`
  display:flex;
  flex-wrap:wrap;
  list-style-type: none;
  padding:0px 40px 0px 40px;
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
  font-size: ${props => (props.$gamingText ? '24px' : `${props.$icon ? '36px' : '14px'}`)};
  font-weight: ${props => (props.$gamingText ? 'bold' : 'normal')};
  padding: ${props => (props.$gamingText ? '10px 10px 10px 40px' : `${props.$icon ? '10px' : '0px'}`)};
  margin:${props => (props.$icon ? '0px 10px 0px 0px' : '0px')};
  border-radius:${props=>(props.$icon ? '40px' : '0px')};
  background-color:${props => (props.$icon ? `${props.$light ? '#e2e8f0' : '#383838'}` : `${props.$gamingText? `${props.$light ? '#F4F4F4' : '#7e858e'}` : ''}`)};
  display:${props => (props.$icon ? 'inline-block' : '')};
  text-align:${props => (props.$icon ? 'center' : '')};
`
