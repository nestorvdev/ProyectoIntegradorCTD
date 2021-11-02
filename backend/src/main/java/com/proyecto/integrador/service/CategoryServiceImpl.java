package com.proyecto.integrador.service;

import com.proyecto.integrador.entity.Category;
import com.proyecto.integrador.repository.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    ICategoryRepository categoryRepository;

    @Override
    public List<Category> findAllCategories() {

        return categoryRepository.findAll();
    }

    @Override
    public Optional<Category> saveCategory(Category category) {
        return Optional.of(categoryRepository.save(category));
    }

    @Override
    public Optional<Category> findCategoryById(Integer categoryId) {
        return categoryRepository.findById(categoryId);
    }

    @Override
    public void deleteCategoryById(Integer categoryId) {
        categoryRepository.deleteById(categoryId);
    }

    @Override
    public Optional<Category> updateCategory(Integer id, Category category) {
        Optional<Category> original= categoryRepository.findById(id);
        if (original.isPresent()){
            original.get().setTitle(category.getTitle());
            original.get().setDescription(category.getDescription());
            original.get().setUrl(category.getUrl());
            return Optional.of(categoryRepository.save(original.get()));
        }else {
            return Optional.empty();
        }
    }
}
