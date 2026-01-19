const { response } = require('express');
const Movie = require('../models/movie.model');
const movieService = require('../services/movie.service')
const {successResponseBody, errorResponseBody} = require('../utils/responsebody.js')


const createMovie = async (req, res) => {

    try {
        const response = await movieService.createMovie(req.body);
        if(response.err) {
            errorResponseBody.err = response.err;
            errorResponseBody.message = "Validation failed on few parameter of the request body"
            return res.status(response.code).json(errorResponseBody)
        }
        successResponseBody.data = response;
        successResponseBody.message="Successfully Created the Movie..."
        return res.status(201).json(successResponseBody)
    } catch (err) {
        console.log(err);
        return res.status(500).json(errorResponseBody);
    }
}

const getMovies = async (req, res) => {
    try {
        const response = await movieService.getAllMovies();

        if (response.err) {
            errorResponseBody.err = response.err;
            return res.status(response.code).json(errorResponseBody);
        }

        successResponseBody.data = response;
        return res.status(200).json(successResponseBody);

    } catch (err) {
        console.log(err);
        return res.status(500).json(errorResponseBody);
    }
};


const getMovieById = async (req, res) => {
    try {
        const response = await movieService.getMovieById(req.params.id);

        if (response.err) {
            errorResponseBody.err = response.err;
            return res.status(response.code).json(errorResponseBody);
        }

        successResponseBody.data = response; 
        return res.status(200).json(successResponseBody);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            error: err,
            data: {},
            message: "Something went wrong..."
        })
    }
}

const deleteMovie = async (req, res) => {
    try {
        const response = await movieService.deleteMovie(res.params.id);
        successResponseBody.data=response;
        successResponseBody.message="Successfully Deleted the Movie..."
        return res.status(200).json(successResponseBody);
    } catch (err) {
        console.log(err);
        return res.status(500).json(errorResponseBody)
    }
}


module.exports = { createMovie, deleteMovie, getMovies, getMovieById }