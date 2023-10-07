package com.luv2code.cinema.service;

import com.luv2code.cinema.entity.Projection;
import com.luv2code.cinema.entity.Reservation;
import com.luv2code.cinema.entity.Salle;
import com.luv2code.cinema.entity.User;

import java.util.List;

public interface ReservationService {

    Reservation add(Reservation reservation);
    List<Reservation> findAll();
    Reservation save(Reservation reservation);
    List<Reservation> findByUserId(Long id);
    void delete(Long id);


}
