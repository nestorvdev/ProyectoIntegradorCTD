package com.proyecto.integrador.service;
import com.proyecto.integrador.DTO.CityDTO;
import com.proyecto.integrador.exceptions.FindByIdException;

import java.util.List;

public interface CityService {
    List<CityDTO> findAllCities();
    CityDTO saveCity(CityDTO city);
    CityDTO findCityById(Integer cityId) throws FindByIdException;
    void deleteCityById(Integer cityId) throws FindByIdException;
    CityDTO updateCity(CityDTO city) throws FindByIdException;
}