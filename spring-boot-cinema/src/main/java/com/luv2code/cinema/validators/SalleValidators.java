package com.luv2code.cinema.validators;

import com.luv2code.cinema.entity.FilmCategory;
import com.luv2code.cinema.entity.Salle;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

public class SalleValidators {
    public static List<String> validateSalle(Salle salle){
        List<String> errors = new ArrayList<>();
        if(salle== null ){
            errors.add("Remplissez les champs s'il vous plait !");
            return errors;
        }
        if (StringUtils.isEmpty(salle.getName())) {
            errors.add("saisissez le nom du salle s'il vous plait !");
        }
        if (StringUtils.isEmpty(salle.getNbPlace())) {
            errors.add("saisissez le nombre de places dans la  salle s'il vous plait !");
        }
        return errors;
    }
}
