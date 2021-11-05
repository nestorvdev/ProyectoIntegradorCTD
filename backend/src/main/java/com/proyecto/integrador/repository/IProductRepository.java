package com.proyecto.integrador.repository;

import com.proyecto.integrador.DTO.ProductDTO;
import com.proyecto.integrador.entity.Category;
import com.proyecto.integrador.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findByCategory_Title(final String title);

    List<Product> findByCity_Id(final Integer id);
}
