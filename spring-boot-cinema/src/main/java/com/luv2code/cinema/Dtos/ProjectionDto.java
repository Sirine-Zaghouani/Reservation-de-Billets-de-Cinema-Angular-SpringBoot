package com.luv2code.cinema.Dtos;

import com.luv2code.cinema.entity.Film;
import com.luv2code.cinema.entity.Projection;
import com.luv2code.cinema.entity.Salle;
import com.luv2code.cinema.entity.Time;
import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Builder
@Data
public class ProjectionDto {
    private Long id;
    private Film film;
    private Salle salle;
    private Time time;
    private Date dateProjection;

    public static Projection toEntity(ProjectionDto projectionDto){
        Projection projection = new Projection();
        projection.setId(projectionDto.getId());
        projection.setFilm(projectionDto.getFilm());
        projection.setSalle(projectionDto.getSalle());
        projection.setTime(projectionDto.getTime());
        projection.setDateProjection(projectionDto.getDateProjection());
        return projection;
    }

    public static ProjectionDto fromEntity(Projection projection){
        return ProjectionDto.builder()
                .id(projection.getId())
                .film(projection.getFilm())
                .salle(projection.getSalle())
                .time(projection.getTime())
                .dateProjection(projection.getDateProjection())
                .build();
    }
}
