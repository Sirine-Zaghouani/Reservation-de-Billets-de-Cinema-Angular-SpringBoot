package com.luv2code.cinema.controller;

import com.luv2code.cinema.entity.Film;
import com.luv2code.cinema.entity.Time;
import com.luv2code.cinema.service.TimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.TimeUnit;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/time")
public class TimeController {

    @Autowired
    private TimeService timeService;

    @GetMapping("/find-all")
    public List<Time> findAll() throws InterruptedException{
        TimeUnit.SECONDS.sleep(1);
        return timeService.findAll();
    }
    @GetMapping("/find-by-id/{id}")
    public Time findById (@PathVariable Long id){
        return timeService.findById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        timeService.delete(id);
    }

    @PostMapping("/add")
    public Time save(@RequestBody Time time){
        return timeService.save(time);
    }
}
