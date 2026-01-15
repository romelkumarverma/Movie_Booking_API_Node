const movieController = require("../controllers/movie.controller");
const movieMiddlewares = require('../middlewares/movie.middlewares');

const routes = (app) => {
    app.post(
        '/mba/api/v1/movies', 
        movieMiddlewares.validateMovieCreateRequest,
        movieController.createMovie
    );

    app.delete(
        '/mba/api/v1/movies/:id',
        movieController.deleteMovie
    )

    app.get(
        '/mba/api/v1/movies',
        movieController.getMovies
    )

    app.get(
        '/mba/api/v1/movies/:id',
        movieController.getMovieById
    )
}

module.exports = routes;