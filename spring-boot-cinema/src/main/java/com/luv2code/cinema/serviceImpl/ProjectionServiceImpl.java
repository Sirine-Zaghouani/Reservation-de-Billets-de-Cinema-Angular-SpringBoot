package com.luv2code.cinema.serviceImpl;


import com.luv2code.cinema.entity.Film;
import com.luv2code.cinema.entity.Projection;
import com.luv2code.cinema.entity.Salle;
import com.luv2code.cinema.exceptions.InvalidEntityException;
import com.luv2code.cinema.repository.ProjectionRepo;
import com.luv2code.cinema.repository.SalleRepo;
import com.luv2code.cinema.service.ProjectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectionServiceImpl implements ProjectionService {

    @Autowired
    private ProjectionRepo projectionRepo;


    @Override
    public Projection add(Projection projection) {
        return projectionRepo.save(projection);
    }

    @Override
    public List<Projection> findAll() {
        return projectionRepo.findAll();
    }

    @Override
    public List<Projection> findByIdFilm(Film id) {
        return projectionRepo.findByIdFilm(id);
    }

    @Override
    public Projection save(Projection projection) {
      if(projection.getDateProjection() == null ){
            throw new InvalidEntityException("Date de projection invalide");
        }
       if(projection.getFilm() == null ){
            throw new InvalidEntityException("Film invalide");
        }
        if(projection.getSalle() == null ){
            throw new InvalidEntityException("Salle invalide");
        }
        if(projection.getTime() == null ){
            throw new InvalidEntityException("Heure de projection invalide");
        }
        projection.setNbPlaceDispo(projectionRepo.nbPlaces(projection.getSalle().getId()));
        Projection p = projectionRepo.findProjection(projection.getDateProjection(),projection.getSalle(),projection.getTime());
        if(p != null){
            throw new InvalidEntityException("projection existe déja !");
        }

        return projectionRepo.save(projection);
    }

    @Override
    public void delete(Long id) {
        projectionRepo.deleteById(id);
    }
}