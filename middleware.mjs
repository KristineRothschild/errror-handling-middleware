class ApiError extends Error {
  constructor(message, { status, code, details } = {}) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

class ForbiddenError extends ApiError {
  constructor(
    message = "You shall not pass! The board is protected by the One User with the highest IQ.",
  ) {
    super(message, { status: 403, code: "FORBIDDEN" });
  }
}

class ValidationError extends ApiError {
  constructor(details = [], message = "Invalid request body") {
    super(message, { status: 400, code: "VALIDATION_ERROR", details });
  }
}

const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    error: {
      message: "Internal server error",
      code: "INTERNAL_SERVER_ERROR",
    },
  });
};

export { ApiError, ForbiddenError, ValidationError };
export default errorHandler;
