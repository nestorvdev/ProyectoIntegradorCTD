DROP DATABASE IF EXISTS `bookingApp`;
CREATE DATABASE `bookingApp`;
USE `bookingApp`;

--
-- For table structure run the appication
--

--
-- Dumping data for table `city`
--

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Buenos Aires','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Mendoza','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Corrientes','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Bariloche','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('San Juan','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Ushuaia','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Rosario','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Salta','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Jujuy','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Tafí del Valle','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Misiones','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('San Luis','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Villa General Belgrano','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Tigre','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Rio Cuarto','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Paraná','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Gualeguaychú','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Neuquén','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Bahía Blanca','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Mar del Plata','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Comodoro Rivadavia','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Río Negro','Argentina');

INSERT INTO `proyecto_integrador`.`city` (name,country)
VALUES ('Cafayate','Argentina');

--
-- Dumping data for table `category`
--

INSERT INTO `proyecto_integrador`.`category` (title,description,url)
VALUES ('Hoteles','807.105 alojamientos','https://media.istockphoto.com/photos/hotel-service-bell-concept-hotel-travel-roommodern-luxury-hotel-on-picture-id1268469291?b=1&k=20&m=1268469291&s=170667a&w=0&h=M4wvZWxG47WyUjjfaX2_fgUD7HcmkgVNhahnL3dgeRo=');

INSERT INTO `proyecto_integrador`.`category` (title,description,url)
VALUES ('Hostels','200.105 alojamientos','https://media.istockphoto.com/photos/dormitory-room-in-the-modern-hostel-picture-id910999556?b=1&k=20&m=910999556&s=170667a&w=0&h=8Ppqwt74V-aaXr4vN2iu5XOv87H0nhJh64am-0bYPLc=');

INSERT INTO `proyecto_integrador`.`category` (title,description,url)
VALUES ('Departamentos','10.105 alojamientos','https://media.istockphoto.com/photos/condos-brooklyn-new-york-city-usa-picture-id1250322251?b=1&k=20&m=1250322251&s=170667a&w=0&h=BtmvNOuDSP152OZoxwfSWkV7a6pwuhcoIUQD2FjaBO4=');

INSERT INTO `proyecto_integrador`.`category` (title,description,url)
VALUES ('Bed and breakfast','7.678 alojamientos','https://media.istockphoto.com/photos/french-creole-tourist-at-maison-madeleine-guesthouse-in-lousiana-picture-id1327159384?b=1&k=20&m=1327159384&s=170667a&w=0&h=iBM_z__BVTwhyvsIq5BrxyICrHxHL1vjw-AzB_lkGr0=');

-- Dumping data for table `product`
-- 1
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,address,qualification,reference,rules,health,politics,deleted)
VALUES ('Posada Gotan Bed & Breakfast','Te sentirás como en tu propia casa en una de las 10 habitaciones con microondas. Recorre rápida y cómodamente los principales sitios de interés de la zona gracias al servicio de traslado.',3,4,-27.46837,-58.83922,"Salta 1000, Corrientes",5,'a 3,83 km del centro','Check-out: 10:00, No se permiten fiestas, No fumar','Se aplican pautas de distanciamiento social, Detector de Humo, Depósito de seguridad','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía',false);

-- 2
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,address,qualification,reference,rules,health,politics,deleted)
VALUES ('Gran Hotel Argentino','El Gran Hotel Argentino está situado a pocos metros de la avenida 9 de Julio y a 300 metros del Obelisco, y ofrece habitaciones cómodas y fácil acceso al transporte público de Buenos Aires.',1,1,-34.60,-58.38,"Viamonte 3100, CABA",5,'a 0,5 km del centro','Check-out: 10:00, No se permiten fiestas, No fumar','Se aplican pautas de distanciamiento social, Detector de Humo, Depósito de seguridad','No reembolsable',false);

-- 3
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,address,qualification,reference,rules,health,politics,deleted)
VALUES ('Soho Suites','Ideal para estadías cortas. Soho Suites se sitúa en Buenos Aires. Ofrece wi-fi gratis en zonas comunes, servicio de guarda-equipaje gratis y toallas, así como sábanas.',1,4,-34.58,-58.44,"El Salvador 6026, CABA",5,'A 4,99 km del centro','Check-out: 10:00, No se permiten fiestas, No fumar','Se aplican pautas de distanciamiento social, Detector de Humo, Depósito de seguridad','Cancelación gratuita con 24 hs de antelación',false);

