package com.proyecto.integrador.DTO;

import com.proyecto.integrador.entity.City;
import com.proyecto.integrador.entity.Feature;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class FeatureDTO {
    private Integer id;
    private String name;
    private String icon;

    public FeatureDTO() {
    }

    public FeatureDTO(Integer id, String name, String icon) {
        this.id = id;
        this.name = name;
        this.icon = icon;
    }

    public FeatureDTO(String name, String icon) {
        this.name = name;
        this.icon = icon;
    }

    public Feature toEntity (FeatureDTO featureDTO){
        Feature feature = new Feature();
        feature.setName(featureDTO.getName());
        feature.setIcon(featureDTO.getIcon());
        return feature;
    }
}

