package com.proyecto.integrador.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter
@Setter
@ToString
@Table(name="image")
public class Image {
    @Id
    @Column(name="idImage", nullable = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name="title", nullable = false)
    private String title;
    @Column(name="url", nullable = false)
    private String url;

    public Image() {
    }

    public Image(Integer id, String title, String url) {
        this.id = id;
        this.title = title;
        this.url = url;
    }

    public Image(String title, String url) {
        this.title = title;
        this.url = url;
    }
}
