import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.$sub2?`${props.$light?'#f9f9f9' : '#0f0f0f'}`:`${props.$light? '#ffffff' : '#000000'}`)};
  min-height:100vh;
  height:auto;
  padding-top:${props => props.$sub1 ? '40px' : '0px'};
  margin-left:${props => props.$sub2 ? '20vw' : 'auto'};
  display: flex;
  justify-content: ${props => !props.$sub2 ? 'space-between' : 'center'};
  flex-direction: ${props => props.$sub1 ? 'row' : 'column'};
  align-items: center;
  width: 100%;
`;

export const Image = styled.img`
  width: 50%;
`
export const Text = styled.h1`
  color: ${props => props.$light ? '#000000' : '#ffffff'};
`;

