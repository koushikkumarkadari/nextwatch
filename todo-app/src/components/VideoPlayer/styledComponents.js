import styled from "styled-components";

export const Container = styled.div`
  padding:20px;
  width:${props => (props.$main ? '100%' : 'auto')};
`