package com.proyecto.integrador.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter
@Setter
@ToString
@Table(name = "feature")
public class Feature {
    @Id
    @Column(name = "idFeature", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "icon", nullable = false)
    private String icon;

    public Feature() {
    }

    public Feature(Integer id, String name, String icon) {
        this.id = id;
        this.name = name;
        this.icon = icon;
    }

    public Feature(String name, String icon) {
        this.name = name;
        this.icon = icon;
    }
}
