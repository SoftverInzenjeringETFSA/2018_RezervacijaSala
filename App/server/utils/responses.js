const Responses = {
    NOT_FOUND: {
        responseCode: 404,
        message: 'Not found'
    },
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
    UNAUTHORIZED: {
        statusCode: 2,
        responseCode: 401,
        message: 'Unauthorized'
    },
    INVALID_SCHEDULE_FORMAT: {
        statusCode: 123,
        message: 'Invalid schedule format'
    },
    SCHEDULE_CREATED: (data) => {
        return {
            status: 200,
            message: data + ' records have been inserted into schedule collection'
        }
    },
    INVALID_ID_FORMAT: {
        statusCode: 123,
        message: 'Invalid ID format'
    }
}

module.exports = Responses;