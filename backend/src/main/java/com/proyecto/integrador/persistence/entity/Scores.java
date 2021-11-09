package com.proyecto.integrador.persistence.entity;

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
    @ManyToOne
    @JoinColumn(name = "idProduct", nullable = false)
    private Product product;
}
