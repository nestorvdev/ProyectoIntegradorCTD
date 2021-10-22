package com.proyecto.integrador.service;

import com.proyecto.integrador.entity.Categoria;

import java.util.List;
import java.util.Optional;

public interface CategoriaService {
    List<Categoria> findAllCategoria();
    Optional<Categoria> saveCategoria(Categoria categoria);
    Optional<Categoria> findCategoriaById(Integer idCategoria);
    void deleteCategoriaById(Integer idCategoria);
    Optional<Categoria> updateCategoria(Integer id,Categoria categoria);

}
