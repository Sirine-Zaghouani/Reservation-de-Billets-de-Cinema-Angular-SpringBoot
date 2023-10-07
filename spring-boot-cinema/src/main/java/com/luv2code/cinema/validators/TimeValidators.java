package com.luv2code.cinema.validators;

import com.luv2code.cinema.entity.Salle;
import com.luv2code.cinema.entity.Time;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

public class TimeValidators {
    public static List<String> validateTime(Time time){
        List<String> errors = new ArrayList<>();
        if(time== null ){
            errors.add("Remplissez les champs s'il vous plait !");
            return errors;
        }
        if (StringUtils.isEmpty(time.getTime())) {
            errors.add("saisissez l'heure de projection s'il vous plait !");
        }

        return errors;
    }
}
