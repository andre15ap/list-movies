import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import reduces from  './ducks';
import getMoviesList from './sagas'; 

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reduces, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(getMoviesList);

export default store;

