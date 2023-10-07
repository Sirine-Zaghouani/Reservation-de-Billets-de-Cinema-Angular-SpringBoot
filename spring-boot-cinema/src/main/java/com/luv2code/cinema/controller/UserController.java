package com.luv2code.cinema.controller;

import com.luv2code.cinema.Dtos.AuthenticationResponse;
import com.luv2code.cinema.Dtos.PasswordChange;
import com.luv2code.cinema.Dtos.UserDataDto;
import com.luv2code.cinema.Dtos.UserDto;
import com.luv2code.cinema.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.TimeUnit;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/users")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/find-all")
    public List<UserDto> findAll() throws InterruptedException{
        TimeUnit.SECONDS.sleep(1);
        return userService.findAllUsers();
    }

    @GetMapping("/find-by-id/{id}")
    public UserDataDto findById(@PathVariable Long id){
        return userService.findById(id);
    }

    @PostMapping("/change-password")
    public void changePassword(@RequestBody PasswordChange passwordChange){
        userService.changePassword(passwordChange);
    }

    @PostMapping("/update-user-details")
    public AuthenticationResponse updateUserDetails(@RequestBody UserDataDto userDataDto){
        return userService.updateUserDetails(userDataDto);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id){
        userService.deleteUser(id);
    }

}

