const Responses = {
    OK: {
        responseCode: 200,
        message: 'OK'
    },
    OK_WITH_TOKEN: (token) => {
      return {
        responseCode: 200,
        message: 'OK',
        token: token
      }
    },
    NOT_FOUND: {
        responseCode: 404,
        message: 'Not found'
    },
    USER_ALREADY_LOGGED_IN: {
        statusCode: 0,
        message: 'User is already logged in.'
    },
    USER_ALREADY_CREATED: {
        responseCode: 409,
        message: 'User already exists.'
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
    RESERVATION_CREATED: (data) => {
        return {
            status: 200,
            message: data + ' records have been inserted into reservation collection'
        }
    },
    INVALID_ID_FORMAT: {
        statusCode: 123,
        message: 'Invalid ID format'
    },
    INVALID_PARAMETERS: {
        statusCode: 123,
        message: 'Invalid parameters'
    },
    CLASSROOM_DELETED: {
        statusCode: 200,
        message: 'Successfully deleted classroom and all related objects'
    },
    INVALID_RESERVATION_DATE: {
        statusCode: 122,
        message: 'The classroom is reserved for the time entered'
    },
    SERVER_ERROR: {
      responseCode: 500,
      message: "An unexpected error happened on our end."

    }
}

module.exports = Responses;
