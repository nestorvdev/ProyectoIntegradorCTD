package com.proyecto.integrador.service;

import com.proyecto.integrador.entity.Categoria;
import com.proyecto.integrador.repository.ICategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class CategoriaServiceImpl implements  CategoriaService{
    @Autowired
    ICategoriaRepository categoriaRepository;

    @Override
    public List<Categoria> findAllCategoria() {
        return categoriaRepository.findAll();
    }

    @Override
    public Optional<Categoria> saveCategoria(Categoria categoria) {
        return Optional.of(categoriaRepository.save(categoria));
    }

    @Override
    public Optional<Categoria> findCategoriaById(Integer idCategoria) {
        return categoriaRepository.findById(idCategoria);
    }

    @Override
    public void deleteCategoriaById(Integer idCategoria) {
        categoriaRepository.deleteById(idCategoria);
    }

    @Override
    public Optional<Categoria> updateCategoria(Integer id, Categoria categoria) {
        Optional<Categoria> original=categoriaRepository.findById(id);
        if (original.isPresent()){
            original.get().setTitle(categoria.getTitle());
            original.get().setDescription(categoria.getDescription());
            original.get().setUrl(categoria.getUrl());
            return Optional.of(categoriaRepository.save(original.get()));
        }else {
            return Optional.empty();
        }
    }
}
