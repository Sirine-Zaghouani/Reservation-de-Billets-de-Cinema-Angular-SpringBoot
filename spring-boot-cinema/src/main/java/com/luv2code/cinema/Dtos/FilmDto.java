package com.luv2code.cinema.Dtos;

import com.luv2code.cinema.entity.Film;
import com.luv2code.cinema.entity.FilmCategory;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.sql.Time;
import java.util.Date;

@Builder
@Data
public class FilmDto {
    private Long id;
    private String name;
    private String director;
    private String description;
    private Time duration;
    private BigDecimal price;
    private String image;
    private String video;
    private int stock;
    private Date date_created;
    private Date last_updated;
    private FilmCategory category;



    public static Film toEntity(FilmDto filmDto){
        Film film = new Film();
        film.setId(filmDto.getId());
        film.setName(filmDto.getName());
        film.setDirector(filmDto.getDirector());
        film.setDescription(filmDto.getDescription());
        film.setDuration(filmDto.getDuration());
        film.setPrice(filmDto.getPrice());
        film.setImage(filmDto.getImage());
        film.setVideo(filmDto.getVideo());
        film.setStock(filmDto.getStock());
        film.setDate_created((java.sql.Date) filmDto.getDate_created());
        film.setLast_updated((java.sql.Date) filmDto.getLast_updated());
        film.setCategory(filmDto.getCategory());

        return film;
    }

    public static FilmDto fromEntity(Film film){
        return FilmDto.builder()
                .id(film.getId())
                .name(film.getName())
                .director(film.getDirector())
                .duration(film.getDuration())
                .description(film.getDescription())
                .price(film.getPrice())
                .image(film.getImage())
                .video(film.getVideo())
                .stock(film.getStock())
                .date_created(film.getDate_created())
                .last_updated(film.getLast_updated())
                .category(film.getCategory())
                .build();
    }



}
