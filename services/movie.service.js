const Movie = require('../models/movie.model');


const crateMovie = async (data) => {
    try {
        const movie = await Movie.create(data);
        return movie;
    } catch (error) {
        if(error.name == 'validationError')
        {
            let err = {};
            Object.keys(error.errors).forEach((key) =>{
                err[key] = error.errors[key].message;
            })
            console.log(err);
            return {err: err, code: 422}
        }
        else
        {
            throw error;
        }
    }
}

const getMovieById = async (id) => {
    const movie = Movie.findById(id);
    console.log("Movie found...", movie.id);
    if (!movie) {
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

const deleteMovie = async (id) => {
    const response = await Movie.findByIdAndDelete(id);
    return response;
}


module.exports = { crateMovie, getMovieById, getAllMovies, deleteMovie }