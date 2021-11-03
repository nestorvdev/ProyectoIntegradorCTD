package com.proyecto.integrador.entity;

import com.proyecto.integrador.DTO.CategoryDTO;
import com.proyecto.integrador.DTO.CityDTO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter
@Setter
@ToString
@Table(name = "city")
public class City {
    @Id
    @Column(name = "idCity", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "country", nullable = false)
    private String country;

    public City() {
    }

    public City(Integer id, String name, String country) {
        this.id = id;
        this.name = name;
        this.country = country;
    }

    public City(String name, String country) {
        this.name = name;
        this.country = country;
    }
    public CityDTO toDto() {
        CityDTO cityDTO = new CityDTO();
        cityDTO.setId(id);
        cityDTO.setName(name);
        cityDTO.setCountry(country);
        return cityDTO;
    }
}
