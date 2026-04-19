import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: ${props => props.$main ? 'column' : 'row'};
    justify-content: ${props => props.$popupButtonsContainer ? 'space-around' : 'center'};
    background-color: ${props => (props.$light ? '#f1f5f9' : '#383838')};
    padding: ${props => props.$main ? '20px' : '0px'};
`
export const Text = styled.p`
    font-size: 18px;
    color: ${props => (props.$light ? 'black' : 'white')};
    text-align: center;
`
export const Button = styled.button`
    background-color: ${props => (props.$Close ? `${props.$light ? 'white' : 'black'}` : '#3b82f6')};
    border: 1px solid #3b82f6;
    color: ${props => (props.$Close ? '#3b82f6' : '#ffffff')};
    cursor: pointer;
    padding: 5px 10px;
`