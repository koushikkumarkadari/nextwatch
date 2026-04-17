import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
  display:${props => (props.$main ? 'flex' : 'block')};
  height:${props => (props.$main ? '90%' : 'auto')};
  flex-direction:${props => (props.$main ? 'column' : 'auto')};
  justify-content:${props => (props.$main ? 'space-between' : 'auto')};
  width:${props => (props.$main ? '20vw' : 'auto')};
  padding: ${props => (props.$main ? '20px' : '0px')};
  position:${props => (props.$main ? 'fixed' : '')};
  color:${props => (props.$light ? 'black' : 'white')};
`;
export const Text=styled.p`
  text-decoration: none;
`
export const LinkText=styled(Link)`
  text-decoration: none;
  color: ${props => (props.$light ? 'black' : 'white')};
`

export const Image=styled.img`
  width: 30px;
  height: 30px;
  margin: 5px;
`;