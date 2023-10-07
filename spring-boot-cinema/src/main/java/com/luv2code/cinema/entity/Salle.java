package com.luv2code.cinema.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;



@Entity
@Getter
@Setter
public class Salle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "nbPlace")
    private int nbPlace;

    public Salle(String name , int nbPlace){
        this.name = name;
        this.nbPlace= nbPlace;
    }

    public Salle(){};

}
