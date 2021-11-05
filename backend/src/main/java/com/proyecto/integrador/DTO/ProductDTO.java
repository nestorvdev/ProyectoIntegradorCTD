package com.proyecto.integrador.DTO;

import com.proyecto.integrador.entity.*;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
public class ProductDTO {
    private Integer id;
    private String name;
    private String description;
    private double latitude;
    private double longitude;
    private double qualification;
    private boolean favourite = false;
    private String reference;
    private CategoryDTO category;
    private CityDTO city;
    private Set<ImageDTO> images = new HashSet<>();
    private Set<FeatureDTO> features = new HashSet<>();

    public ProductDTO() {
    }

    public ProductDTO(String name, String description, double latitude, double longitude, double qualification, boolean favourite, String reference, CategoryDTO category, CityDTO city) {
        this.name = name;
        this.description = description;
        this.latitude = latitude;
        this.longitude = longitude;
        this.qualification = qualification;
        this.favourite = favourite;
        this.reference = reference;
        this.category = category;
        this.city = city;
    }

    public ProductDTO(Integer id, String name, String description, double latitude, double longitude, double qualification, boolean favourite, String reference, CategoryDTO category, CityDTO city) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.latitude = latitude;
        this.longitude = longitude;
        this.qualification = qualification;
        this.favourite = favourite;
        this.reference = reference;
        this.category = category;
        this.city = city;
    }

    public Product toEntity(){
        Product product = new Product();
        product.setName(name);
        product.setDescription(description);
        product.setLatitude(latitude);
        product.setLongitude(longitude);
        product.setQualification(qualification);
        product.setFavourite(favourite);
        product.setReference(reference);
        product.setCategory(new Category(category.getId()));
        product.setCity(new City(city.getId()));
        return product;
    }
}
