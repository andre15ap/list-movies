import styled from 'styled-components';

export const ContainerList = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    /* margin-top: 40px; */
`;

export const Loading = styled.ActivityIndicator`
    width: 100%;
    align-self: center;
`