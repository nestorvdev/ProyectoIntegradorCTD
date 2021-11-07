DROP DATABASE IF EXISTS `proyecto_integrador`; 
CREATE DATABASE `proyecto_integrador`;
USE `proyecto_integrador`;

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
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,qualification,favourite,reference,rules,health,politics)
VALUES ('Posada Gotan Bed & Breakfast','A poca distancia de El Ateneo Grand Splendid.Te sentirás como en tu propia casa en una de las 10 habitaciones con microondas. Recorre rápida y cómodamente los principales sitios de interés de la zona gracias al servicio de traslado.',3,4,-34.62,-58.41,5,false,'a 3,83 km del centro','Check-out: 10:00, No se permiten fiestas, No fumar','Se aplican pautas de distanciamiento social, Detector de Humo, Depósito de seguridad','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía');

-- 2
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,qualification,favourite,reference,rules,health,politics)
VALUES ('Gran Hotel Argentino','El Gran Hotel Argentino está situado a pocos metros de la avenida 9 de Julio y a 300 metros del Obelisco, y ofrece habitaciones cómodas y fácil acceso al transporte público de Buenos Aires.',1,1,-34.60,-58.38,8,false,'a 0,5 km del centro','Check-out: 10:00, No se permiten fiestas, No fumar','Se aplican pautas de distanciamiento social, Detector de Humo, Depósito de seguridad','No reembolsable');

-- 3
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,qualification,favourite,reference,rules,health,politics)
VALUES ('Soho Suites','Ideal para estadías cortas. Soho Suites se sitúa en Buenos Aires. Ofrece wi-fi gratis en zonas comunes, servicio de guarda-equipaje gratis y toallas, así como sábanas.',1,4,-34.58,-58.44,9,false,'A 4,99 km del centro','Check-out: 10:00, No se permiten fiestas, No fumar','Se aplican pautas de distanciamiento social, Detector de Humo, Depósito de seguridad','Cancelación gratuita con 24 hs de antelación');

-- 4
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,qualification,favourite,reference,rules,health,politics)
VALUES ('Exclusivo departamento','Exclusivo departamento en la ciudad de Mendoza. La propiedad se encuentra a menos de 1 km de la avenidad Emilio Civit. El departamento cuenta con una habitación con salida al balcón y aire acondicionado',2,3,-32.89,-68.83,7,false,'a 1,6 km del centro','Check-out: 10:00, No se permiten fiestas, No fumar','Se aplican pautas de distanciamiento social, Detector de Humo, Depósito de seguridad','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía');

-- 5
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,qualification,favourite,reference,rules,health,politics)
VALUES ('Don Suites','DonSuites se encuentra en el centro histórico de la ciudad, a 5 cuadras de la calle peatonal y a 20 metros de la Costanera. El DonSuites se encuentra en el centro de Corrientes, a solo 50 metros de la orilla del río Paraná. Ofrece pileta al aire libre y departamentos independientes elegantes con conexión de wifi gratis y TV de plasma. Todos los días se sirve un desayuno continental.',3,1,-34.69,-58.38,10,false,'En el centro','Check-out: 10:00, No se permiten fiestas, No fumar','Se aplican pautas de distanciamiento social, Detector de Humo, Depósito de seguridad','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía');

-- 6
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,qualification,favourite,reference,rules,health,politics)
VALUES ('Departamento Mendoza','El Departamento Mendoza se encuentra en Guaymallen. Potrerillos está a 37 km.El departamento cuenta con aire acondicionado, 1 dormitorio, sala de estar, cocina totalmente equipada con microondas y hervidor de agua y 1 baño con bidet y bañera o ducha. Se proporcionan toallas y ropa de cama.',2,3,-32.88,-68.84,8,false,'a 2,2 km de Guaymallén','Check-out: 10:00, No se permiten fiestas, No fumar','Se aplican pautas de distanciamiento social, Detector de Humo, Depósito de seguridad','No reembolsable');

-- 7
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,qualification,favourite,reference,rules,health,politics)
VALUES ('JAC Hostel Boutique','El JAC Hostel Boutique se encuentra en Mendoza, a 500 metros de la plaza de la Independencia, y ofrece vistas a la ciudad. La disposición y deco del hostel, super confortable y limpio. Excelente atención de todos los chicos de recepción.',2,2,-32.88,-68.83,6,false,'a 0.5 km del centro','Check-out: 10:00, No se permiten fiestas, No fumar','Se aplican pautas de distanciamiento social, Detector de Humo, Depósito de seguridad','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía');

