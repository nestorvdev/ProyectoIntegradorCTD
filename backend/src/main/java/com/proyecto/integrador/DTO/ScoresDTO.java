package com.proyecto.integrador.DTO;


import com.proyecto.integrador.persistence.entity.Scores;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ScoresDTO {
    private Integer idScores;
    private Integer idUser;
    private Integer score;
    private Boolean favorite;

    public Scores toEntity(){
        Scores scores = new Scores();
        scores.setIdScores(idScores);
        scores.setIdUser(idUser);
        scores.setScore(score);
        scores.setFavorite(favorite);
        return scores;
    }
}
