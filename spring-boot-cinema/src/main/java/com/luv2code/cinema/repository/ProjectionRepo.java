package com.luv2code.cinema.repository;

import com.luv2code.cinema.entity.Film;
import com.luv2code.cinema.entity.Projection;
import com.luv2code.cinema.entity.Salle;
import com.luv2code.cinema.entity.Time;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface ProjectionRepo extends JpaRepository<Projection,Long> {

    @Query("select p from Projection p where p.dateProjection= :date and p.salle= :salle and p.time= :time")
    Projection findProjection(Date date, Salle salle , Time time);

    @Query("select s.nbPlace from Salle s where s.id = :id  ")
    int nbPlaces(Long id);

    @Query("select p from Projection p where p.film = :id ")
    List<Projection> findByIdFilm(Film id);
}