-- 8
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,qualification,favourite,reference,rules,health,politics)
VALUES ('Che Juan Hostel BA','El Che Juan Hostel BA ofrece habitaciones con aire acondicionado y TV de pantalla plana por cable en el centro de Buenos Aires. El precio es igual que otros pero la calidad es imbatible, no solo en la comodidad de las camas con armario propio externo e interno, luces y cortinas, sino que toda la edificación está diseñada con excelencia para ser realmente un ejemplo a seguir para todos los hostel del mundo.',1,2,-34.60189,-58.37360,10,false,'a 0.2 km del centro','Check-out: 10:00, No se permiten fiestas, No fumar','Se aplican pautas de distanciamiento social, Detector de Humo, Depósito de seguridad','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía');

-- 9

INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,qualification,favourite,reference,rules,health,politics)
VALUES ('Art Factory Soho','Art Factory Soho está localizado en Buenos Aires. Dispone de wi-fi gratis en zonas comunes, campo de golf y recepción 24 hrs, además de servicio de guarda-equipaje gratis.El alojamiento ofrece todos los días el desayuno con costo adicional. Los huéspedes podrán cocinar en la comodidad de su alojamiento,en su cocina compartida.',1,2,-34.58240,-58.42463,10,false,'a 4,68 km del centro','Check in: de 15:00 a 00:00','Detector de Humo, Alcohol en gel en áreas comunes','A partir del 01/03/2020, se cobrara una tasa por noche por persona, en el momento del check-in, a todos los turistas no residentes en la Republica Argentina mayores de 12 anos.');

-- 10

INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,qualification,favourite,reference,rules,health,politics)
VALUES ('Ker Recoleta','Ubicado entre el barrio de la Recoleta y el centro de Buenos Aires, el Ker Recoleta Hotel cuenta con spa con hidromasaje, ducha escocesa y sauna seco a los huéspedes.Se encuentra a 5 cuadras del Teatro Colón y a 5 min del cementerio de Recoleta',1,1,-34.59694,-58.38654,10,false,'a 1,02 km del centro','Check in: de 15:00 a 00:00','Mampara de protección en recepción, Servicio de comida a la habitación','COVID-19 - Debido a la situación actual los siguientes servicios se verán parcialmente afectados: Restaurante, Desayuno, Bar');

-- 11

INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,qualification,favourite,reference,rules,health,politics)
VALUES ('Torre Costanera Norte','El Torre Costanera Norte se encuentra en Corrientes y ofrece alojamiento con aire acondicionado, conexión WiFi gratuita y acceso a una terraza. Hay microondas, nevera, horno y hervidor de agua.',3,4,-27.45765,-58.82425,8,false,'a 2,04 km del centro','No se puede fumar','Mampara de protección en recepción, Servicio de comida a la habitación','Las condiciones de pago y de cancelación varían según el tipo de apartamento');


-- 12
INSERT INTO `proyecto_integrador`.`product` (name,description,idCity,idCategory,latitude,longitude,qualification,favourite,reference,rules,health,politics)
VALUES ('La Alondra','La Alondra ofrece un jardín con piscina, un gimnasio, un restaurante y alojamientos con conexión Wi-Fi gratuita en Corrientes. La calle peatonal Junín se encuentra a 5 minutos en coche.',3,3,-27.47492,-58.84080,9,false,'a 5,03 km del centro','No se puede fumar, No se admiten mascotas','Servicio de comida a la habitación','Las condiciones de pago y de cancelación varían según el tipo de apartamento');


