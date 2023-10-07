package com.luv2code.cinema.controller;

import com.luv2code.cinema.entity.FilmCategory;
import com.luv2code.cinema.repository.CategoryRepo;
import com.luv2code.cinema.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.TimeUnit;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/category1")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private CategoryRepo categoryRepo;

    @GetMapping("/find-all")
    public List<FilmCategory> findAll() throws InterruptedException{
        TimeUnit.SECONDS.sleep(1);
        return categoryRepo.findAllCategory() ;   }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        categoryService.delete(id);
    }

    @PostMapping("/add")
    public FilmCategory save(@RequestBody FilmCategory category){
        return categoryService.save(category);
    }


}
