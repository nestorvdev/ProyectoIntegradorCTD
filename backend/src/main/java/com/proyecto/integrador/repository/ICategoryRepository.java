package com.proyecto.integrador.repository;
import com.proyecto.integrador.entity.Category;
import com.proyecto.integrador.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ICategoryRepository extends JpaRepository<Category, Integer> {
    Category findByTitle(String categoryName);
}
