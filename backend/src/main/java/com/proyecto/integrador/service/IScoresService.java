package com.proyecto.integrador.service;


import com.proyecto.integrador.DTO.ScoresDTO;
import com.proyecto.integrador.exceptions.FindByIdException;
import com.proyecto.integrador.persistence.entity.Scores;


import java.util.List;

public interface IScoresService {
    List<ScoresDTO> findAll() throws FindByIdException;
    ScoresDTO save(ScoresDTO scores) throws FindByIdException;
    ScoresDTO findById(Integer idScores) throws FindByIdException;
    void deleteById(Integer idScores) throws FindByIdException;
    ScoresDTO update(ScoresDTO scores) throws FindByIdException;
    List <Scores> findAllByIdProduct(Integer idProduct)throws FindByIdException;
}
