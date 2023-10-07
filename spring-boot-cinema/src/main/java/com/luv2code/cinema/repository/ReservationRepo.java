package com.luv2code.cinema.repository;

import com.luv2code.cinema.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReservationRepo  extends JpaRepository<Reservation, Long> {

  @Query("UPDATE Projection p SET p.nbPlaceDispo = :nouvellesPlacesDispo WHERE p.id = :id")
  void updateNbPlace(@Param("nouvellesPlacesDispo") int nouvellesPlacesDispo, @Param("id") Long id);

@Query("select r from Reservation r where r.user.id = :id")
  List<Reservation> findByUserId(Long id);


}
