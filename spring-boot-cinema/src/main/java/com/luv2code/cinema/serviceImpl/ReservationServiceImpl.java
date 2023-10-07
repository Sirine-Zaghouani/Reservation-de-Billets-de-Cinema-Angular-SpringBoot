package com.luv2code.cinema.serviceImpl;

import com.luv2code.cinema.entity.Reservation;
import com.luv2code.cinema.exceptions.InvalidEntityException;
import com.luv2code.cinema.repository.ReservationRepo;
import com.luv2code.cinema.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ReservationServiceImpl implements ReservationService {

    @Autowired
    private ReservationRepo reservationRepo;

    @Override
    public Reservation add(Reservation reservation) {
        return reservationRepo.save(reservation);
    }

    @Override
    public List<Reservation> findAll() {
        return reservationRepo.findAll();
    }

    @Override
    public List<Reservation> findByUserId(Long id) {
        return reservationRepo.findByUserId(id);
    }
    @Override
    public Reservation save(Reservation reservation) {
        if(reservation.getNbPlace() == 0 ){
            throw new InvalidEntityException("Nombre de place invalide");
        }
        if(reservation.getProjection() == null ){
            throw new InvalidEntityException("Projection de film invalide");
        }
        if(reservation.getUser()== null ){
            throw new InvalidEntityException("Utilisateur invalide");
        }

        int  plcesDispo = reservation.getProjection().getSalle().getNbPlace();
        int  placesReserve = reservation.getNbPlace();
        int nouvellesPlacesDispo = plcesDispo - placesReserve;

        if(plcesDispo < placesReserve){
            throw new InvalidEntityException("nombre de place invalid !");
        }

        Long projectionId = reservation.getProjection().getId();

        reservationRepo.updateNbPlace(nouvellesPlacesDispo, projectionId);

        return reservationRepo.save(reservation)  ;
    }

    @Override
    public void delete(Long id) {
        reservationRepo.deleteById(id);
    }
}
