package com.luv2code.cinema.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String phone;
    private String role;
    private String avatarUrl;
    private String address;
    private String gouvernaurat;
    private String postalCode;
    @CreationTimestamp
    private LocalDate creationDate;


    public User(String firstName, String lastName, String username, String password, String phone, String role, String avatarUrl, String address, String gouvernaurat, String postalCode) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.phone = phone;
        this.role = role;
        this.avatarUrl = avatarUrl;
        this.address = address;
        this.gouvernaurat = gouvernaurat;
        this.postalCode = postalCode;
    }

    public User(){}

    public User(String firstName, String lastName, String username, String password, String role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.role = role;
    }
}
