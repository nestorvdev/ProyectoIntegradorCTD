package com.proyecto.integrador.controller;

import com.proyecto.integrador.entity.Category;
import com.proyecto.integrador.service.CategoryService;
import io.swagger.annotations.ApiOperation;
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

    @ApiOperation(value = "Get the list of all categories")
    @GetMapping("/all")
    public ResponseEntity<List<Category>> getAll(){
        return ResponseEntity.ok(categoryService.findAllCategories());
    }

    @ApiOperation(value = "Get the categorie by id")
    @GetMapping("/get/{id}")
    public ResponseEntity<Optional<Category>> getById(@PathVariable Integer id) {
        return ResponseEntity.ok(categoryService.findCategoryById(id));
    }
    @ApiOperation(value = "Create a new categorie")
    @PostMapping("/create")
    public ResponseEntity<Optional<Category>> create(@RequestBody Category category){
        return ResponseEntity.ok(categoryService.saveCategory(category));
    }
    @ApiOperation(value = "Update a categories")
    @PutMapping("/update/{id}")
    public ResponseEntity<Optional<Category>> update(@PathVariable Integer id, @RequestBody Category category){
        return ResponseEntity.ok(categoryService.updateCategory(id, category));
    }
    @ApiOperation(value = "Delete a categories")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id){
        categoryService.deleteCategoryById(id);
        return ResponseEntity.ok("Se elimino la categoria con id: "+id);
    }
}
