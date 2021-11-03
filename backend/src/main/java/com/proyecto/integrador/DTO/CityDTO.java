package com.proyecto.integrador.DTO;

import com.proyecto.integrador.entity.City;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CityDTO {
    private Integer id;
    private String name;
    private String country;

    public CityDTO() {
    }

    public CityDTO(Integer id, String name, String country) {
        this.id = id;
        this.name = name;
        this.country = country;
    }

    public CityDTO(String name, String country) {
        this.name = name;
        this.country = country;
    }

    public City toEntity(CityDTO cityDTO) {
        City city = new City();
        city.setName(cityDTO.getName());
        city.setCountry(cityDTO.getCountry());
        return city;
    }
}

