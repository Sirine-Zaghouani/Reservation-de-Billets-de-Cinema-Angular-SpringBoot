package com.luv2code.cinema.validators;

import com.luv2code.cinema.entity.FilmCategory;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

public class CategoryValidators {

    public static List<String> validateCategory(FilmCategory category){
        List<String> errors = new ArrayList<>();
        if(category== null ){
            errors.add("Remplissez les champs s'il vous plait !");
            return errors;
        }
        if (StringUtils.isEmpty(category.getCategoryName())) {
            errors.add("saisissez le nom du categories  s'il vous plait !");
        }
        return errors;
    }
}
