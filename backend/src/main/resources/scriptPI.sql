CREATE SCHEMA `proyecto_integrador` ;

CREATE TABLE categories (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(100) NOT NULL,
  description varchar(100) NOT NULL,
  url varchar(200) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `proyecto_integrador`.`caracteristicas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `icono` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `proyecto_integrador`.`imagenes` (
  `id` INT NOT NULL,
  `titulo` VARCHAR(45) NOT NULL,
  `url` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`));