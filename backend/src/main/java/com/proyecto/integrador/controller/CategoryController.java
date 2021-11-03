package com.proyecto.integrador.controller;

import com.proyecto.integrador.DTO.CategoryDTO;
import com.proyecto.integrador.entity.Category;
import com.proyecto.integrador.exceptions.FindByIdException;
import com.proyecto.integrador.service.CategoryService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/categories")
public class CategoryController implements CRUDController<CategoryDTO> {

    @Autowired
    CategoryService categoryService;

    @Operation(summary = "Find All Categories ", description = "")
    @GetMapping("/all")
    public ResponseEntity<List<CategoryDTO>> getAll(){
        return ResponseEntity.ok(categoryService.findAllCategories());
    }

    @Operation(summary = "Find category by ID", description = "Returns a single category")
    @GetMapping("/get/{id}")
    public ResponseEntity<CategoryDTO> getById(@PathVariable Integer id) throws FindByIdException {
        return ResponseEntity.ok(categoryService.findCategoryById(id));
    }

    @Operation(summary = "Add a new category", description = "")
    @PostMapping("/create")
    public ResponseEntity<CategoryDTO> create(@RequestBody CategoryDTO category) {
        return ResponseEntity.ok(categoryService.saveCategory(category));
    }

    @Operation(summary = "Update an existing categorie's", description = "")
    @PutMapping("/update")
    public ResponseEntity<CategoryDTO> updateById(@RequestBody CategoryDTO category) throws FindByIdException {
        return ResponseEntity.ok(categoryService.updateCategory(category));
    }

    @Operation(summary = "Deletes  category", description = "")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Integer id) throws FindByIdException {
        categoryService.deleteCategoryById(id);
        return ResponseEntity.ok("Se elimino la categoria con id: "+id);
    }
}
