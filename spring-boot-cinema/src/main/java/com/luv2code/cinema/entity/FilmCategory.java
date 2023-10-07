package com.luv2code.cinema.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Table(name="film_category")
@Data
public class FilmCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name="category_name")
    private String categoryName;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
    private Set<Film> films;

    public FilmCategory() {
    }

    public FilmCategory(Long id, String categoryName, Set<Film> films) {
        this.id = id;
        this.categoryName = categoryName;
        this.films = films;
    }
}
