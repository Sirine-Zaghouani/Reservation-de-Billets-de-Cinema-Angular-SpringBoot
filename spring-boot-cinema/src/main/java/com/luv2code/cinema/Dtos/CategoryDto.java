package com.luv2code.cinema.Dtos;

import com.luv2code.cinema.entity.Film;
import com.luv2code.cinema.entity.FilmCategory;
import jakarta.persistence.Entity;
import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Builder
@Data
public class CategoryDto {
    private Long id;
    private String categoryName;
    private Set<Film> films;

    public static FilmCategory toEntity(CategoryDto categoryDto){
        FilmCategory category = new FilmCategory();
        category.setId(categoryDto.getId());
        category.setCategoryName((categoryDto.getCategoryName()));
        category.setFilms(categoryDto.getFilms());

        return category;
    }

    public static CategoryDto fromEntity(FilmCategory category){
        return CategoryDto.builder()
                .id(category.getId())
                .categoryName(category.getCategoryName())
                .films(category.getFilms())
                .build();
    }
}
