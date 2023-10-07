package com.luv2code.cinema.service;

import com.luv2code.cinema.entity.Film;
import com.luv2code.cinema.entity.FilmCategory;

import java.util.List;

public interface FilmService {
    Film add(Film film);
    List<Film> findAll();
    List<Film> SearchByName(String name);
    Film save(Film film);
    void delete(Long id);
    Film findById(Long id);
    List<Film> findByIdCategory(FilmCategory id);
}