-- 4
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,address,qualification,reference,rules,health,politics,deleted)
VALUES ('Exclusivo departamento','Exclusivo departamento en la ciudad de Mendoza. La propiedad se encuentra a menos de 1 km de la avenidad Emilio Civit. El departamento cuenta con una habitación con salida al balcón y aire acondicionado',2,3,-32.89,-68.83,"Av. Gdor. Ricardo Videla 130, San José, Mendoza",5,'a 1,6 km del centro','Check-out: 10:00, No se permiten fiestas, No fumar','Se aplican pautas de distanciamiento social, Detector de Humo, Depósito de seguridad','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía',false);

-- 5
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,address,qualification,reference,rules,health,politics,deleted)
VALUES ('Don Suites','DonSuites se encuentra en el centro histórico de la ciudad, a 5 cuadras de la calle peatonal y a 20 metros de la Costanera. El DonSuites se encuentra en el centro de Corrientes, a solo 50 metros de la orilla del río Paraná. Ofrece pileta al aire libre y departamentos independientes elegantes con conexión de wifi gratis y TV de plasma. Todos los días se sirve un desayuno continental.',3,1,-34.69,-58.38,"Coronel Burela 516, Gerli, Bs As",5,'En el centro','Check-out: 10:00, No se permiten fiestas, No fumar','Se aplican pautas de distanciamiento social, Detector de Humo, Depósito de seguridad','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía',false);

-- 6
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,address,qualification,reference,rules,health,politics,deleted)
VALUES ('Departamento Mendoza','El Departamento Mendoza se encuentra en Guaymallen. Potrerillos está a 37 km.El departamento cuenta con aire acondicionado, 1 dormitorio, sala de estar, cocina totalmente equipada con microondas y hervidor de agua y 1 baño con bidet y bañera o ducha. Se proporcionan toallas y ropa de cama.',2,3,-32.88,-68.84,"Cnel. P. Plaza 240, Mendoza",5,'a 2,2 km de Guaymallén','Check-out: 10:00, No se permiten fiestas, No fumar','Se aplican pautas de distanciamiento social, Detector de Humo, Depósito de seguridad','No reembolsable',false);

-- 7
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,address,qualification,reference,rules,health,politics,deleted)
VALUES ('JAC Hostel Boutique','El JAC Hostel Boutique se encuentra en Mendoza, a 500 metros de la plaza de la Independencia, y ofrece vistas a la ciudad. La disposición y deco del hostel, super confortable y limpio. Excelente atención de todos los chicos de recepción.',2,2,-32.88,-68.83,"Juan B. Alberdi 460, Mendoza",5,'a 0.5 km del centro','Check-out: 10:00, No se permiten fiestas, No fumar','Se aplican pautas de distanciamiento social, Detector de Humo, Depósito de seguridad','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía',false);

-- 8
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,address,qualification,reference,rules,health,politics,deleted)
VALUES ('Che Juan Hostel BA','El Che Juan Hostel BA ofrece habitaciones con aire acondicionado y TV de pantalla plana por cable en el centro de Buenos Aires. El precio es igual que otros pero la calidad es imbatible, no solo en la comodidad de las camas con armario propio externo e interno, luces y cortinas, sino que toda la edificación está diseñada con excelencia para ser realmente un ejemplo a seguir para todos los hostel del mundo.',1,2,-34.60189,-58.37360,"Lavalle 1040, CABA",5,'a 0.2 km del centro','Check-out: 10:00, No se permiten fiestas, No fumar','Se aplican pautas de distanciamiento social, Detector de Humo, Depósito de seguridad','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía',false);

-- 9

INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,address,qualification,reference,rules,health,politics,deleted)
VALUES ('Art Factory Soho','Art Factory Soho está localizado en Buenos Aires. Dispone de wi-fi gratis en zonas comunes, campo de golf y recepción 24 hrs, además de servicio de guarda-equipaje gratis.El alojamiento ofrece todos los días el desayuno con costo adicional. Los huéspedes podrán cocinar en la comodidad de su alojamiento,en su cocina compartida.',1,2,-34.58240,-58.42463,"Charcas 1425, CABA",5,'a 4,68 km del centro','Check in: de 15:00 a 00:00','Detector de Humo, Alcohol en gel en áreas comunes','A partir del 01/03/2020, se cobrara una tasa por noche por persona, en el momento del check-in, a todos los turistas no residentes en la Republica Argentina mayores de 12 anos.',false);

