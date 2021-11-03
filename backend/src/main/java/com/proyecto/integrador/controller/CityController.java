package com.proyecto.integrador.controller;

import com.proyecto.integrador.DTO.CityDTO;
import com.proyecto.integrador.exceptions.FindByIdException;
import com.proyecto.integrador.service.CityService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/cities")
public class CityController implements CRUDController<CityDTO>{

    @Autowired
    CityService cityService;

    @Operation(summary = "Find All Cities ", description = "")
    @GetMapping("/all")
    public ResponseEntity<List<CityDTO>> getAll(){
        return ResponseEntity.ok(cityService.findAllCities());
    }

    @Operation(summary = "Find city by ID", description = "Returns a single city")
    @GetMapping("/get/{id}")
    public ResponseEntity<CityDTO> getById(@PathVariable Integer id) throws FindByIdException {
        return ResponseEntity.ok(cityService.findCityById(id));
    }

    @Operation(summary = "Add a new city", description = "")
    @PostMapping("/create")
    public ResponseEntity<CityDTO> create(@RequestBody CityDTO city) {
        return ResponseEntity.ok(cityService.saveCity(city));
    }

    @Operation(summary = "Update an existing city", description = "")
    @PutMapping("/update")
    public ResponseEntity<CityDTO> updateById(@RequestBody CityDTO city) throws FindByIdException {
        return ResponseEntity.ok(cityService.updateCity(city));
    }

    @Operation(summary = "Delete a city by ID", description = "")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Integer id) throws FindByIdException {
        cityService.deleteCityById(id);
        return ResponseEntity.ok("Se eliminÃ³ la ciudad con id: "+id);
    }
}