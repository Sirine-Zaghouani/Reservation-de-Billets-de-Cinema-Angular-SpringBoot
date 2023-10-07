package com.luv2code.cinema.validators;

import com.luv2code.cinema.Dtos.FilmDto;
import com.luv2code.cinema.entity.Film;
import io.micrometer.common.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

public class FilmValidators {

    public static List<String> validateFilm(Film film) {
        List<String> errors = new ArrayList<>();
        if (film == null) {
            errors.add("Remplissez les champs s'il vous plait!");
            return errors;
        }
        if (StringUtils.isEmpty(film.getName())) {
            errors.add("saisissez le nom de film s'il vous plait !");
        }
        if (StringUtils.isEmpty(film.getDirector())) {
            errors.add("saisissez le nom du directeur s'il vous plait !");
        }
        if (StringUtils.isEmpty(film.getDescription())) {
            errors.add("saisissez le descriptif du film s'il vous plait !");
        }
        if (StringUtils.isEmpty(String.valueOf(film.getDate_created()))) {
            errors.add("saisissez le date de création du film s'il vous plait !");
        }
        if (StringUtils.isEmpty(String.valueOf(film.getDuration()))) {
            errors.add("saisissez le durée du film s'il vous plait !");
        }
        if (StringUtils.isEmpty(film.getImage())) {
            errors.add("Ajouter une photo s'il vous plait !");
        }
        if (StringUtils.isEmpty(film.getVideo())) {
            errors.add("Ajouter un vidéo s'il vous plait !");
        }
        if (StringUtils.isEmpty(String.valueOf(film.getPrice()))) {
            errors.add("Saissez le prix de ticket s'il vous plait !");
        }
        if (StringUtils.isEmpty(String.valueOf(film.getCategory()))) {
            errors.add("Choisissez la catégories du film  s'il vous plaît !");
        }

        return errors;
    }
}
