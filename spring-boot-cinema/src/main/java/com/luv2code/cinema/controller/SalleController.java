package com.luv2code.cinema.controller;

import com.luv2code.cinema.entity.Salle;
import com.luv2code.cinema.service.SalleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.TimeUnit;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/salle")
public class SalleController {

    @Autowired
    private SalleService salleService;

    @GetMapping("/find-all")
    public List<Salle> findAll() throws InterruptedException{
        TimeUnit.SECONDS.sleep(1);
        return salleService.findAll();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        salleService.delete(id);
    }

    @PostMapping("/add")
    public Salle save(@RequestBody Salle salle){
        return salleService.save(salle);
    }

    @GetMapping("/find-by-id/{id}")
    public Salle findById(@PathVariable Long id){
        return salleService.findById(id);
    }
}
