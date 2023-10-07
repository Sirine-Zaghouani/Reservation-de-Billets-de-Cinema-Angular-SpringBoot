package com.luv2code.cinema.validators;

import com.luv2code.cinema.Dtos.FilmDto;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

public class FilmDetailsUpdateValidators {
    public static List<String> validateFilm(FilmDto film){
        List<String> errors = new ArrayList<>();

        if (StringUtils.isEmpty(film.getName())) {
            errors.add("saisissez le nom du film s'il vous plait !");
        }
        if (StringUtils.isEmpty(film.getDirector())) {
            errors.add("saisissez le nom du directeur s'il vous plait !");
        }
        if (io.micrometer.common.util.StringUtils.isEmpty(film.getDescription())) {
            errors.add("saisissez le descriptif du film s'il vous plait !");
        }
        if (io.micrometer.common.util.StringUtils.isEmpty(String.valueOf(film.getDate_created()))) {
            errors.add("saisissez le date de création du film s'il vous plait !");
        }
        if (io.micrometer.common.util.StringUtils.isEmpty(String.valueOf(film.getDuration()))) {
            errors.add("saisissez la dureé du film s'il vous plait !");
        }
        if (io.micrometer.common.util.StringUtils.isEmpty(film.getImage())) {
            errors.add("Ajouter une photo s'il vous plait !");
        }
        if (io.micrometer.common.util.StringUtils.isEmpty(film.getVideo())) {
            errors.add("Ajouter un vidéo s'il vous plait !");
        }
        if (io.micrometer.common.util.StringUtils.isEmpty(String.valueOf(film.getPrice()))) {
            errors.add("Saissez le prix de ticket s'il vous plait !");
        }
        if (io.micrometer.common.util.StringUtils.isEmpty(String.valueOf(film.getCategory()))) {
            errors.add("Choisissez la catégories du film  s'il vous plaît !");
        }
        return errors;
    }
}
