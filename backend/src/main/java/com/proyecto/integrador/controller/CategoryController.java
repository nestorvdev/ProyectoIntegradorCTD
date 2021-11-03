package com.proyecto.integrador.controller;

import com.proyecto.integrador.DTO.CategoryDTO;
import com.proyecto.integrador.entity.Category;
import com.proyecto.integrador.exceptions.FindByIdException;
import com.proyecto.integrador.service.CategoryService;
<<<<<<< HEAD
import io.swagger.annotations.ApiOperation;
=======
import io.swagger.v3.oas.annotations.Operation;
>>>>>>> 4e3f72dbff6d1e2a990ad0e5a970e2cee3f536dc
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

<<<<<<< HEAD
    @ApiOperation(value = "Get the list of all categories")
=======
    @Operation(summary = "Find All Categories ", description = "")
>>>>>>> 4e3f72dbff6d1e2a990ad0e5a970e2cee3f536dc
    @GetMapping("/all")
    public ResponseEntity<List<CategoryDTO>> getAll(){
        return ResponseEntity.ok(categoryService.findAllCategories());
    }

<<<<<<< HEAD
    @ApiOperation(value = "Get the categorie by id")
=======
    @Operation(summary = "Find category by ID", description = "Returns a single category")
>>>>>>> 4e3f72dbff6d1e2a990ad0e5a970e2cee3f536dc
    @GetMapping("/get/{id}")
    public ResponseEntity<CategoryDTO> getById(@PathVariable Integer id) throws FindByIdException {
        return ResponseEntity.ok(categoryService.findCategoryById(id));
    }
<<<<<<< HEAD
    @ApiOperation(value = "Create a new categorie")
=======

    @Operation(summary = "Add a new category", description = "")
>>>>>>> 4e3f72dbff6d1e2a990ad0e5a970e2cee3f536dc
    @PostMapping("/create")
    public ResponseEntity<CategoryDTO> create(@RequestBody CategoryDTO category) {
        return ResponseEntity.ok(categoryService.saveCategory(category));
    }
<<<<<<< HEAD
    @ApiOperation(value = "Update a categories")
=======

    @Operation(summary = "Update an existing categorie's", description = "")
>>>>>>> 4e3f72dbff6d1e2a990ad0e5a970e2cee3f536dc
    @PutMapping("/update/{id}")
    public ResponseEntity<CategoryDTO> updateById(@RequestBody CategoryDTO category) throws FindByIdException {
        return ResponseEntity.ok(categoryService.updateCategory(category));
    }
<<<<<<< HEAD
    @ApiOperation(value = "Delete a categories")
=======

    @Operation(summary = "Deletes  category", description = "")
>>>>>>> 4e3f72dbff6d1e2a990ad0e5a970e2cee3f536dc
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Integer id) throws FindByIdException {
        categoryService.deleteCategoryById(id);
        return ResponseEntity.ok("Se elimino la categoria con id: "+id);
    }
}
