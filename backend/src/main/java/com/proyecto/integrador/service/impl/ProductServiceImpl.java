package com.proyecto.integrador.service.impl;

import com.proyecto.integrador.DTO.CategoryDTO;
import com.proyecto.integrador.DTO.ProductDTO;
import com.proyecto.integrador.entity.Category;
import com.proyecto.integrador.entity.Product;
import com.proyecto.integrador.exceptions.FindByIdException;
import com.proyecto.integrador.repository.ICategoryRepository;
import com.proyecto.integrador.repository.IProductRepository;
import com.proyecto.integrador.service.IProductService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements IProductService {
    private final Logger logger = Logger.getLogger(ProductServiceImpl.class);

    @Autowired
    IProductRepository productRepository;
    @Autowired
    CategoryServiceImpl categoryService;
    @Autowired
    CityServiceImpl cityService;

    @Override
    public List<ProductDTO> findAll() {
        logger.debug("Iniciando método buscar todos los productos");
        List<ProductDTO> products = new ArrayList<>();
        for (Product c: productRepository.findAll()) {
            products.add(c.toDto());
        }
        logger.debug("Terminó la ejecución del método buscar todos los productos");
        return products;
    }

    @Override
    public ProductDTO save(ProductDTO product) throws FindByIdException {
        logger.debug("Iniciando método guardar producto");
        ProductDTO newProduct = Optional.of(productRepository.save(product.toEntity())).get().toDto();
        newProduct.setCategory(categoryService.findById(newProduct.getCategory().getId()));
        newProduct.setCity(cityService.findById(newProduct.getCity().getId()));
        logger.debug("Terminó la ejecución del método guardar producto");
        return newProduct;
    }

    @Override
    public ProductDTO findById(Integer productId) throws FindByIdException {
        logger.debug("Iniciando método buscar producto por ID");
        if (!productRepository.existsById(productId)) {
            throw new FindByIdException("No existe un producto con el id ingresado");
        }
        logger.debug("Terminó la ejecución del método buscar producto por ID");
        return productRepository.findById(productId).get().toDto();
    }

    @Override
    public void deleteById(Integer productId) throws FindByIdException {

    }

    @Override
    public ProductDTO update(ProductDTO product) throws FindByIdException {
        return null;
    }
}
