import { takeLatest, put, call, all, take, select } from 'redux-saga/effects';

import { types } from './ducks/movies';
import apiMovies from '../services/apiMovies';





function* getMoviesList(action) {
  try {
    const response = yield call(apiMovies, action.payload);

    const page = parseInt(response.headers['x-pagination-page']);
    const nextPage = parseInt(response.headers['x-pagination-page']) + 1;
    const lastPage = parseInt(response.headers['x-pagination-page-count']) <= page ;
  
    yield put(
        { 
          type: types.SUCCESS_MOVIES, 
          payload: 
          { 
            data: response.data, 
            page: page,
            nextPage: nextPage,
            lastPage: lastPage
          }
        }
      );
  } catch (err) {
    console.log(err)
    yield put({ type: types.FAILURE_MOVIES });
  }
}

function* mySaga() {
  yield all([
    takeLatest(types.REQUEST_MOVIES, getMoviesList),
  ]);
}

export default mySaga;