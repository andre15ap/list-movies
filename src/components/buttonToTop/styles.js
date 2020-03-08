import styled from 'styled-components';


export const ButtonToTop = styled.TouchableOpacity`
    position: absolute;
    align-items: center;
    justify-content:center;
    border-radius: 50px;
    background: ${props => props.color|| ' rgba(116, 85, 255, 0.4)'};
    elevation: 1;
    bottom: 10px;
    right: 15px;
    padding: 15px 16px;
 
`