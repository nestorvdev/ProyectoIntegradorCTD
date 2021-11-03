package com.proyecto.integrador.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ImageDTO {
    private Integer id;
    private String title;
    private String url;

    public ImageDTO() {
    }

    public ImageDTO(Integer id, String title, String url) {
        this.id = id;
        this.title = title;
        this.url = url;
    }

    public ImageDTO(String title, String url) {
        this.title = title;
        this.url = url;
    }
}