-- 10

INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,address,qualification,reference,rules,health,politics,deleted)
VALUES ('Ker Recoleta','Ubicado entre el barrio de la Recoleta y el centro de Buenos Aires, el Ker Recoleta Hotel cuenta con spa con hidromasaje, ducha escocesa y sauna seco a los huéspedes.Se encuentra a 5 cuadras del Teatro Colón y a 5 min del cementerio de Recoleta',1,1,-34.59694,-58.38654,"Marcelo Torcuato de Alvear 1061, CABA",5,'a 1,02 km del centro','Check in: de 15:00 a 00:00','Mampara de protección en recepción, Servicio de comida a la habitación','COVID-19 - Debido a la situación actual los siguientes servicios se verán parcialmente afectados: Restaurante, Desayuno, Bar',false);

-- 11

INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,address,qualification,reference,rules,health,politics,deleted)
VALUES ('Torre Costanera Norte','El Torre Costanera Norte se encuentra en Corrientes y ofrece alojamiento con aire acondicionado, conexión WiFi gratuita y acceso a una terraza. Hay microondas, nevera, horno y hervidor de agua.',3,4,-27.45765,-58.82425,"Gdor. Lopez 35, Corrientes",5,'a 2,04 km del centro','No se puede fumar','Mampara de protección en recepción, Servicio de comida a la habitación','Las condiciones de pago y de cancelación varían según el tipo de apartamento',false);


-- 12
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,address,qualification,reference,rules,health,politics,deleted)
VALUES ('La Alondra','La Alondra ofrece un jardín con piscina, un gimnasio, un restaurante y alojamientos con conexión Wi-Fi gratuita en Corrientes. La calle peatonal Junín se encuentra a 5 minutos en coche.',3,3,-27.47492,-58.84080,"Av. 3 de Abril 809, Corrientes",5,'a 5,03 km del centro','No se puede fumar, No se admiten mascotas','Servicio de comida a la habitación','Las condiciones de pago y de cancelación varían según el tipo de apartamento',false);


--
-- Dumping data for table `score`
--

INSERT INTO `proyecto_integrador`.`score` (idUser,score,idProduct)
VALUES (1,5,1);

INSERT INTO `proyecto_integrador`.`score` (idUser,score,idProduct)
VALUES (1,4,2);

INSERT INTO `proyecto_integrador`.`score` (idUser,score,idProduct)
VALUES (1,3,3);

INSERT INTO `proyecto_integrador`.`score` (idUser,score,idProduct)
VALUES (1,2,4);

INSERT INTO `proyecto_integrador`.`score` (idUser,score,idProduct)
VALUES (1,1,5);

INSERT INTO `proyecto_integrador`.`score` (idUser,score,idProduct)
VALUES (1,5,6);

INSERT INTO `proyecto_integrador`.`score` (idUser,score,idProduct)
VALUES (1,4,7);

INSERT INTO `proyecto_integrador`.`score` (idUser,score,idProduct)
VALUES (1,3,8);

INSERT INTO `proyecto_integrador`.`score` (idUser,score,idProduct)
VALUES (1,2,9);

INSERT INTO `proyecto_integrador`.`score` (idUser,score,idProduct)
VALUES (1,1,10);

INSERT INTO `proyecto_integrador`.`score` (idUser,score,idProduct)
VALUES (1,5,11);

INSERT INTO `proyecto_integrador`.`score` (idUser,score,idProduct)
VALUES (1,4,12);

