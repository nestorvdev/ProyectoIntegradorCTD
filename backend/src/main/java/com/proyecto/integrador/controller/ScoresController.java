package com.proyecto.integrador.controller;

import com.proyecto.integrador.DTO.ScoresDTO;
import com.proyecto.integrador.exceptions.FindByIdException;
import com.proyecto.integrador.service.IScoresService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/products/scores")
public class ScoresController implements CRUDController <ScoresDTO> {

    @Autowired
    IScoresService scoresService;

    @Operation(summary = "Find All Scores")
    @GetMapping("/all")
    public ResponseEntity<List<ScoresDTO>> getAll() throws FindByIdException{
        return ResponseEntity.ok(scoresService.findAll());
    }

    @Operation(summary = "Add a new score")
    @PostMapping("/create")
    public ResponseEntity<ScoresDTO> create(@RequestBody ScoresDTO scores) throws FindByIdException{
        return ResponseEntity.ok(scoresService.save(scores));
    }

    @Operation(summary = "Find score by ID", description = "Returns a single score")
    @GetMapping("/get/{id}")
    public ResponseEntity<ScoresDTO> getById(@PathVariable Integer idScore) throws FindByIdException {
        return ResponseEntity.ok(scoresService.findById(idScore));
    }

    @Operation(summary = "Update an existing score")
    @PutMapping("/update")
    public ResponseEntity<ScoresDTO> updateById(@RequestBody ScoresDTO scores) throws FindByIdException{
        return ResponseEntity.ok(scoresService.update(scores));
    }

    @Operation(summary = "Delete a score")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Integer idScore) throws FindByIdException {
        scoresService.deleteById(idScore);
        return ResponseEntity.ok("Se elimino la puntuación con id"+ idScore);
    }
}
