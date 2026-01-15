const Movie = require('../models/movie.model');

const getMovieById  = async(id) => {
    const movie = Movie.findById(id);
    console.log("Movie found...", movie.id);
    if(!movie) {
        return {
            err: "No movie found for the corresponding id provided...",
            code: 404
        }
    };
    return movie;
}

const getAllMovies = async () => {
    try {
        const movies = await Movie.find();

        if (!movies || movies.length === 0) {
            return {
                err: "No movies found",
                code: 404
            };
        }

        return movies;
    } catch (error) {
        return {
            err: error.message,
            code: 500
        };
    }
};


module.exports = {getMovieById, getAllMovies}