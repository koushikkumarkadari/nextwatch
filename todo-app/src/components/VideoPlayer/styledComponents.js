import styled from "styled-components";

export const Container = styled.div`
  padding:20px;
  width:${props => (props.$main ? '100%' : 'auto')};
  @media screen and (max-width:767px){
    padding:0px;
  }
`