package com.luv2code.cinema.validators;

import com.luv2code.cinema.entity.Projection;
import org.springframework.util.StringUtils;
import java.util.ArrayList;
import java.util.List;

public class ProjectionValidators {
    public static List<String> validateProjection(Projection projection){
        List<String> errors = new ArrayList<>();
        if(projection== null ){
            errors.add("Remplissez les champs s'il vous plait !");
            return errors;
        }
        if (StringUtils.isEmpty(projection.getFilm())) {
            errors.add("Choisissez le film s'il vous plait !");
        }
        if (StringUtils.isEmpty(projection.getSalle())) {
            errors.add("Choisissez la salle de projection s'il vous plait !");
        }
        if (StringUtils.isEmpty(projection.getTime())) {
            errors.add("Choisissez l'heure de projection s'il vous plait !");
        }
        return errors;
    }
}
