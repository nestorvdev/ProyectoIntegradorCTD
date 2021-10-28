package com.proyecto.integrador.DTO;
import com.proyecto.integrador.entity.Category;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryDTO {

    private Integer id;
    private String title;
    private String description;
    private String url;

    public CategoryDTO() {
    }

    public CategoryDTO(Integer id, String title, String description, String url) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
    }

    public CategoryDTO(String title, String description, String url) {
        this.title = title;
        this.description = description;
        this.url = url;
    }

    public Category toEntity(CategoryDTO categoryDTO) {
        Category category = new Category();
        category.setTitle(categoryDTO.getTitle());
        category.setDescription(categoryDTO.getDescription());
        category.setUrl(categoryDTO.getUrl());
        return category;
    }
}
