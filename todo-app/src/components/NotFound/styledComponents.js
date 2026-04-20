import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.$sub2?`${props.$light?'#f9f9f9' : '#0f0f0f'}`:`${props.$light? '#ffffff' : '#000000'}`)};
  min-height:100vh;
  height:auto;
  padding-top:${props => props.$sub1 ? '30px' : '0px'};
  margin-left:${props => props.$sub2 ? '20vw' : 'auto'};
  display: flex;
  justify-content: ${props => !props.$sub2 ? 'space-between' : 'center'};
  flex-direction: ${props => props.$sub1 ? 'row' : 'column'};
  align-items: center;
  width: 100%;

  @media screen and (max-width:767px){
    margin:0px;
  }
`;

export const Image = styled.img`
  width: 50%;
  @media screen and (max-width:767px){
    width:90%;
  }
`
export const Heading=styled.h1`
  color: ${props => props.$light ? '#000000' : '#ffffff'};
  text-align:center;
  @media screen and (max-width:767px){
    font-size:24px;
  }
`
export const Text = styled.p`
  color: ${props => props.$light ? '#000000' : '#ffffff'};
  text-align:center;
  @media screen and (max-width:767px){
    font-size:14px;
  }
`;

