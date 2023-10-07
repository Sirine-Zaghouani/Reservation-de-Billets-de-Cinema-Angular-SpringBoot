package com.luv2code.cinema.service;


import com.luv2code.cinema.Dtos.*;

import java.util.List;

public interface UserService {
    UserDto saveUser(UserDto user);
    AuthenticationResponse authenticate(AuthenticationRequest user);
    List<UserDto> findAllUsers();
    void deleteUser(Long id);
    UserDataDto findById(Long id);
    void changePassword(PasswordChange passwordChange);

    AuthenticationResponse updateUserDetails(UserDataDto userDataDto);


}

