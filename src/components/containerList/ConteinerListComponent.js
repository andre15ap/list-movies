import React, { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as MovieActions } from '../../store/ducks/movies';

import CardItemComponent from '../cardItem/cardItemComponent';

import { ContainerList, Loading} from './styles';

function ContainerListComponent({movies, lastPage, nextPage, isLoading, actions, scroll}){
    const [refreshing, setRefreshing] = useState(false);

    async function getMovies(){
        if (! isLoading && !lastPage) {
          await actions.requestMovies(nextPage);
        };
      }
  
    async function onRefresh(){
        setRefreshing(true);
        await actions.requestMovies(1);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }

    async function isCloseToBottom ({layoutMeasurement, contentOffset, contentSize}){
        const paddingToBottom = 25;
        if((layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom) && ! isLoading) {
            await getMovies()
        }
    };

    useEffect(()=>{
        movies.length == 0 && getMovies();
    },[])

    return (
        <ContainerList
            ref={scroll}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={()=>onRefresh()} />
            }
            onScroll={({nativeEvent})=>{
                isCloseToBottom(nativeEvent)
            }}>
            {
                movies.map((item) => <CardItemComponent key={item.title} item={item} />)
            }
            {!lastPage && <Loading />}
        </ContainerList>
    )
}

const mapStateToProps = state => ({
    movies: state.movies.movies,
    isLoading: state.movies.isLoading,
    lastPage: state.movies.lastPage,
    nextPage: state.movies.nextPage,
  });
  
const mapDispatchToProps = dispatch => ({
actions: bindActionCreators({...MovieActions}, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(ContainerListComponent);