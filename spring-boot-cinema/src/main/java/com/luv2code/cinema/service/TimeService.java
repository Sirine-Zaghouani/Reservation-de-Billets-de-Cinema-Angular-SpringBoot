package com.luv2code.cinema.service;

import com.luv2code.cinema.entity.Film;
import com.luv2code.cinema.entity.Time;

import java.util.List;

public interface TimeService {
    Time add(Time time);
    List<Time> findAll();
    Time save(Time time);
    Time findById(Long id);
    void delete(Long id);
}

