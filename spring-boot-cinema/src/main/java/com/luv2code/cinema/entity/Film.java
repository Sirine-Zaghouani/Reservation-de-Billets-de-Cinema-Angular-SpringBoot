package com.luv2code.cinema.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Time;

@Entity
@Table(name="film")
@Data
public class Film {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;
    @Column(name = "name")
    private String name;
    @Column(name = "director")
    private String director;
    @Column(name = "description")
    private String description;
    @Column(name = "duration")
    private Time duration;
    @Column(name = "unit_price")
    private BigDecimal price;
    @Column(name = "image_url")
    private String image;
    @Column(name = "video_url")
    private String video;
    @Column(name = "units_in_stock")
    private int stock;
    @Column(name = "date_created")
    @UpdateTimestamp
    private Date date_created;
    @Column(name = "last_updated")
    @UpdateTimestamp
    private Date last_updated;
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private FilmCategory category;

    public Film() {
    }

    public Film(long id, String name, String director, String description, Time duration, BigDecimal price, String image, String video, int stock, Date date_created, Date last_updated, FilmCategory category) {
        this.id = id;
        this.name = name;
        this.director = director;
        this.description = description;
        this.duration = duration;
        this.price = price;
        this.image = image;
        this.video = video;
        this.stock = stock;
        this.date_created = date_created;
        this.last_updated = last_updated;
        this.category = category;
    }

}
