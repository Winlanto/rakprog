package ee.alek.backend.service;

import ee.alek.backend.model.Category;
import ee.alek.backend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;
    public List<Category> getCategories(){
        return categoryRepository.findAll();
    }

    public void saveCategory(Category category) {
        categoryRepository.save(category);
    }

    public Category getCategory(Long id){
        return categoryRepository.getById(id);
    }


    public void deleteCategory(Category category) {
        categoryRepository.delete(category);
    }
}
