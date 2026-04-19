import styled from 'styled-components';

export const ContainerBig = styled.div`
  background-color: ${props => (props.$theme ? 'white' : 'black')};
  color: ${props => (props.$theme ? 'black' : 'white')};
  min-height: 100vh;
  height: auto;
  display:flex;
  justify-content:center;
  align-items:center;
  
`

export const ContainerOne = styled.div`
  padding:20px;
  border-radius:20px;
  box-shadow:4px 4px 4px 4px #231f20;
  background-color: ${props => (props.$theme ? 'white' : 'black')};
  @media screen and (max-width:767px){
    width:90%;
  }
`

export const Container = styled.div`
  background-color: ${props => (props.$theme ? 'white' : 'black')};
  margin:10px;
`
export const Text = styled.p`
  font-family:'Roboto';
  font-size:15px;
  font-weight:500;
`

export const CustomButton = styled.button`
  color:white;
  background-color:#3b82f6;
  text-align:center;
  border-radius:10px;
  height:40px;
  width:100%;
  border-color:transparent;
  margin:10px;
`
export const InputContainer = styled.div`
  border-radius:10px;
  border-style:solid;
  border-width:1px;
  border-color:#94a3b8;
  height:40px;
  width:100%;
  padding:5px;
`
export const Input = styled.input`
  border-width:0px;
  font-size:16px;
  width:${props => (props.$checkbox ? 'auto' : '100%')};
  height:${props => (props.$checkbox ? 'auto' : '100%')};
  outline:none;
  background-color:${props => (props.$light ? 'white' : 'black')};
  color: ${props => (props.$light ? 'black' : 'white')};
`

export const Image = styled.img`
  margin:20px;
  @media screen and (max-width:767px){
    width:100%;
    padding:10px;
    margin:0px;
  }
`
