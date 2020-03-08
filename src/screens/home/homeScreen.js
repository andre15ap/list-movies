import React from 'react';
import { connect } from 'react-redux';

import COLORS from '../../config/colors';

import ButtonToTopComponent from '../../components/buttonToTop/ButtonToTopComponent';
import ContainerListComponent from '../../components/containerList/ConteinerListComponent';

import { Container } from './styles';


function HomeScreen({nextPage}){
    const scroll = React.createRef();

    return (
        <Container color={COLORS.PRIMARY} >  

          <ContainerListComponent scroll={scroll} />
           
          <ButtonToTopComponent nextPage={nextPage} scroll={scroll} />

        </Container>
    )
}

const mapStateToProps = state => ({
  nextPage: state.movies.nextPage,
});

export default connect(mapStateToProps)(HomeScreen);