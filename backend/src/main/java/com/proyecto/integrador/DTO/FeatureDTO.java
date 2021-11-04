package com.proyecto.integrador.DTO;

import com.proyecto.integrador.entity.City;
import com.proyecto.integrador.entity.Feature;
import com.proyecto.integrador.entity.Product;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;


@Getter
@Setter
public class FeatureDTO {
    private Integer id;
    private String name;
    private String icon;
    private boolean state;
    private Set<Product> products;

    public FeatureDTO() {
    }

    public FeatureDTO(Integer id, String name, String icon, boolean state) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.state = state;
        this.products = new HashSet<>();
    }

    public FeatureDTO(String name, String icon, boolean state) {
        this.name = name;
        this.icon = icon;
        this.state = state;
        this.products = new HashSet<>();
    }

    public Feature toEntity (){
        Feature feature = new Feature();
        feature.setName(name);
        feature.setIcon(icon);
        feature.setState(state);
        feature.setProducts(products);
        return feature;
    }
}

