DROP DATABASE IF EXISTS `proyecto_integrador`; 
CREATE DATABASE `proyecto_integrador`;
USE `proyecto_integrador`;

CREATE SCHEMA IF NOT EXISTS `proyecto_integrador`;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `proyecto_integrador`.`city`;

CREATE TABLE `proyecto_integrador`.`city` (
  `idCity` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  PRIMARY KEY (`idCity`)
  )ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `proyecto_integrador`.`category`;

CREATE TABLE `proyecto_integrador`.`category` (
  `idCategory` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `url` varchar(500) NOT NULL,
  PRIMARY KEY (`idCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `feature`
--

DROP TABLE IF EXISTS `proyecto_integrador`.`feature`;

CREATE TABLE `proyecto_integrador`.`feature` (
  `idFeature` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `icon` varchar(200) NOT NULL,
  `state` boolean NOT NULL,
  PRIMARY KEY (`idFeature`)
  )ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `proyecto_integrador`.`product`;

 CREATE TABLE `proyecto_integrador`.`product` (
  `idProduct` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(200) NOT NULL,
  `idCity` int NOT NULL,
  `idCategory` int NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `qualification` double NOT NULL,
  `favourite` boolean NOT NULL,
  `reference` VARCHAR(100), 
  PRIMARY KEY (`idProduct`),
  KEY `IdCity_idx` (`idCity`),
  CONSTRAINT `idCity` FOREIGN KEY (`idCity`) REFERENCES `city` (`idCity`),
  KEY `IdCategory_idx` (`idCategory`),
  CONSTRAINT `IdCategory` FOREIGN KEY (`IdCategory`) REFERENCES `category` (`IdCategory`)
  )ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `featureperproduct`
--

DROP TABLE IF EXISTS `proyecto_integrador`.`featureperproduct`;

CREATE TABLE `proyecto_integrador`.`featureperproduct` (
  `idFeatureProduct` int AUTO_INCREMENT NOT NULL,
  `idFeature` int DEFAULT NULL,
  `idProduct` int DEFAULT NULL,
  PRIMARY KEY (`idFeatureProduct`),
  KEY `Feature_idx` (`idFeature`),
  KEY `Product_idx` (`idProduct`),
  CONSTRAINT `feature.name` FOREIGN KEY (`idFeature`) REFERENCES `feature` (`idFeature`),
  CONSTRAINT `product.name` FOREIGN KEY (`idProduct`) REFERENCES `product` (`idProduct`)
  )ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `image`
--

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

--
-- Dumping data for table `city`
--

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Buenos Aires','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Mendoza','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Corrientes','Argentina');

--
-- Dumping data for table `category`
--

INSERT INTO `proyecto_integrador`.`category` (title,description,url)
VALUES ('Hoteles','807.105 hoteles','https://media.istockphoto.com/photos/hotel-service-bell-concept-hotel-travel-roommodern-luxury-hotel-on-picture-id1268469291?b=1&k=20&m=1268469291&s=170667a&w=0&h=M4wvZWxG47WyUjjfaX2_fgUD7HcmkgVNhahnL3dgeRo=');

INSERT INTO `proyecto_integrador`.`category` (title,description,url)
VALUES ('Hostels','200.105 hostels','https://media.istockphoto.com/photos/dormitory-room-in-the-modern-hostel-picture-id910999556?b=1&k=20&m=910999556&s=170667a&w=0&h=8Ppqwt74V-aaXr4vN2iu5XOv87H0nhJh64am-0bYPLc=');

INSERT INTO `proyecto_integrador`.`category` (title,description,url)
VALUES ('Departamentos','10.105 departamentos','https://media.istockphoto.com/photos/condos-brooklyn-new-york-city-usa-picture-id1250322251?b=1&k=20&m=1250322251&s=170667a&w=0&h=BtmvNOuDSP152OZoxwfSWkV7a6pwuhcoIUQD2FjaBO4=');

INSERT INTO `proyecto_integrador`.`category` (title,description,url)
VALUES ('Bed and breakfast','807.105 alojamientos','https://media.istockphoto.com/photos/french-creole-tourist-at-maison-madeleine-guesthouse-in-lousiana-picture-id1327159384?b=1&k=20&m=1327159384&s=170667a&w=0&h=iBM_z__BVTwhyvsIq5BrxyICrHxHL1vjw-AzB_lkGr0=');

-- Dumping data for table `product`
-- 1
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,qualification,favourite,reference)
VALUES ('Posada Gotan Bed & Breakfast','A poca distancia de El Ateneo Grand Splendid.Te sentirás como en tu propia casa en una de las 10 habitaciones con microondas. Recorre rápida y cómodamente los principales sitios de interés de la zona gracias al servicio de traslado.',3,4,123.45,456.34,5,false,'a 3,83 km del centro');

-- 2
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,qualification,favourite,reference)
VALUES ('Gran Hotel Argentino','El Gran Hotel Argentino está situado a pocos metros de la avenida 9 de Julio y a 300 metros del Obelisco, y ofrece habitaciones cómodas y fácil acceso al transporte público de Buenos Aires.',1,1,123.45,456.34,8,false,'a 0,5 km del centro');

-- 3
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,qualification,favourite,reference)
VALUES ('Soho Suites','Ideal para estadías cortas. Soho Suites se sitúa en Buenos Aires. Ofrece wi-fi gratis en zonas comunes, servicio de guarda-equipaje gratis y toallas, así como sábanas.',1,4,123.45,456.34,9,false,'A 4,99 km del centro');

-- 4
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,qualification,favourite,reference)
VALUES ('Exclusivo departamento','Exclusivo departamento en la ciudad de Mendoza. La propiedad se encuentra a menos de 1 km de la avenidad Emilio Civit. El departamento cuenta con una habitación con salida al balcón y aire acondicionado',2,3,123.45,456.34,7,false,'a 1,6 km del centro');

-- 5
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,qualification,favourite,reference)
VALUES ('Don Suites','DonSuites se encuentra en el centro histórico de la ciudad, a 5 cuadras de la calle peatonal y a 20 metros de la Costanera. El DonSuites se encuentra en el centro de Corrientes, a solo 50 metros de la orilla del río Paraná. Ofrece pileta al aire libre y departamentos independientes elegantes con conexión de wifi gratis y TV de plasma. Todos los días se sirve un desayuno continental.',3,1,123.45,456.34,10,false,'En el centro');

-- 6
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,qualification,favourite,reference)
VALUES ('Departamento Mendoza','El Departamento Mendoza se encuentra en Guaymallen. Potrerillos está a 37 km.El departamento cuenta con aire acondicionado, 1 dormitorio, sala de estar, cocina totalmente equipada con microondas y hervidor de agua y 1 baño con bidet y bañera o ducha. Se proporcionan toallas y ropa de cama.',2,3,123.45,456.34,8,false,'a 2,2 km de Guaymallén');

-- 7
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,qualification,favourite,reference)
VALUES ('JAC Hostel Boutique','El JAC Hostel Boutique se encuentra en Mendoza, a 500 metros de la plaza de la Independencia, y ofrece vistas a la ciudad. La disposición y deco del hostel, super confortable y limpio. Excelente atención de todos los chicos de recepción.',2,2,123.45,456.34,6,false,'a 0.5 km del centro');

-- 8
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,qualification,favourite,reference)
VALUES ('Che Juan Hostel BA','El Che Juan Hostel BA ofrece habitaciones con aire acondicionado y TV de pantalla plana por cable en el centro de Buenos Aires. El precio es igual que otros pero la calidad es imbatible, no solo en la comodidad de las camas con armario propio externo e interno, luces y cortinas, sino que toda la edificación está diseñada con excelencia para ser realmente un ejemplo a seguir para todos los hostel del mundo.',1,2,123.45,456.34,10,false,'a 0.2 km del centro');

--
-- Dumping data for table `image`
-- 

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen habitacion','https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFiaXRhY2lvbiUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',1);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen banio','https://media.istockphoto.com/photos/modern-toilette-design-picture-id1324940457?b=1&k=20&m=1324940457&s=170667a&w=0&h=ktk09I47eOgBpeNVAi_37BKWyg-OY0a2uY_Yv9DdvmI=',1);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen piscina','https://media.istockphoto.com/photos/tropical-empty-pool-view-with-a-steel-ladder-to-enter-the-water-of-picture-id1226554644?b=1&k=20&m=1226554644&s=170667a&w=0&h=1VQQ4KbGKH1OLKVcc2kpN_dLaSeNyTOk8d3JxFZzs10=',2);

--
-- Dumping data for table `feature`
--

INSERT INTO `proyecto_integrador`.`feature` (name,icon,state)
VALUES ('Piscina','fas fa-swimmer',true);

INSERT INTO `proyecto_integrador`.`feature` (name,icon,state)
VALUES ('Desayuno','https://fontawesome.com/v5.15/icons/coffee?style=solid',false);

INSERT INTO `proyecto_integrador`.`feature` (name,icon,state)
VALUES ('Wifi','https://fontawesome.com/v5.15/icons/wifi?style=solid',true);

--
-- Dumping data for table `featureperproduct`
--

INSERT INTO `proyecto_integrador`.`featureperproduct` (idFeature,idProduct)
VALUES (1,2);

INSERT INTO `proyecto_integrador`.`featureperproduct` (idFeature,idProduct)
VALUES (2,2);

SELECT * FROM product;
SELECT * FROM image;
SELECT * FROM city;
SELECT * FROM category;
SELECT * FROM feature;