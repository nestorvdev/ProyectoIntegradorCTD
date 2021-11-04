package com.proyecto.integrador.entity;

import com.proyecto.integrador.DTO.ImageDTO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="image")
public class Image {
    @Id
    @Column(name="idImage")
    @SequenceGenerator(name = "image sequence", sequenceName = "image_sequence")
    @GeneratedValue( strategy = GenerationType.SEQUENCE, generator = "image_sequence")
    private Integer id;
    @Column(name="title", nullable = false)
    private String title;
    @Column(name="url", nullable = false)
    private String url;
    @ManyToOne
    @JoinColumn(name = "idProduct", nullable = false)
    private Product product;

    public Image() {
    }

    public Image(Integer id, String title, String url, Product product) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.product = product;
    }

    public ImageDTO toDto() {
        ImageDTO imageDTO = new ImageDTO();
        imageDTO.setId(id);
        imageDTO.setTitle(title);
        imageDTO.setUrl(url);
        imageDTO.setProduct(product);
        return imageDTO;
    }
}
