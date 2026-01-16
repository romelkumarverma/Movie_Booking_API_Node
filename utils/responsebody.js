const errorResponseBody = {
    err: {},
    data: {},
    message: "Something went wrong, cannot process the request",
    success: false
}

const successResponseBody = {
    err: {},
    data: {},
    message: "Successfully processed the Request...",
    success: true
}

module.export = { successResponseBody, errorResponseBody}