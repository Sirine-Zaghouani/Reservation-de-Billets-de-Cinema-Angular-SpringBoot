package com.luv2code.cinema.serviceImpl;

import com.luv2code.cinema.entity.FilmCategory;
import com.luv2code.cinema.exceptions.InvalidEntityException;
import com.luv2code.cinema.repository.CategoryRepo;
import com.luv2code.cinema.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepo categoryRepo;


    @Override
    public FilmCategory add(FilmCategory category) {
        return categoryRepo.save(category);
    }

    @Override
    public List<FilmCategory> findAll() {
        return categoryRepo.findAllCategory();
    }

    @Override
    public FilmCategory save(FilmCategory category) {
        if(category.getCategoryName() == null ){
            throw new InvalidEntityException("Nom catégorie invalide");
        }
        FilmCategory c = categoryRepo.findByName(category.getCategoryName());
        if(c != null){
            throw new InvalidEntityException("catégorie existe déja !");
        }
        return categoryRepo.save(category);
    }

    @Override
    public void delete(Long id) {
        categoryRepo.deleteById(id);
    }
}
