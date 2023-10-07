package com.luv2code.cinema.repository;

import com.luv2code.cinema.entity.Salle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SalleRepo extends JpaRepository<Salle, Long> {
    Salle getByName(String name);
}
