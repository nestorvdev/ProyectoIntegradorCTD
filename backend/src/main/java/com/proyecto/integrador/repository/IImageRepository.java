package com.proyecto.integrador.repository;

import com.proyecto.integrador.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IImageRepository extends JpaRepository<Image, Integer> {
}
