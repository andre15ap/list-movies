
export const types = {
    REQUEST_MOVIES: 'moveis/REQUEST_MOVIES',
    SUCCESS_MOVIES: 'movies/SUCCESS_MOVIES',
    FAILURE_MOVIES: 'movies/FAILURE_MOVIES',
}

const INITIAL_STATE = {
    movies: [],
    page: 0,
    nextPage: 1,
    lastPage: false,
    isLoading: false,
    erro: false
}

export default function movies(state=INITIAL_STATE, action){
    
    switch (action.type){
        case types.REQUEST_MOVIES:
            return {...state, isLoading: true}
        case types.SUCCESS_MOVIES:
            
            return {
                movies: action.payload.page == 1 ? action.payload.data : [...state.movies,...action.payload.data],
                page: action.payload.page,
                isLoading: false,
                erro: false,
                nextPage:  action.payload.nextPage,
                lastPage: action.payload.lastPage
            }
        case types.FAILURE_MOVIES:
            console.log('falhou')
            return {
                ...state,
                isLoading: false, erro: true
            }
        default: 
            return state;
    }
}

export const Creators = {
    requestMovies: (nextPage) => ({
        type: types.REQUEST_MOVIES,
        payload: nextPage
     })
}