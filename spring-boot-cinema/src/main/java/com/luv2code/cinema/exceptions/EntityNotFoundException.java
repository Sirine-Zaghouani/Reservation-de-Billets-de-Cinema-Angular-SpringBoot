package com.luv2code.cinema.exceptions;

import java.util.List;

public class EntityNotFoundException extends RuntimeException{
    private ErrorCodes errorCode;
    private List<String> errors;

    public EntityNotFoundException(String message, ErrorCodes errorCode, List<String> errors) {
        super(message);
        this.errorCode = errorCode;
        this.errors = errors;
    }
    public EntityNotFoundException(String message, List<String> errors) {
        super(message);
        this.errors = errors;
    }
    public EntityNotFoundException(String message, ErrorCodes errorCode) {
        super(message);
        this.errorCode = errorCode;
    }
    public EntityNotFoundException(String message) {
        super(message);
    }

    public ErrorCodes getErrorCode() {
        return errorCode;
    }

    public List<String> getErrors() {
        return errors;
    }
}
