package com.luv2code.cinema.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name="projection")
@Data
public class Projection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "date_projection")
    private Date dateProjection;

    @Column(name = "nbPlaceDispo")
    private int nbPlaceDispo;
    @ManyToOne
    @JoinColumn(name = "film_id", nullable = false)
    private Film film;

    @ManyToOne
    @JoinColumn(name = "salle_id", nullable = false)
    private Salle salle;

    @ManyToOne
    @JoinColumn(name = "time_id", nullable = false)
    private Time time;

    public Projection() {
    }

    public Projection(Long id, Date dateProjection, Film film, Salle salle, Time time) {
        this.id = id;
        this.dateProjection = dateProjection;
        this.film = film;
        this.salle = salle;
        this.time = time;
    }
}
