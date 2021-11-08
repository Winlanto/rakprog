package ee.alek.backend.controller;

import ee.alek.backend.model.Category;
import ee.alek.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@CrossOrigin(origins = "http://localhost:3000")

public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("categories")
    public List<Category> getCategories() {
        return categoryService.getCategories();
    }

    @PostMapping("categories")
    public String postCategories(@RequestBody Category category) {
        categoryService.saveCategory(category);
        return "kategooria edukalt esitatud - " + category.getName()+", tüüp - "+category.getCategoryType();
    }

    @GetMapping("categories/{id}")
    public String getCategory(@PathVariable Long id) {
        return id+". "+categoryService.getCategory(id).getName()+", tüüp - "+categoryService.getCategory(id).getCategoryType();
    }

    @GetMapping("categories/delete/{id}")
    public String deleteCategory(@PathVariable Long id){
        String name = categoryService.getCategory(id).getName();
        categoryService.deleteCategory(categoryService.getCategory(id));
        return "category "+ id +" deleted - "+ name;
    }

}

