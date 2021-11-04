package com.proyecto.integrador.entity;

import com.proyecto.integrador.DTO.CategoryDTO;
import com.proyecto.integrador.DTO.CityDTO;
import com.proyecto.integrador.DTO.ProductDTO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@Table(name ="product")
public class Product {
    @Id
    @Column(name="idProduct", nullable = false)
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name="description", nullable = false)
    private String description;
    @Column(name = "latitude", nullable = false)
    private double latitude;
    @Column(name = "longitude", nullable = false)
    private double longitude;
    @Column(name = "qualification", nullable = false)
    private double qualification;
    @Column(name = "favourite", nullable = false)
    private boolean favourite;
    @Column(name = "reference", nullable = false)
    private String reference;
    @ManyToOne
    @JoinColumn(name = "idCategory", nullable = false)
    private Category category;
    @ManyToOne
    @JoinColumn(name = "idCity", nullable = false)
    private City city;
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private Set<Image> images;
    @ManyToMany(mappedBy = "products")
    private Set<Feature> features;

    public Product() {
    }

    public Product(Integer id) {
        this.id = id;
    }

    public Product(Integer id, String name, String description, double latitude, double longitude, double qualification, boolean favourite, String reference, Category category, City city) {
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
        this.images = new HashSet<>();
        this.features = new HashSet<>();
    }

    public ProductDTO toDto(){
        ProductDTO productDTO = new ProductDTO();
        productDTO.setId(id);
        productDTO.setName(name);
        productDTO.setDescription(description);
        productDTO.setLatitude(latitude);
        productDTO.setLongitude(longitude);
        productDTO.setQualification(qualification);
        productDTO.setFavourite(favourite);
        productDTO.setReference(reference);
        productDTO.setCategory(new CategoryDTO(category.getId()));
        productDTO.setCity(new CityDTO(city.getId()));
        return productDTO;
    }
}
