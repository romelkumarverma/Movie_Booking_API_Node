const validateMovieCreateRequest = (req, res, next) => {
    // Check if request body exists
    if (!req.body) {
        return res.status(400).json({
            success: false,
            error: {
                message: "Request body is missing"
            },
            data: {},
            message: "Invalid request"
        });
    }

    // Example required fields (adjust according to movie.model schema)
    const { title, description, releaseDate } = req.body;

    if (!title) {
        return res.status(400).json({
            success: false,
            error: {
                message: "Movie title is required"
            },
            data: {},
            message: "Validation failed"
        });
    }

    if (!description) {
        return res.status(400).json({
            success: false,
            error: {
                message: "Movie description is required"
            },
            data: {},
            message: "Validation failed"
        });
    }

    if (!releaseDate) {
        return res.status(400).json({
            success: false,
            error: {
                message: "Movie release date is required"
            },
            data: {},
            message: "Validation failed"
        });
    }

    // If everything is valid, move to controller
    next();
};

module.exports = {
    validateMovieCreateRequest
};
