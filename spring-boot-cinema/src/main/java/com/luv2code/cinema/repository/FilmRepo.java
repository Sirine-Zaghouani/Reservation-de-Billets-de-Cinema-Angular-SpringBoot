package com.luv2code.cinema.repository;

import com.luv2code.cinema.entity.Film;
import com.luv2code.cinema.entity.FilmCategory;
import com.luv2code.cinema.entity.Projection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FilmRepo extends JpaRepository<Film, Long> {

    @Query("select f from Film f ")
    List<Film> findAllFilms();

    @Query("select f from Film f where f.name like %:name%")
    Film getByName(String name);

    @Query("select f from Film f where f.category= :id ")
    List<Film> findByIdCategory(FilmCategory id);

    @Query("select f from Film f where f.name like %:name%")
    List<Film> searchByName(String name);
}
