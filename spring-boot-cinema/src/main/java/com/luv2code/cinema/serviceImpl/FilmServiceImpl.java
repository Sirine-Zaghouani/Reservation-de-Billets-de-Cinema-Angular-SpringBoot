package com.luv2code.cinema.serviceImpl;

import com.luv2code.cinema.entity.Film;
import com.luv2code.cinema.entity.FilmCategory;
import com.luv2code.cinema.entity.Salle;
import com.luv2code.cinema.exceptions.EntityNotFoundException;
import com.luv2code.cinema.exceptions.InvalidEntityException;
import com.luv2code.cinema.repository.FilmRepo;
import com.luv2code.cinema.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilmServiceImpl implements FilmService {
    @Autowired
    private  FilmRepo filmRepo;


    @Override
    public Film add(Film film) {
        return filmRepo.save(film);
    }

    @Override
    public List<Film> findAll() {
        return filmRepo.findAll();
    }

    @Override
    public List<Film> findByIdCategory(FilmCategory id) {
        return filmRepo.findByIdCategory(id);
    }

    @Override
    public Film save(Film film) {
        if(film.getName() == null ){
            throw new InvalidEntityException("Nom film invalide");
        }
        if(film.getDirector() == null ){
            throw new InvalidEntityException("Réalisateur du film invalide");
        }
        if(film.getDescription() == null ){
            throw new InvalidEntityException("Description du film invalide");
        }
        if(film.getDate_created() == null ){
            throw new InvalidEntityException("Date de création  du film invalide");
        }
        if(film.getDuration() == null ){
            throw new InvalidEntityException("Duration du film invalide");
        }
        if(film.getImage() == null ){
            throw new InvalidEntityException("Image du film invalide");
        }
        if(film.getVideo() == null ){
            throw new InvalidEntityException("Bande d'annonce du film invalide");
        }
        if(film.getPrice() == null ){
            throw new InvalidEntityException("Prix du billet de film invalide");
        }
        if(film.getCategory() == null ){
            throw new InvalidEntityException("Catégorie de film  invalide");
        }

        Film f = filmRepo.getByName(film.getName());
        if(f != null){
            throw new InvalidEntityException("Film existe déja !");
        }
        return filmRepo.save(film);
    }

    @Override
    public void delete(Long id) {
        filmRepo.deleteById(id);
    }

    @Override
    public Film findById(Long id) {

        return filmRepo.findById(id).orElseThrow(()-> new EntityNotFoundException(" Film n'existe pas"));
    }
    @Override
    public List<Film> SearchByName(String name) {

        return filmRepo.searchByName(name);
    }
}