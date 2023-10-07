package com.luv2code.cinema.serviceImpl;

import com.luv2code.cinema.entity.Film;
import com.luv2code.cinema.entity.Time;
import com.luv2code.cinema.exceptions.EntityNotFoundException;
import com.luv2code.cinema.exceptions.InvalidEntityException;
import com.luv2code.cinema.repository.TimeRepo;
import com.luv2code.cinema.service.TimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TimeServiceImpl implements TimeService {
    @Autowired
    private TimeRepo timeRepo;

    @Override
    public Time findById(Long id) {

        return timeRepo.findById(id).orElseThrow(()-> new EntityNotFoundException(" Time n'existe pas"));
    }
    @Override
    public Time add(Time time) {
        return timeRepo.save(time);
    }

    @Override
    public List<Time> findAll() {
        return timeRepo.findAll();
    }

    @Override
    public Time save(Time time) {
        if(time.getTime() == null ){
            throw new InvalidEntityException("Horaire invalide");
        }
        Time t = timeRepo.getByTime(time.getTime());
        if(t != null){
            throw new InvalidEntityException("Horarire existe déja !");
        }
        return timeRepo.save(time);
    }

    @Override
    public void delete(Long id) {
        timeRepo.deleteById(id);
    }
}