--
-- Dumping data for table `image`
--

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen habitacion','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto1.jpg',1);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen banio','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto2.jpg',1);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen cocina ','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto3.jpg',1);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen jardin','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto4.jpg',1);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen habitacion','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto5.jpg',1);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 2-1','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto6.jpg',2);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 2-2','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto7.jpg',2);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 2-3','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto8.jpg',2);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 2-4','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto9.jpg',2);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen piscina','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto10.jpg',2);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 3-1','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto11.jpg',3);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 3-2','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto12.jpg',3);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 3-3','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto13.jpg',3);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 3-4','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto14.jpg',3);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 3-5','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto15.jpg',3);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 4-1','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto16.jpg',4);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 4-2','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto17.jpg',4);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 4-3','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto18.jpg',4);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 4-4','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto19.jpg',4);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 4-5','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto20.jpg',4);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 5-1','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto21.jpg',5);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 5-2','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto22.jpg',5);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 5-3','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto23.jpg',5);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 5-4','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto24.jpg',5);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 5-5','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto25.jpg',5);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 6-1','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto26.jpg',6);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 6-2','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto27.jpg',6);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 6-3','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto28.jpg',6);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 6-4','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto29.jpg',6);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 6-5','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto30.jpg',6);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 7-1','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto31.jpg',7);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 7-2','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto32.jpg',7);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 7-3','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto33.jpg',7);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 7-4','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto34.jpg',7);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 7-5','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto35.jpg',7);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 8-1','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto36.jpg',8);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 8-2','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto37.jpg',8);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 8-3','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto38.jpg',8);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 8-4','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto39.jpg',8);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 8-5','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto40.jpg',8);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 9-1','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto41.jpg',9);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 9-2','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto42.jpg',9);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 9-3','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto43.jpg',9);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 9-4','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto44.jpg',9);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 9-5','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto45.jpg',9);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 10-1','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto46.jpg',10);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 10-2','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto47.jpg',10);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 10-3','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto48.jpg',10);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 10-4','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto49.jpg',10);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 10-5','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto50.jpg',10);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 11-1','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto51.jpg',11);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 11-2','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto52.jpg',11);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 11-3','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto53.jpg',11);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 11-4','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto54.jpg',11);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 11-5','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto55.jpg',11);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 12-1','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto56.jpg',12);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 12-2','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto57.jpg',12);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 12-3','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto58.jpg',12);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 12-4','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto59.jpg',12);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 12-5','https://proyecto-integrador-bucket.s3.amazonaws.com/images-products/producto60.jpg',12);


--
-- Dumping data for table `feature`
--



INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('wifi',0);
INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('pileta',1);
INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('cocina',2);
INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('televisor',3);
INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('aire acondicionado',4);
INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('apto mascotas',5);
INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('estacionamiento gratuito',6);
INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('acepta tarjeta',7);
INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('espacio fumadores',8);
INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('prohibido fiestas',9);
INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('check in online',10);
INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('prohibido fumar',11);




--
-- Dumping data for table `featurePerProduct`
--


INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (1,1);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (2,1);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (1,2);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (2,2);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (3,2);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (4,2);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (5,2);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (7,2);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (11,2);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (1,10);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (1,11);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (1,12);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (3,3);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (4,8);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (4,11);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (2,12);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (1,3);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (1,4);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (1,5);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (8,6);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (1,7);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (1,8);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (1,9);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (2,5);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (3,5);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (4,5);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (5,5);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (6,5);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (5,6);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (8,11);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (6,9);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (3,10);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (11,7);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (11,8);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (7,10);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (7,1);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (8,1);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (8,4);

INSERT INTO `proyecto_integrador`.`featurePerProduct` (idFeature,idProduct)
VALUES (11,11);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2021-12-25','2021-12-19',3,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2021-12-30','2021-12-28',3,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2022-01-30','2022-01-20',3,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2021-12-18','2021-12-15',2,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2022-01-15','2022-01-10',2,1);


INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2021-12-18','2021-12-15',1,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2022-01-15','2022-01-10',1,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2021-12-03','2021-12-01',4,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2022-01-03','2022-01-01',4,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2021-12-09','2021-12-07',5,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2022-01-15','2022-01-13',5,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2021-12-31','2021-12-30',6,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2021-11-30','2021-11-28',6,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2021-12-03','2021-11-30',7,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2022-01-02','2021-12-31',7,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2021-12-18','2021-12-15',8,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2022-01-15','2022-01-10',8,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2021-12-01','2021-11-28',9,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2021-12-15','2021-12-10',9,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2021-12-18','2021-12-15',10,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2021-12-01','2021-11-29',10,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2021-12-22','2021-12-20',11,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2021-12-03','2021-11-30',11,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2021-12-18','2021-12-15',12,1);

INSERT INTO `proyecto_integrador`.`reservation`(arrivalSchedule, endDate, startDate,idProduct,idUser)
VALUES ('10:00 AM','2021-12-25','2021-12-23',12,1);

