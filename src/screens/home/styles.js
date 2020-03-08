import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    margin-top: -30px;
    padding: 30px 15px 0 15px;
    width: 100%;
    background:${props => props.color};
`;
