package com.proyecto.integrador.service;

import com.proyecto.integrador.entity.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    List<Category> findAllCategories();
    Optional<Category> saveCategory(Category category);
    Optional<Category> findCategoryById(Integer categoryId);
    void deleteCategoryById(Integer categoryId);
    Optional<Category> updateCategory(Integer id, Category category);

}
