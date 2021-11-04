package com.proyecto.integrador.entity;

import com.proyecto.integrador.DTO.FeatureDTO;
import com.proyecto.integrador.DTO.ImageDTO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@Table(name = "feature")
public class Feature {
    @Id
    @Column(name = "idFeature", nullable = false)
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "icon", nullable = false)
    private String icon;
    @Column(name = "state", nullable = false)
    private boolean state;
    @ManyToMany
    @JoinTable(
            name = "featurePerProduct",
            joinColumns = @JoinColumn(name = "idFeature"),
            inverseJoinColumns = @JoinColumn(name = "idProduct")
    )
    private Set<Product> products;

    public Feature() {
    }

    public Feature(Integer id, String name, String icon, boolean state) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.state = state;
        this.products = new HashSet<>();
    }

    public FeatureDTO toDto() {
        FeatureDTO featureDTO = new FeatureDTO();
        featureDTO.setId(id);
        featureDTO.setName(name);
        featureDTO.setIcon(icon);
        featureDTO.setState(state);
        featureDTO.setProducts(products);
        return featureDTO;
    }
}
