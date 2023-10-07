package com.luv2code.cinema.controller;

import com.luv2code.cinema.entity.Film;
import com.luv2code.cinema.entity.Projection;
import com.luv2code.cinema.service.ProjectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.TimeUnit;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/projection")
public class ProjectionController {

    @Autowired
    private ProjectionService projectionService;

    @GetMapping("/find-all")
    public List<Projection> findAll() throws InterruptedException{
        TimeUnit.SECONDS.sleep(1);
        return projectionService.findAll();
    }
    @GetMapping("/find-by-film/{id}")
    public List<Projection> findByFilm(Film id) throws InterruptedException{
        TimeUnit.SECONDS.sleep(1);
        return projectionService.findByIdFilm(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        projectionService.delete(id);
    }

    @PostMapping("/add")
    public Projection save(@RequestBody Projection projection){
        return projectionService.save(projection);
    }
}
