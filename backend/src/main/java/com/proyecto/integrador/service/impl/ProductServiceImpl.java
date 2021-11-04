package com.proyecto.integrador.service.impl;

import com.proyecto.integrador.DTO.CategoryDTO;
import com.proyecto.integrador.DTO.ImageDTO;
import com.proyecto.integrador.DTO.ProductDTO;
import com.proyecto.integrador.entity.Category;
import com.proyecto.integrador.entity.Image;
import com.proyecto.integrador.entity.Product;
import com.proyecto.integrador.exceptions.FindByIdException;
import com.proyecto.integrador.repository.ICategoryRepository;
import com.proyecto.integrador.repository.IProductRepository;
import com.proyecto.integrador.service.IProductService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class ProductServiceImpl implements IProductService {
    private final Logger logger = Logger.getLogger(ProductServiceImpl.class);

    @Autowired
    IProductRepository productRepository;
    @Autowired
    CategoryServiceImpl categoryService;
    @Autowired
    CityServiceImpl cityService;
    @Autowired
    ImageServiceImpl imageService;


    private Set<ImageDTO> findAssociatedImages(Integer productId) {
        Stream<ImageDTO> filterImages = imageService.findAll().stream().filter(image -> Objects.equals(image.getProductId(),productId));
        return filterImages.collect(Collectors.toSet());
    }

    @Override
    public List<ProductDTO> findAll() throws FindByIdException {
        logger.debug("Iniciando método buscar todos los productos");
        List<ProductDTO> products = new ArrayList<>();
        for (Product c: productRepository.findAll()) {
            ProductDTO productDTO = c.toDto();
            productDTO.setCategory(categoryService.findById(c.getCategory().getId()));
            productDTO.setCity(cityService.findById(c.getCity().getId()));
            productDTO.setImages(findAssociatedImages(productDTO.getId()));
            products.add(productDTO);
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
        ProductDTO foundProduct = productRepository.findById(productId).get().toDto();
        foundProduct.setCategory(categoryService.findById(foundProduct.getCategory().getId()));
        foundProduct.setCity(cityService.findById(foundProduct.getCity().getId()));
        foundProduct.setImages(findAssociatedImages(foundProduct.getId()));
        logger.debug("Terminó la ejecución del método buscar producto por ID");
        return foundProduct;
    }

    @Override
    public void deleteById(Integer productId) throws FindByIdException {
        logger.debug("Iniciando método eliminar producto por ID");
        if (!productRepository.existsById(productId)) {
            throw new FindByIdException("No existe una producto con el id ingresado");
        }
        logger.debug("Terminó la ejecución del método eliminar producto por ID");
        productRepository.deleteById(productId);
    }

    @Override
    public ProductDTO update(ProductDTO product) throws FindByIdException {
        return null; // Falta implementar
    }
}
