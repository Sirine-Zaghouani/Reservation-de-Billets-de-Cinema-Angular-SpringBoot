package com.luv2code.cinema.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="reservation")
@Data
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "nbPlace")
    private int nbPlace;


    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user ;

    @ManyToOne
    @JoinColumn(name = "projection_id", nullable = false)
    private Projection projection ;

    public Reservation() {
    }

    public Reservation(long id, int nbPlace,  User user, Projection projection) {
        this.id = id;
        this.nbPlace = nbPlace;
        this.user = user;
        this.projection = projection;
    }
}
