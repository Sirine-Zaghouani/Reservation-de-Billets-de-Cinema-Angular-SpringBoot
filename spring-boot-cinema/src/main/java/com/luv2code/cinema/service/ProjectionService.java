package com.luv2code.cinema.service;

import com.luv2code.cinema.Dtos.ProjectionDto;
import com.luv2code.cinema.entity.Film;
import com.luv2code.cinema.entity.Projection;

import java.util.List;

public interface ProjectionService {

    Projection add(Projection projection);

    List<Projection> findAll();

    Projection save(Projection projection);

    void delete(Long id);

    List<Projection> findByIdFilm( Film id);



}
