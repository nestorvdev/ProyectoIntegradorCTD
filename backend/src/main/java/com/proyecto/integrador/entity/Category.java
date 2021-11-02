package com.proyecto.integrador.entity;

import com.proyecto.integrador.DTO.CategoryDTO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;
@Entity
@Getter
@Setter
@ToString
@Table(name = "categories")
public class Category {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "title", nullable = false)
    private String title;
    @Column(name = "description", nullable = false)
    private String description;
    @Column(name = "url", nullable = false)
    private String url;

    public Category() {
    }

    public Category(Integer id, String title, String description, String url) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
    }

    public Category(String title, String description, String url) {
        this.title = title;
        this.description = description;
        this.url = url;
    }

    public CategoryDTO toDto() {
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setId(id);
        categoryDTO.setTitle(title);
        categoryDTO.setDescription(description);
        categoryDTO.setUrl(url);
        return categoryDTO;
    }
}

