import HttpException from "./HttpException";

export class InvalidRequestException extends HttpException {
  constructor() {
    super(400, `Invalid request.`, false);
  }
}

export class AuthenticationTokenMissingException extends HttpException {
  constructor() {
    super(401, "Authentication token missing", false);
  }
}

export class InvalidAuthenticationTokenException extends HttpException {
  constructor() {
    super(401, "Invalid authentication token", false);
  }
}

export class UnauthorizedActionException extends HttpException {
  constructor() {
    super(403, "Unauthorized action.", false);
  }
}

export class InternalServerErrorException extends HttpException {
  constructor() {
    super(500, "Internal server error.", false);
  }
}

export class ForbiddenException extends HttpException {
  constructor() {
    super(403, "Forbidden.", false);
  }
}

export class SearchKeywordMissingException extends HttpException {
  constructor() {
    super(400, `Search keyword is required.`, false);
  }
}

export class ParametersMissingException extends HttpException {
  constructor() {
    super(400, `Required parameters are missing.`, false);
  }
}
