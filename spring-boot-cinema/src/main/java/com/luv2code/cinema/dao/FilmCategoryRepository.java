package com.luv2code.cinema.dao;


import com.luv2code.cinema.entity.FilmCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "filmCategory",path="film-category")
public interface FilmCategoryRepository extends JpaRepository<FilmCategory, Long> {
}