--
-- Dumping data for table `image`
--

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen habitacion','https://media.istockphoto.com/photos/modern-toilette-design-picture-id1324940457?b=1&k=20&m=1324940457&s=170667a&w=0&h=ktk09I47eOgBpeNVAi_37BKWyg-OY0a2uY_Yv9DdvmI=',1);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen banio','https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFiaXRhY2lvbiUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',1);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen cocina ','https://images.unsplash.com/photo-1629025761671-77f9131c91ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29jaW5hfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',1);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen jardin','https://media.istockphoto.com/photos/back-and-front-yard-english-cottage-garden-smooth-green-grass-lawn-picture-id1310272850?b=1&k=20&m=1310272850&s=170667a&w=0&h=ySiYZ4CMVpy8owTBvZ5JsY-7s50ykjTOUr9nyzmICfY=',1);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen habitacion','https://media.istockphoto.com/photos/interior-of-guest-room-in-bed-and-breakfast-hotel-picture-id1167591985?b=1&k=20&m=1167591985&s=170667a&w=0&h=DWE0VFw-u8p36toiszpA06VHnK_5stCymit6LQNl7Ps=',1);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 2-1','https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',2);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 2-2','https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',2);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 2-3','https://images.unsplash.com/photo-1495754149474-e54c07932677?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',2);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 2-4','https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',2);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen piscina','https://media.istockphoto.com/photos/tropical-empty-pool-view-with-a-steel-ladder-to-enter-the-water-of-picture-id1226554644?b=1&k=20&m=1226554644&s=170667a&w=0&h=1VQQ4KbGKH1OLKVcc2kpN_dLaSeNyTOk8d3JxFZzs10=',2);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 3-1','https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',3);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 3-2','https://images.unsplash.com/photo-1576354302919-96748cb8299e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',3);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 3-3','https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',3);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 3-4','https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',3);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 3-5','https://images.unsplash.com/photo-1583522862857-bd9f6d34a236?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',3);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 4-1','https://media.istockphoto.com/photos/exterior-view-of-modern-apartment-building-picture-id1273552068?b=1&k=20&m=1273552068&s=170667a&w=0&h=WoG5kV_-mTtMerse0mFdODpzq5HBjhlqsF0TqBMHPhg=',4);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 4-2','https://media.istockphoto.com/photos/digitally-generated-domestic-bedroom-interior-picture-id1266344101?b=1&k=20&m=1266344101&s=170667a&w=0&h=_mEuZIgaXh1cRjzlrGybXRoCfGqKLvPiL1EP0LGOG2o=',4);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 4-3','https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',4);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 4-4','https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',4);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 4-5','https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',4);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 5-1','https://images.unsplash.com/photo-1523699289804-55347c09047d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',5);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 5-2','https://images.unsplash.com/photo-1597308011529-f634f4cab827?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxob3RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',5);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 5-3','https://images.unsplash.com/photo-1567197427669-a0d3603a3586?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEyfHxob3RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',5);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 5-4','https://images.unsplash.com/photo-1534600913328-441f6abb4e2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ1fHxob3RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',5);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 5-5','https://images.unsplash.com/photo-1527986654082-0b5b3fef2632?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUwfHxob3RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',5);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 6-1','https://images.unsplash.com/photo-1512918580421-b2feee3b85a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFwYXJ0YW1lbnQlMjBiZWRyb29tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',6);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 6-2','https://media.istockphoto.com/photos/modern-gray-brown-neutral-kitchen-features-front-cabinets-with-and-picture-id915768900?b=1&k=20&m=915768900&s=170667a&w=0&h=pe5Jv4Yr50Vuv4zZ0mVycLtihgD4bvFKE9ru_m-PBw0=',6);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 6-3','https://media.istockphoto.com/photos/modern-bathroom-interior-stock-photo-picture-id1291917591?b=1&k=20&m=1291917591&s=170667a&w=0&h=YMZgTCdZ4TZCZCMbr6yjcFUJ0JxFeQmtWagi7WdFAio=',6);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 6-4','https://media.istockphoto.com/photos/elegant-decorated-balcony-picture-id1185723502?b=1&k=20&m=1185723502&s=170667a&w=0&h=ND_C2PFhzrrN6zTY2P_03lvpBoXcbTxB-69vdUX004A=',6);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 6-5','https://images.unsplash.com/photo-1614622350812-96b09c78af77?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50JTIwbGl2aW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',6);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 7-1','https://media.istockphoto.com/photos/fragment-of-the-interior-of-a-bedroom-with-a-large-double-bed-and-a-picture-id1306218397?b=1&k=20&m=1306218397&s=170667a&w=0&h=Q6n20TZ9DhWR_YgYhrNhIr9nyRzsgDjdw1fTG5Dvx54=',7);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 7-2','https://images.unsplash.com/photo-1623625434462-e5e42318ae49?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9zdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',7);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 7-3','https://images.unsplash.com/photo-1590856029620-9b5a4825d3be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',7);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 7-4','https://images.unsplash.com/photo-1616749311500-f20355ae6854?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvc3RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',7);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 7-5','https://images.unsplash.com/photo-1596431749951-1bbb4e396436?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvc3RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',7);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 8-1','https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9zdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',8);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 8-2','https://media.istockphoto.com/photos/dormitory-room-in-the-modern-hostel-picture-id910999556?b=1&k=20&m=910999556&s=170667a&w=0&h=8Ppqwt74V-aaXr4vN2iu5XOv87H0nhJh64am-0bYPLc=',8);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 8-3','https://media.istockphoto.com/photos/young-backpackers-in-hostel-picture-id1045047954?b=1&k=20&m=1045047954&s=170667a&w=0&h=TboLCg1PJ5pqPk2hHlBhgPc-c2a4S_0iCZEdMLRvKG8=',8);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 8-4','https://media.istockphoto.com/photos/building-with-hostel-sign-good-place-for-college-life-students-picture-id1254374019?b=1&k=20&m=1254374019&s=170667a&w=0&h=MH5KgvkcxWgXpGAvhfGxPO6VrVC6kRm_vJwsuEYMTEA=',8);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 8-5','https://images.unsplash.com/photo-1595411179241-e94b2554e4c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9zdGVsJTIwcmVjZXB0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',8);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 9-1','https://media.istockphoto.com/photos/young-backpackers-in-hostel-picture-id1045047954?b=1&k=20&m=1045047954&s=170667a&w=0&h=TboLCg1PJ5pqPk2hHlBhgPc-c2a4S_0iCZEdMLRvKG8=',9);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 9-2','https://images.unsplash.com/photo-1596276020587-8044fe049813?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9zdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',9);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 9-3','https://images.unsplash.com/photo-1629794226066-349748040fb7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG9zdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',9);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 9-4','https://images.unsplash.com/photo-1626265774643-f1943311a86b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvc3RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',9);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 9-5','https://images.unsplash.com/photo-1565629196891-2ddb37c9e9fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvc3RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',9);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 10-1','https://media.istockphoto.com/photos/luxury-hotel-lobby-with-smart-robots-working-as-a-receptionist-and-picture-id1298838328?b=1&k=20&m=1298838328&s=170667a&w=0&h=AkVWfkqsvZfQAfQZkNdPfO69rMHFqh78ZrSEujr20Yg=',10);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 10-2','https://media.istockphoto.com/photos/full-furnished-living-room-of-an-apartment-picture-id1288806002?b=1&k=20&m=1288806002&s=170667a&w=0&h=k5aI4TTJIImNZ0T2eCOd0ZVx-mJjaRgvvcz4DaZMlkw=',10);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 10-3','https://media.istockphoto.com/photos/interior-of-a-modern-luxury-hotel-double-bed-bedroom-picture-id1163498940?b=1&k=20&m=1163498940&s=170667a&w=0&h=5TRSRlxZVnU_hVpPTjcbok7xg8Zrl4gmntmkyuAKVSM=',10);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 10-4','https://images.unsplash.com/photo-1563493653502-9e270be23596?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBwb29sfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',10);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 10-5','https://images.unsplash.com/photo-1633767319640-d8f5b923aa42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwcGFya2luZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',10);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 11-1','https://media.istockphoto.com/photos/apartment-building-picture-id486644087?b=1&k=20&m=486644087&s=170667a&w=0&h=bEr9eZSg5gA0SmIkfECwqw1UjclNkk03PmJBAPkdamo=',11);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 11-2','https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',11);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 11-3','https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',11);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 11-4','https://images.unsplash.com/photo-1600776216872-b39b2a3dd995?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFwYXJ0bWVudCUyMGJhbGNvbnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',11);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 11-5','https://images.unsplash.com/photo-1507149833265-60c372daea22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',11);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 12-1','https://media.istockphoto.com/photos/3d-rendering-of-kitchen-island-with-stools-in-cottage-picture-id1270113395?b=1&k=20&m=1270113395&s=170667a&w=0&h=1TFDpGEdSFfXJ-oqHZOcZWhr0gkv1SqcmI7rgenGh3c=',12);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 12-2','https://media.istockphoto.com/photos/cute-cottage-home-picture-id175388045?b=1&k=20&m=175388045&s=170667a&w=0&h=JGr_pTsa_X74SxEvye72r40JlGHt4zEp_l4hedrcQjI=',12);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 12-3','https://images.unsplash.com/photo-1593184091721-409ccc1753d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y290dGFnZSUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',12);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 12-4','https://media.istockphoto.com/photos/weekend-away-with-friends-picture-id538776816?b=1&k=20&m=538776816&s=170667a&w=0&h=gEsmoXvBlVxPPY_yuz_zJ9OCfcK971WpS3xzSj_dtSM=',12);

INSERT INTO `proyecto_integrador`.`image` (title,url,idProduct)
VALUES ('imagen alojamiento 12-5','https://media.istockphoto.com/photos/breakfast-with-fresh-tea-fruits-and-cookies-outdoors-on-a-cozy-of-picture-id1268301562?b=1&k=20&m=1268301562&s=170667a&w=0&h=RHkcmKUBqBqF7v3RDkou8B_ZYJhNhOr9EaYZlRU-daM=',12);


--
-- Dumping data for table `feature`
--

INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('wifi',0);
INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('pool',1);
INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('kitchen',2);
INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('tv',3);
INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('ac',4);
INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('pet',5);
INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('parking',6);
INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('creditCard',7);
INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('smoke',8);
INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('noParty',9);
INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('checkIn',10);
INSERT INTO `proyecto_integrador`.`feature` (title,type)
VALUES ('noSmoke',11);


--
-- Dumping data for table `featurePerProduct` --
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