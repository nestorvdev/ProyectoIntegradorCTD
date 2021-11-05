package com.proyecto.integrador.DTO;
import com.proyecto.integrador.entity.Category;
import com.proyecto.integrador.entity.Product;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

/*@JsonIgnoreProperties(ignoreUnknown = true)*/
@Getter
@Setter
public class CategoryDTO {
    private Integer id;
    private String title;
    private String description;
    private String url;

    public CategoryDTO() {
    }

    public CategoryDTO(Integer id) {
        this.id = id;
    }

    public CategoryDTO(String title, String description, String url) {
        this.title = title;
        this.description = description;
        this.url = url;
    }

    public CategoryDTO(Integer id, String title, String description, String url) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
    }

    public Category toEntity() {
        Category category = new Category();
        category.setTitle(title);
        category.setDescription(description);
        category.setUrl(url);
        return category;
    }
}
