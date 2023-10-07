package com.luv2code.cinema.repository;

import com.luv2code.cinema.entity.Film;
import com.luv2code.cinema.entity.FilmCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CategoryRepo extends JpaRepository<FilmCategory,Long> {

    @Query("select c from FilmCategory c ")
    List<FilmCategory> findAllCategory();

    @Query("select c from FilmCategory c where c.categoryName like %:name%")
    FilmCategory findByName(String name);

}
