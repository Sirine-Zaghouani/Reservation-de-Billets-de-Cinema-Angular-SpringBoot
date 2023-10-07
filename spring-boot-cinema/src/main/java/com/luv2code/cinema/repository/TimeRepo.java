package com.luv2code.cinema.repository;
import com.luv2code.cinema.entity.Time;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TimeRepo extends JpaRepository<Time, Long> {
    Time getByTime(String name);
}
