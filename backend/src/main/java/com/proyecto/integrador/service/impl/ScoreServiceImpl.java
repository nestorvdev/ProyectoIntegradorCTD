package com.proyecto.integrador.service.impl;


import com.proyecto.integrador.DTO.ScoresDTO;
import com.proyecto.integrador.exceptions.FindByIdException;
import com.proyecto.integrador.persistence.entity.Scores;
import com.proyecto.integrador.persistence.repository.IScoresRepository;
import com.proyecto.integrador.service.IScoresService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.apache.log4j.Logger;

import java.util.ArrayList;
import java.util.List;

@Service
public class ScoreServiceImpl implements IScoresService {
    private final Logger logger = Logger.getLogger(ProductServiceImpl.class);
    @Autowired
    IScoresRepository scoresRepository;

    @Override
    public List<ScoresDTO> findAll() throws FindByIdException {
        logger.debug("Iniciando método buscar todas las puntuaciones");
        List<ScoresDTO> scoresList = new ArrayList<>();
        for (Scores item: scoresRepository.findAll()) {
            scoresList.add(toDTO(item));
        }
        logger.debug("Terminó la ejecución del método buscar todas las puntuaciones");
        return scoresList;
    }

    @Override
    public ScoresDTO save(ScoresDTO scores) throws FindByIdException {
        logger.debug("Iniciando método guardar puntuación");
        Scores newScores = scoresRepository.save(scores.toEntity());
        logger.debug("Terminó la ejecución del método guardar puntuación");
        return toDTO(newScores);
    }

    @Override
    public ScoresDTO findById(Integer idScores) throws FindByIdException {
        logger.debug("Iniciando método buscar producto por ID");
        if (!scoresRepository.existsById(idScores)) {
            throw new FindByIdException("No existe una puntuación con el id ingresado");
        }
        Scores foundScores = scoresRepository.findById(idScores).get();
        logger.debug("Terminó la ejecución del método buscar puntuación por ID");
        return toDTO(foundScores);
    }

    @Override
    public void deleteById(Integer idScores) throws FindByIdException {
        logger.debug("Iniciando método eliminar puntuación por ID");
        if (!scoresRepository.existsById(idScores)) {
            throw new FindByIdException("No existe una puntuación con el id ingresado");
        }
        logger.debug("Terminó la ejecución del método eliminar puntuación por ID");
        scoresRepository.deleteById(idScores);
    }

    @Override
    public ScoresDTO update(ScoresDTO scores) throws FindByIdException {
        logger.debug("Iniciando método actualizar producto");
        if (!scoresRepository.existsById(scores.getIdScores())) {
            throw new FindByIdException("No existe una puntuación con el id ingresado");
        }
        Scores scores1 = scoresRepository.findById(scores.getIdScores()).get();
        scores1.setIdUser(scores.getIdUser());
        scores1.setScore(scores.getScore());
        scores1.setFavorite(scores.getFavorite());
        logger.debug("Terminó la ejecución del método actualizar puntuación");
        return toDTO(scores1);
    }

    @Override
    public List<Scores> findAllByIdProduct(Integer idProduct) throws FindByIdException {
        return scoresRepository.findByProductId(idProduct);
    }

    public static ScoresDTO toDTO(Scores score){//entidad a DTO
        ScoresDTO scoreDTO = new ScoresDTO();
        scoreDTO.setIdScores(score.getIdScores());
        scoreDTO.setFavorite(score.getFavorite());
        scoreDTO.setIdUser(score.getIdUser());
        scoreDTO.setScore(score.getScore());
        return  scoreDTO;
    }
    public static Scores toEntity(ScoresDTO score){//DTO a entidad
        Scores scoreEntity = new Scores();
        scoreEntity.setIdScores(score.getIdScores());
        scoreEntity.setFavorite(score.getFavorite());
        scoreEntity.setIdUser(score.getIdUser());
        scoreEntity.setScore(score.getScore());
        return  scoreEntity;
    }
}
