package com.proyecto.integrador.persistence.entity;

import com.proyecto.integrador.DTO.CategoryDTO;
import com.proyecto.integrador.DTO.CityDTO;
import com.proyecto.integrador.DTO.ProductDTO;
import com.proyecto.integrador.DTO.ScoresDTO;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "scores")
public class Scores {
    @Id
    @Column(name = "id_scores", nullable = false)
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Integer idScores;
    @Column(name = "id_user", nullable = false)
    private String idUser;
    @Column(name = "score", nullable = false)
    private String score;
    @Column(name = "favorite", nullable = false)
    private Boolean favorite;

    @ManyToOne
    @JoinColumn(name = "id_product", nullable = false)
    private Product product;

    public ScoresDTO toDto(){
        ScoresDTO scoreDTO = new ScoresDTO();
        scoreDTO.setIdScores(idScores);
        scoreDTO.setIdUser(idUser);
        scoreDTO.setScore(score);
        scoreDTO.setFavorite(favorite);
        return scoreDTO;
    }
}
