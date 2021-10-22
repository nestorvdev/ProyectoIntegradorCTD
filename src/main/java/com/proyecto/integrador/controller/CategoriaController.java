package com.proyecto.integrador.controller;

import com.proyecto.integrador.entity.Categoria;
import com.proyecto.integrador.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {

    @Autowired
    CategoriaService categoriaService;

    @GetMapping("/all")
    public ResponseEntity<List<Categoria>> getAll(){
        return ResponseEntity.ok(categoriaService.findAllCategoria());
    }
    @PostMapping("/create")
    public ResponseEntity<Optional<Categoria>> create(@RequestBody Categoria categoria){
        return ResponseEntity.ok(categoriaService.saveCategoria(categoria));
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Optional<Categoria>> update(@PathVariable Integer id,@RequestBody Categoria categoria){
        return ResponseEntity.ok(categoriaService.updateCategoria(id, categoria));
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity delete(@PathVariable Integer id){
        categoriaService.deleteCategoriaById(id);
        return ResponseEntity.ok("Se elimino la categoria con id: "+id);
    }
}
