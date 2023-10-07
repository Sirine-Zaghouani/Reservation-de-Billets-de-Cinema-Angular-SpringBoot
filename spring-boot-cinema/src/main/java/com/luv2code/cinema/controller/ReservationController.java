package com.luv2code.cinema.controller;

import com.luv2code.cinema.entity.Reservation;
import com.luv2code.cinema.entity.Salle;
import com.luv2code.cinema.service.ReservationService;
import com.luv2code.cinema.service.SalleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.TimeUnit;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/reservation")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @GetMapping("/find-all")
    public List<Reservation> findAll() throws InterruptedException {
        TimeUnit.SECONDS.sleep(1);
        return reservationService.findAll();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        reservationService.delete(id);
    }

    @PostMapping("/add")
    public Reservation save(@RequestBody Reservation reservation){
        return reservationService.save(reservation);
    }

    @GetMapping("find-by-user-id/{id}")
    public List<Reservation> findByUserId(@PathVariable Long id) throws InterruptedException {
        TimeUnit.SECONDS.sleep(1);
        return reservationService.findByUserId(id);
    }

}
