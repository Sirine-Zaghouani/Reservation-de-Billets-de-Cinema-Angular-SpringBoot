package com.luv2code.cinema.service;


import com.luv2code.cinema.entity.FilmCategory;

import java.util.List;

public interface CategoryService {
    FilmCategory add(FilmCategory category);
    List<FilmCategory> findAll();
    FilmCategory save(FilmCategory category);
    void delete(Long id);
}
