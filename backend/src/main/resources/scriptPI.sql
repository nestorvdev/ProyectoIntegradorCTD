DROP DATABASE IF EXISTS `proyecto_integrador`; 
CREATE DATABASE `proyecto_integrador`;
USE `proyecto_integrador`;

CREATE SCHEMA IF NOT EXISTS `proyecto_integrador`;

DROP TABLE IF EXISTS `proyecto_integrador`.`city`;

CREATE TABLE `proyecto_integrador`.`city` (
  `idCity` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  PRIMARY KEY (`idCity`)
  )ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `proyecto_integrador`.`category`;

CREATE TABLE `proyecto_integrador`.`category` (
  `idCategory` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `url` varchar(500) NOT NULL,
  PRIMARY KEY (`idCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `proyecto_integrador`.`feature`;

CREATE TABLE `proyecto_integrador`.`feature` (
  `idFeature` int NOT NULL AUTO_INCREMENT,
  `featureName` varchar(50) NOT NULL,
  `icon` varchar(200) NOT NULL,
  PRIMARY KEY (`idFeature`)
  )ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `proyecto_integrador`.`product`;

 CREATE TABLE `proyecto_integrador`.`product` (
  `idProduct` int NOT NULL AUTO_INCREMENT,
  `productName` varchar(45) NOT NULL,
  `description` varchar(200) NOT NULL,
  `idCity` int NOT NULL,
  `idCategory` int NOT NULL,
  PRIMARY KEY (`idProduct`),
  KEY `IdCity_idx` (`idCity`),
  CONSTRAINT `idCity` FOREIGN KEY (`idCity`) REFERENCES `city` (`idCity`),
  KEY `IdCategory_idx` (`idCategory`),
  CONSTRAINT `IdCategory` FOREIGN KEY (`IdCategory`) REFERENCES `category` (`IdCategory`)
  )ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `proyecto_integrador`.`feature_product`;

CREATE TABLE `proyecto_integrador`.`feature_product` (
  `idFeatureProduct` int AUTO_INCREMENT NOT NULL,
  `idFeature` int DEFAULT NULL,
  `idProduct` int DEFAULT NULL,
  PRIMARY KEY (`idFeatureProduct`),
  KEY `Feature_idx` (`idFeature`),
  KEY `Product_idx` (`idProduct`),
  CONSTRAINT `featureName` FOREIGN KEY (`idFeature`) REFERENCES `feature` (`idFeature`),
  CONSTRAINT `productName` FOREIGN KEY (`idProduct`) REFERENCES `product` (`idProduct`)
  )ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

  DROP TABLE IF EXISTS `proyecto_integrador`.`image`;

  CREATE TABLE `proyecto_integrador`.`image` (
  `idImage` int AUTO_INCREMENT NOT NULL,
  `title` varchar(45) NOT NULL,
  `url` varchar(500) NOT NULL,
  `idProduct` int NOT NULL,
  PRIMARY KEY (`idImage`),
  KEY `IdProduct_idx` (`idProduct`),
  CONSTRAINT `idProduct` FOREIGN KEY (`idProduct`) REFERENCES `product` (`idProduct`)
  )ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Buenos Aires','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Mendoza','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Corrientes','Argentina');

INSERT INTO `proyecto_integrador`.`category` (title,description,url)
VALUES ('Hoteles','807.105 hoteles','https://media.istockphoto.com/photos/hotel-service-bell-concept-hotel-travel-roommodern-luxury-hotel-on-picture-id1268469291?b=1&k=20&m=1268469291&s=170667a&w=0&h=M4wvZWxG47WyUjjfaX2_fgUD7HcmkgVNhahnL3dgeRo=');

INSERT INTO `proyecto_integrador`.`category` (title,description,url)
VALUES ('Hostels','200.105 hostels','https://media.istockphoto.com/photos/dormitory-room-in-the-modern-hostel-picture-id910999556?b=1&k=20&m=910999556&s=170667a&w=0&h=8Ppqwt74V-aaXr4vN2iu5XOv87H0nhJh64am-0bYPLc=');

INSERT INTO `proyecto_integrador`.`category` (title,description,url)
VALUES ('Departamentos','10.105 departamentos','https://media.istockphoto.com/photos/condos-brooklyn-new-york-city-usa-picture-id1250322251?b=1&k=20&m=1250322251&s=170667a&w=0&h=BtmvNOuDSP152OZoxwfSWkV7a6pwuhcoIUQD2FjaBO4=');

INSERT INTO `proyecto_integrador`.`category` (title,description,url)
VALUES ('Bed and breakfast','807.105 alojamientos','https://media.istockphoto.com/photos/french-creole-tourist-at-maison-madeleine-guesthouse-in-lousiana-picture-id1327159384?b=1&k=20&m=1327159384&s=170667a&w=0&h=iBM_z__BVTwhyvsIq5BrxyICrHxHL1vjw-AzB_lkGr0=');

INSERT INTO `proyecto_integrador`.`product` (productName,description,idCity,idCategory)
VALUES ('Hotel Savage','Para descansar cómodo',1,1);

INSERT INTO `proyecto_integrador`.`product` (productName,description,idCity,idCategory)
VALUES ('Hostel Nomade','Ideal para que tu aventura extrema incluya también el alojamiento',2,2);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen habitacion','https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFiaXRhY2lvbiUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',1);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen banio','https://media.istockphoto.com/photos/modern-toilette-design-picture-id1324940457?b=1&k=20&m=1324940457&s=170667a&w=0&h=ktk09I47eOgBpeNVAi_37BKWyg-OY0a2uY_Yv9DdvmI=',1);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen piscina','https://media.istockphoto.com/photos/tropical-empty-pool-view-with-a-steel-ladder-to-enter-the-water-of-picture-id1226554644?b=1&k=20&m=1226554644&s=170667a&w=0&h=1VQQ4KbGKH1OLKVcc2kpN_dLaSeNyTOk8d3JxFZzs10=',2);

INSERT INTO `proyecto_integrador`.`feature` (featureName,icon)
VALUES ('Piscina','fas fa-swimmer');

INSERT INTO `proyecto_integrador`.`feature` (featureName,icon)
VALUES ('Desayuno','https://fontawesome.com/v5.15/icons/coffee?style=solid');

INSERT INTO `proyecto_integrador`.`feature` (featureName,icon)
VALUES ('Wifi','https://fontawesome.com/v5.15/icons/wifi?style=solid');

INSERT INTO `proyecto_integrador`.`feature_product` (idFeature,idProduct)
VALUES (1,2);

INSERT INTO `proyecto_integrador`.`feature_product` (idFeature,idProduct)
VALUES (2,2);



