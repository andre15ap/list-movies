import Api from './api';

async function getMovies (page) {
    return await Api.get(`/movies/popular?page=${page}`);
}

export default getMovies;