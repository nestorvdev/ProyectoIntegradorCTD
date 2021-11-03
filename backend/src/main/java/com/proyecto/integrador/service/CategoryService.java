package com.proyecto.integrador.service;

import com.proyecto.integrador.DTO.CategoryDTO;
import com.proyecto.integrador.entity.Category;
import com.proyecto.integrador.exceptions.FindByIdException;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    List<CategoryDTO> findAllCategories();
    CategoryDTO saveCategory(CategoryDTO category);
    CategoryDTO findCategoryById(Integer categoryId) throws FindByIdException;
    void deleteCategoryById(Integer categoryId) throws FindByIdException;
    CategoryDTO updateCategory(CategoryDTO category) throws FindByIdException;
}
