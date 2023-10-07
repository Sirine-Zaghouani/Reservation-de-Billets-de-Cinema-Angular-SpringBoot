package com.luv2code.cinema.controller;
import com.luv2code.cinema.Dtos.UserDto;
import com.luv2code.cinema.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/register")
public class SignupController {
    @Autowired
    private UserService userService;

    @PostMapping()
    public UserDto saveUser(@RequestBody UserDto user){
        return userService.saveUser(user);
    }
}
