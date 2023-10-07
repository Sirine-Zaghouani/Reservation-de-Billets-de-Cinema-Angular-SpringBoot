package com.luv2code.cinema.entity;
import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name="time")
@Data
public class Time {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "time")
    private String time;

    public Time() {
    }

    public Time(long id, String time) {
        this.id = id;
        this.time = time;
    }
}
