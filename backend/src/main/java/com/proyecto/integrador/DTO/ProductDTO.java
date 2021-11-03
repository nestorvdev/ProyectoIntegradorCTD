package com.proyecto.integrador.DTO;

import com.proyecto.integrador.entity.Product;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDTO {
    private Integer id;
    private String name;
    private String description;

    public ProductDTO() {
    }

    public ProductDTO(Integer id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public ProductDTO(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Product toEntity(ProductDTO productDTO){
        Product product = new Product();
        product.setName(productDTO.getName());
        product.setDescription(productDTO.getDescription());
        return product;
    }
}
