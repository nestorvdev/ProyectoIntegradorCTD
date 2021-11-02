package com.proyecto.integrador.controller;

import com.proyecto.integrador.entity.Category;
import com.proyecto.integrador.service.CategoryService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @Operation(summary = "Find All Categories ", description = "")
    @GetMapping("/all")
    public ResponseEntity<List<Category>> getAll(){
        return ResponseEntity.ok(categoryService.findAllCategories());
    }

    @Operation(summary = "Find category by ID", description = "Returns a single category")
    @GetMapping("/get/{id}")
    public ResponseEntity<Optional<Category>> getById(@PathVariable Integer id) {
        return ResponseEntity.ok(categoryService.findCategoryById(id));
    }

    @Operation(summary = "Add a new category", description = "")
    @PostMapping("/create")
    public ResponseEntity<Optional<Category>> create(@RequestBody Category category){
        return ResponseEntity.ok(categoryService.saveCategory(category));
    }

    @Operation(summary = "Update an existing categorie's", description = "")
    @PutMapping("/update/{id}")
    public ResponseEntity<Optional<Category>> update(@PathVariable Integer id, @RequestBody Category category){
        return ResponseEntity.ok(categoryService.updateCategory(id, category));
    }

    @Operation(summary = "Deletes  category", description = "")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id){
        categoryService.deleteCategoryById(id);
        return ResponseEntity.ok("Se elimino la categoria con id: "+id);
    }
}
