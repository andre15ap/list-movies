import styled from 'styled-components';


export const Card = styled.View`
    flex: 1;
    padding: 20px;
    margin: 5px 0 5px 0;
    background:#fff;
    border-radius: 3px;
    shadow-color: #000;
    shadow-offset: 2px 5px;
    shadow-opacity: 0.8;
    shadow-radius: 2px;
    elevation: 2;
`;


export const ItemText = styled.Text`
    font-size: ${props => props.size || 20}px;
    color: ${props => props.color || '#003'};
    margin: 3px 0;
`;