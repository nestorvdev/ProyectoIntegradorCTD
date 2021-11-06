package com.proyecto.integrador.DTO;
import com.proyecto.integrador.persistence.entity.Feature;
import com.proyecto.integrador.persistence.entity.Product;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;


@Getter
@Setter
public class FeatureDTO {
    private Integer id;
    private String title;
    private boolean state;
    private Set<Product> products = new HashSet<>();
    /*private Set<Integer> productIds = new HashSet<>();*/

    public FeatureDTO() {
    }

    public FeatureDTO(Integer id, String title, boolean state) {
        this.id = id;
        this.title = title;
        this.state = state;
    }

    public FeatureDTO(String title, boolean state) {
        this.title = title;
        this.state = state;
    }

    public Feature toEntity (){
        Feature feature = new Feature();
        feature.setTitle(title);
        feature.setState(state);
        feature.setProducts(products);
        return feature;
    }

}

