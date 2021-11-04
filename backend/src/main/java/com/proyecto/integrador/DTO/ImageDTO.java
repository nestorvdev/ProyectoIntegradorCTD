package com.proyecto.integrador.DTO;

import com.proyecto.integrador.entity.City;
import com.proyecto.integrador.entity.Image;
import com.proyecto.integrador.entity.Product;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ImageDTO {
    private Integer id;
    private String title;
    private String url;
    private Product product;

    public ImageDTO() {
    }

    public ImageDTO(Integer id, String title, String url, Product product) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.product = product;
    }

    public ImageDTO(String title, String url, Product product) {
        this.title = title;
        this.url = url;
        this.product = product;
    }

    public Image toEntity() {
        Image image = new Image();
        image.setTitle(title);
        image.setUrl(url);
        image.setProduct(product);
        return image;
    }
}
