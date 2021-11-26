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
    public void postCategories(@RequestBody Category category) {
        categoryService.saveCategory(category);
    }

    @GetMapping("view-category/{id}")
    public Category getOneCategory(@PathVariable Long id) throws Exception {
        return categoryService.getOneCategory(id);
    }

    @DeleteMapping("delete-category/{id}")
    public List<Category> DeleteCategory(@PathVariable Long id){
        categoryService.deleteCategory(id);
        return categoryService.getCategories();
    }

}

