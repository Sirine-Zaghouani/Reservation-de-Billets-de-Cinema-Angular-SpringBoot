package com.luv2code.cinema.controller;

import com.luv2code.cinema.Dtos.AuthenticationRequest;
import com.luv2code.cinema.Dtos.AuthenticationResponse;
import com.luv2code.cinema.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.TimeUnit;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/login")
public class AuthenticationController {

    @Autowired
    private UserService userService;
    @PostMapping
    public AuthenticationResponse authenticate(@RequestBody AuthenticationRequest user) throws InterruptedException {
        TimeUnit.SECONDS.sleep(1);
        return userService.authenticate(user);
    }


}
