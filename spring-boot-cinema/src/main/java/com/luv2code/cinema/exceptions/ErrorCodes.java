package com.luv2code.cinema.exceptions;

public enum ErrorCodes {
    USER_NOT_VALID(1000),
    USER_NOT_FOUND(1001),
    USER_EXISTS(1002),
    FILM_NOT_VALID(1000),
    FILM_EXISTS(1002),
    FILM_ALREADY_EXISTS(2002);

    private int code;
    ErrorCodes(int code) {
        this.code = code;
    }

    public int getCode() {
        return code;
    }
}
