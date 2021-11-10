package com.proyecto.integrador.persistence.repository;


import com.proyecto.integrador.persistence.entity.Product;
import com.proyecto.integrador.persistence.entity.Scores;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IScoresRepository extends JpaRepository<Scores, Integer> {

}
