package com.luv2code.cinema.controller;

import com.luv2code.cinema.Dtos.FilmDto;
import com.luv2code.cinema.entity.Film;
import com.luv2code.cinema.entity.FilmCategory;
import com.luv2code.cinema.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.TimeUnit;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/films1")
public class FilmController {

    @Autowired
    private FilmService filmService;

    @GetMapping("/find-all")
    public List<Film> findAll() throws InterruptedException{
        TimeUnit.SECONDS.sleep(1);
        return filmService.findAll();
    }
    @GetMapping("/find-by-id/{id}")
    public Film findById (@PathVariable Long id){
      return filmService.findById(id);
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        filmService.delete(id);
    }

    @PostMapping("/add")
    public Film save(@RequestBody Film film){
        return filmService.save(film);
    }

    @GetMapping("/find-by-category/{id}")
    public List<Film> findByIdCategory(FilmCategory id) throws InterruptedException{
        TimeUnit.SECONDS.sleep(1);
        return filmService.findByIdCategory(id);
    }
    @GetMapping("/search-by-name/{name}")
    public List<Film> searchByName(@PathVariable String name) throws InterruptedException{
        TimeUnit.SECONDS.sleep(1);
        return filmService.SearchByName(name);
    }


}


