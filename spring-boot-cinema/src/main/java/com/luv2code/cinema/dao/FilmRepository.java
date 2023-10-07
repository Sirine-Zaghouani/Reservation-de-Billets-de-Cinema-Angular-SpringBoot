package com.luv2code.cinema.dao;

import com.luv2code.cinema.entity.Film;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface FilmRepository extends JpaRepository<Film,Long> {

    Page<Film> findByCategoryId(@Param("id") Long id, Pageable pageable);

    Page<Film> findByNameContaining(@Param("name") String name, Pageable pageable);
}
