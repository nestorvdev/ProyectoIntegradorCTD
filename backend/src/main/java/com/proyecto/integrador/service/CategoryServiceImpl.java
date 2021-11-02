package com.proyecto.integrador.service;

import com.proyecto.integrador.DTO.CategoryDTO;
import com.proyecto.integrador.entity.Category;
import com.proyecto.integrador.exceptions.FindByIdException;
import com.proyecto.integrador.exceptions.GlobalException;
import com.proyecto.integrador.repository.ICategoryRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
public class CategoryServiceImpl implements CategoryService {
    private final Logger logger = Logger.getLogger(GlobalException.class);

    @Autowired
    ICategoryRepository categoryRepository;

    @Override
    public List<CategoryDTO> findAllCategories() {
        logger.debug("Iniciando método buscar todas las categorías");
        List<CategoryDTO> categories = new ArrayList<>();
        for (Category c: categoryRepository.findAll()) {
            categories.add(c.toDto());
        }
        logger.debug("Terminó la ejecución del método buscar todas las categorías");
        return categories;
    }

    @Override
    public CategoryDTO saveCategory(CategoryDTO category) {
        logger.debug("Iniciando método guardar categoria");
        logger.debug("Terminó la ejecución del método guardas categoría");
        return Optional.of(categoryRepository.save(category.toEntity())).get().toDto();
    }

    @Override
    public CategoryDTO findCategoryById(Integer categoryId) throws FindByIdException {
        logger.debug("Iniciando método buscar categoria por ID");
        if (!categoryRepository.existsById(categoryId)) {
            throw new FindByIdException("No existe una categoría con el id ingresado");
        }
        logger.debug("Terminó la ejecución del método buscar categoría por ID");
        return categoryRepository.findById(categoryId).get().toDto();
    }

    @Override
    public void deleteCategoryById(Integer categoryId) throws FindByIdException {
        logger.debug("Iniciando método eliminar categoria por ID");
        if (!categoryRepository.existsById(categoryId)) {
            throw new FindByIdException("No existe una categoría con el id ingresado");
        }
        logger.debug("Terminó la ejecución del método eliminar categoría por ID");
        categoryRepository.deleteById(categoryId);
    }

    @Override
    public CategoryDTO updateCategory(CategoryDTO categoryDTO) throws FindByIdException {
        logger.debug("Iniciando método actualizar categoria por ID");
        if (!categoryRepository.existsById(categoryDTO.getId())) {
            throw new FindByIdException("No existe una categoría con el id ingresado");
        }
        Category category = categoryRepository.findById(categoryDTO.getId()).get();
        category.setTitle(categoryDTO.getTitle());
        category.setDescription(categoryDTO.getDescription());
        category.setUrl(categoryDTO.getUrl());
        logger.debug("Terminó la ejecución del método actualizar categoría por ID");
        return categoryRepository.save(category).toDto();
    }
}
