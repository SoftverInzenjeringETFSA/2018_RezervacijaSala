const Responses = {
    USER_ALREADY_LOGGED_IN: {
        statusCode: 0,
        message: 'User is already logged in.'
    },
    INVALID_CREDENTIALS: {
        statusCode: 1,
        message: 'Invalid credentials'
    },
    UNKNOWN_ERROR: {
        statusCode: 2,
        message: 'Opps. To be honest we don\'t know what happened. An errr occurred.'
    },
}

module.exports = Responses;