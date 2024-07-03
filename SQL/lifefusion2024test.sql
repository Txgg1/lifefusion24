-- SQL Dump - Database lifefusion2024test --

/*
    --- Base de données SQL de test pour l'application LifeFusion ---

    * Description:

      Cette base de données gère les informations nécessaires pour tester l'application LifeFusion,
      elle permet aux utilisateurs de partager des biens immobiliers entre agences partenaires,
      de gérer des affiliations et des collaborations, et de rechercher des biens immobiliers
      en fonction de critères spécifiques.

    * Tables:

      affiliations_des_agences : Gère les affiliations des utilisateurs avec des agences immobilières.
      annonces_immobilieres : Stocke les annonces de biens immobiliers.
      codes_de_collaboration : Contient les codes de collaboration pour les utilisateurs.
      criteres_de_recherche : Garde les critères de recherche des utilisateurs.
      favoris : Gère les favoris des utilisateurs pour les annonces immobilières.
      images_des_annonces : Stocke les images associées aux annonces immobilières.
      images_des_utilisateurs : Stocke les images des utilisateurs.
      localisation : Contient les informations de localisation des biens immobiliers.
      typologies : Décrit les typologies des biens immobiliers.
      utilisateurs : Gère les informations des utilisateurs de l'application.

    * Auteurs:

      Sitki : Partie Conception BDD - Developpement Api Java ( SpringBoot ) - Gestion Back-End, Front-End et BDD ( JAVA - React Native Expo et PhpMyAdmin )
      Arno : Partie Gestion projet ( Trello ) Conception du Design ( Figma ), Prototypage, Logos, Icones ( Illustrator, Figma ), et Front-End ( React Native Expo )

    * Tests croisés :

      Trouver les propriétés préférées d'un utilisateur spécifique.
      Trouver les utilisateurs avec des critères de recherche spécifiques.
      Trouver les annonces immobilières avec des typologies spécifiques.
      Trouver les codes de collaboration actifs.
      Trouver les affiliations d'agences pour un utilisateur spécifique.
**/

-- **** Supprimer la Bdd s'elle existe **** --
DROP DATABASE IF EXISTS lifefusion2024test;

-- **** Création de la base de données si elle n'existe pas **** --
CREATE DATABASE IF NOT EXISTS lifefusion2024test;
USE lifefusion2024test;


-- **** Création des tables sans clés étrangères **** --

DROP TABLE IF EXISTS `utilisateurs`;
CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `biography` text,
  `is_agency` tinyint(1) DEFAULT '0',
  `affiliation_count` int DEFAULT '0',
  `collaboration_code_id` bigint DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `localisation`;
CREATE TABLE IF NOT EXISTS `localisation` (
  `location_id` int NOT NULL AUTO_INCREMENT,
  `city` varchar(100) DEFAULT NULL,
  `neighborhood` varchar(100) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `typologies`;
CREATE TABLE IF NOT EXISTS `typologies` (
  `typology_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`typology_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `annonces_immobilieres`;
CREATE TABLE IF NOT EXISTS `annonces_immobilieres` (
  `property_id` int NOT NULL AUTO_INCREMENT,
  `date_posted` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `dpe` varchar(255) DEFAULT NULL,
  `is_online` bit(1) NOT NULL,
  `location_id` int DEFAULT NULL,
  `num_rooms` int NOT NULL,
  `price` double NOT NULL,
  `surface` double NOT NULL,
  `typology_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`property_id`),
  KEY `user_id` (`user_id`),
  KEY `typology_id` (`typology_id`),
  KEY `location_id` (`location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `images_des_annonces`;
CREATE TABLE IF NOT EXISTS `images_des_annonces` (
  `image_id` bigint NOT NULL AUTO_INCREMENT,
  `property_id` int NOT NULL,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`image_id`),
  KEY `property_id` (`property_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `images_des_utilisateurs`;
CREATE TABLE IF NOT EXISTS `images_des_utilisateurs` (
  `image_id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`image_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `codes_de_collaboration`;
CREATE TABLE IF NOT EXISTS `codes_de_collaboration` (
  `collaboration_code_id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `code` varchar(50) DEFAULT NULL,
  `expiration_date` datetime DEFAULT NULL,
  PRIMARY KEY (`collaboration_code_id`),
  UNIQUE KEY `code` (`code`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `affiliations_des_agences`;
CREATE TABLE IF NOT EXISTS `affiliations_des_agences` (
  `affiliation_id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `agency_id` int NOT NULL,
  `date_affiliated` datetime DEFAULT NULL,
  PRIMARY KEY (`affiliation_id`),
  KEY `user_id` (`user_id`),
  KEY `agency_id` (`agency_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `criteres_de_recherche`;
CREATE TABLE IF NOT EXISTS `criteres_de_recherche` (
  `criteria_id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `surface_min` double NOT NULL,
  `surface_max` double NOT NULL,
  `typology_id` int DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `dpe_min` varchar(255) DEFAULT NULL,
  `num_rooms_min` int DEFAULT NULL,
  `budget_min` double NOT NULL,
  `budget_max` double NOT NULL,
  `location_id` bigint DEFAULT NULL,
  PRIMARY KEY (`criteria_id`),
  KEY `user_id` (`user_id`),
  KEY `typology_id` (`typology_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `favoris`;
CREATE TABLE IF NOT EXISTS `favoris` (
  `favorite_id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `property_id` int NOT NULL,
  PRIMARY KEY (`favorite_id`),
  KEY `user_id` (`user_id`),
  KEY `property_id` (`property_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- **** Insertion des données initiales et supplémentaires **** --

-- Table `utilisateurs`
INSERT INTO `utilisateurs` (`user_id`, `username`, `email`, `password`, `phone_number`, `address`, `biography`, `is_agency`, `affiliation_count`, `collaboration_code_id`) VALUES
(1, 'JohnDoe', 'john@example.com', 'motdepasse123', '+123456789', '123 Main Street, City', 'I am a real estate agent.', 1, 2, 1),
(2, 'JaneSmith', 'jane@example.com', 'password456', '+987654321', '456 Elm Street, City', 'I specialize in luxury properties.', 1, 1, 2),
(3, 'Admin', 'admin@example.com', 'adminpass', '0783800246', '10 boulevard des nations', NULL, 0, NULL, NULL),
(4, 'AliceBrown', 'alice@example.com', 'pass123', '+1122334455', '789 Oak Street, City', 'Real estate agent specializing in commercial properties.', 1, 3, 3),
(5, 'BobGreen', 'bob@example.com', 'pass456', '+9988776655', '101 Pine Avenue, Town', 'Experienced agent helping first-time buyers find their dream homes.', 1, 2, NULL),
(6, 'CharlieBlack', 'charlie@example.com', 'pass789', NULL, '555 Maple Road, Village', 'New agent eager to assist clients in finding the perfect property.', 1, 0, NULL),
(7, 'User7', 'user7@example.com', '1pass123', NULL, NULL, NULL, 0, 0, NULL),
(8, 'User8', 'user8@example.com', '2pass123', NULL, NULL, NULL, 0, 0, NULL),
(9, 'User9', 'user9@example.com', '3pass123', NULL, NULL, NULL, 0, 0, NULL),
(10, 'User10', 'user10@example.com', '4pass123', NULL, NULL, NULL, 0, 0, NULL),
(11, 'User11', 'user11@example.com', '5pass123', NULL, NULL, NULL, 0, 0, NULL),
(12, 'User12', 'user12@example.com', '6pass123', NULL, NULL, NULL, 0, 0, NULL),
(13, 'User13', 'user13@example.com', '7pass123', NULL, NULL, NULL, 0, 0, NULL),
(14, 'User14', 'user14@example.com', '8pass123', NULL, NULL, NULL, 0, 0, NULL),
(15, 'User15', 'user15@example.com', '9pass123', NULL, NULL, NULL, 0, 0, NULL),
(16, 'User16', 'user16@example.com', '10pass123', NULL, NULL, NULL, 0, 0, NULL),
(17, 'User17', 'user17@example.com', '11pass123', NULL, NULL, NULL, 0, 0, NULL),
(18, 'User18', 'user18@example.com', '12pass123', NULL, NULL, NULL, 0, 0, NULL),
(19, 'User19', 'user19@example.com', '13pass123', NULL, NULL, NULL, 0, 0, NULL),
(20, 'User20', 'user20@example.com', '14pass123', NULL, NULL, NULL, 0, 0, NULL),
(21, 'User21', 'user21@example.com', '20pass123', NULL, NULL, NULL, 0, 0, NULL),
(22, 'User22', 'user22@example.com', '15pass123', NULL, NULL, NULL, 0, 0, NULL),
(23, 'User23', 'user23@example.com', '16pass123', NULL, NULL, NULL, 0, 0, NULL),
(24, 'User24', 'user24@example.com', '17pass123', NULL, NULL, NULL, 0, 0, NULL),
(25, 'sii', 'sitki@sitki.fr', 'Sitki123', NULL, NULL, NULL, 0, 0, 0),
(26, 'sitkkki', 'sitki@sitkiii.fr', 'Stk', NULL, NULL, NULL, 0, 0, 0),
(27, 'sitki', 'sari@sari.com', 'sari', NULL, NULL, NULL, 0, 0, 0),
(28, 'sari', 'sari@sitki.fr', 'sari', NULL, NULL, NULL, 0, 0, 0),
(29, 'arnoC', 'arno@arno.fr', 'arno', NULL, NULL, NULL, 0, 0, 0),
(30, 'arno', 'arno@arbo.fr', 'arno', NULL, NULL, NULL, 0, 0, 0),
(31, 'raphael', 'gg@gg.fr', 'gg', NULL, NULL, NULL, 0, 0, 0),
(32, 'radfphael', 'gggg@gg.fr', 'gggg', NULL, NULL, NULL, 0, 0, 0),
(33, 'radfphaels', 'ggjjgg@gg.fr', 'gjjjggg', NULL, NULL, NULL, 0, 0, 0),
(34, 'arnooo', 'arnoo@arboo', 'arnoo', '0837382', '9 brueh ', NULL, 0, 0, 0),
(35, 'stephane', 'life@immo.fr', 'arno', '8272672', '9 bodkd ', NULL, 0, 0, 0),
(36, 'ca', 'ca@ca.com', 'ca', NULL, NULL, NULL, 0, 0, 0);


-- Table `localisation`
INSERT INTO `localisation` (`location_id`, `city`, `neighborhood`, `address`, `latitude`, `longitude`) VALUES
(1, 'City', 'City Center', '123 Main Street', 40.7128, -74.006),
(2, 'Suburbs', 'Green Meadows', '456 Elm Street', 39.7392, -104.9903),
(3, 'Downtown', 'Financial District', '456 Wall Street', 40.7128, -74.006),
(4, 'Mountain View', 'Alpine Meadows', '789 Peak Drive', 37.3861, -122.0839),
(5, 'Lakeview', 'Sunset Blvd', '123 Lake Street', 34.0522, -118.2437),
(6, 'City', 'City Center', '234 Main Street', 40.7128, -74.006),
(7, 'Suburbs', 'Green Meadows', '567 Elm Street', 39.7392, -104.9903),
(8, 'Downtown', 'Financial District', '678 Wall Street', 40.7128, -74.006),
(9, 'Mountain View', 'Alpine Meadows', '890 Peak Drive', 37.3861, -122.0839),
(10, 'City', 'City Center', '345 Main Street', 40.7128, -74.006),
(11, 'Suburbs', 'Green Meadows', '678 Elm Street', 39.7392, -104.9903),
(12, 'Downtown', 'Financial District', '789 Wall Street', 40.7128, -74.006),
(13, 'Mountain View', 'Alpine Meadows', '901 Peak Drive', 37.3861, -122.0839),
(14, 'City', 'City Center', '456 Main Street', 40.7128, -74.006),
(15, 'Suburbs', 'Green Meadows', '789 Elm Street', 39.7392, -104.9903),
(16, 'Downtown', 'Financial District', '890 Wall Street', 40.7128, -74.006),
(17, 'Mountain View', 'Alpine Meadows', '101 Peak Drive', 37.3861, -122.0839),
(18, 'City', 'City Center', '567 Main Street', 40.7128, -74.006),
(19, 'Suburbs', 'Green Meadows', '890 Elm Street', 39.7392, -104.9903),
(20, 'Downtown', 'Financial District', '901 Wall Street', 40.7128, -74.006);

-- Table `typologies`
INSERT INTO `typologies` (`typology_id`, `name`) VALUES
(1, 'Appartement'),
(2, 'Maison'),
(3, 'Terrain'),
(4, 'Studio'),
(5, 'Penthouse'),
(6, 'Chalet');

-- Table `annonces_immobilieres`
INSERT INTO `annonces_immobilieres` (`property_id`, `date_posted`, `description`, `dpe`, `is_online`, `location_id`, `num_rooms`, `price`, `surface`, `typology_id`, `user_id`) VALUES
(1, '2024-04-21 09:00:00', 'Luxurious apartment with sea view.', 'A', b'1', 1, 3, 300000, 150, 1, 1),
(2, '2024-05-11 10:00:00', 'Spacious house in the suburbs.', 'B', b'1', 2, 6, 450000, 250, 2, 2),
(3, '2024-05-21 11:00:00', 'Cozy studio apartment with city views.', 'C', b'1', 3, 1, 120000, 50, 4, 3),
(4, '2024-06-01 12:00:00', 'Charming chalet in the mountains.', 'B', b'1', 4, 4, 600000, 200, 6, 4),
(5, '2024-06-11 13:00:00', 'Modern penthouse downtown.', 'A', b'1', 5, 5, 750000, 180, 5, 5),
(6, '2024-06-21 14:00:00', 'Spacious villa with garden.', 'B', b'1', 2, 7, 500000, 300, 2, 6),
(7, '2024-07-01 15:00:00', 'Comfortable apartment near park.', 'C', b'1', 1, 3, 350000, 120, 1, 7),
(8, '2024-07-11 16:00:00', 'Large house with swimming pool.', 'B', b'1', 2, 8, 800000, 400, 2, 8),
(9, '2024-07-21 17:00:00', 'Affordable studio in central area.', 'D', b'1', 3, 1, 100000, 45, 4, 9),
(10, '2024-08-01 18:00:00', 'Luxury penthouse with rooftop.', 'A', b'1', 5, 6, 1000000, 220, 5, 10),
(11, '2024-08-11 19:00:00', 'Rustic chalet with beautiful views.', 'B', b'1', 4, 4, 700000, 250, 6, 11),
(12, '2024-08-21 20:00:00', 'Modern apartment near amenities.', 'C', b'1', 1, 2, 400000, 100, 1, 12),
(13, '2024-09-01 21:00:00', 'Spacious house for families.', 'B', b'1', 2, 6, 600000, 350, 2, 13),
(14, '2024-09-11 22:00:00', 'Cozy studio for singles.', 'D', b'1', 3, 1, 90000, 40, 4, 14),
(15, '2024-09-21 23:00:00', 'Luxury villa with pool.', 'A', b'1', 2, 9, 1200000, 450, 2, 15),
(16, '2024-10-01 00:00:00', 'Modern apartment with balcony.', 'C', b'1', 1, 3, 380000, 110, 1, 16),
(17, '2024-10-11 01:00:00', 'House in quiet neighborhood.', 'B', b'1', 2, 5, 550000, 280, 2, 17),
(18, '2024-10-21 02:00:00', 'Studio near university.', 'D', b'1', 3, 1, 95000, 42, 4, 18),
(19, '2024-11-01 03:00:00', 'Penthouse with city view.', 'A', b'1', 5, 4, 850000, 190, 5, 19),
(20, '2024-11-11 04:00:00', 'Chalet near ski resort.', 'B', b'1', 4, 4, 650000, 230, 6, 20);

-- Table `codes_de_collaboration`
INSERT INTO `codes_de_collaboration` (`collaboration_code_id`, `user_id`, `code`, `expiration_date`) VALUES
(1, 1, 'ABCDE12345', '2024-12-31 00:00:00'),
(2, 2, 'FGHIJ67890', '2024-11-30 00:00:00'),
(3, 3, 'KLMNOP67890', '2025-01-31 00:00:00'),
(4, 4, 'QRSTUVWXYZ1234', '2025-02-28 00:00:00'),
(5, 5, 'CODE567890', '2024-10-31 00:00:00'),
(6, 6, 'CODE678901', '2024-09-30 00:00:00'),
(7, 7, 'CODE789012', '2024-08-31 00:00:00'),
(8, 8, 'CODE890123', '2024-07-31 00:00:00'),
(9, 9, 'CODE901234', '2024-06-30 00:00:00'),
(10, 10, 'CODE012345', '2024-05-31 00:00:00'),
(11, 11, 'CODE123456', '2024-04-30 00:00:00'),
(12, 12, 'CODE234567', '2024-03-31 00:00:00'),
(13, 13, 'CODE345678', '2024-02-29 00:00:00'),
(14, 14, 'CODE456789', '2024-01-31 00:00:00'),
(15, 15, 'CODE565890', '2023-12-31 00:00:00'),
(16, 16, 'CODE679901', '2023-11-30 00:00:00'),
(17, 17, 'CODE789112', '2023-10-31 00:00:00'),
(18, 18, 'CODE890223', '2023-09-30 00:00:00'),
(19, 19, 'CODE901274', '2023-08-31 00:00:00'),
(20, 20, 'CODE912345', '2023-07-31 00:00:00');

-- Table `criteres_de_recherche`
INSERT INTO `criteres_de_recherche` (`criteria_id`, `user_id`, `surface_min`, `surface_max`, `typology_id`, `location`, `dpe_min`, `num_rooms_min`, `budget_min`, `budget_max`, `location_id`) VALUES
(1, 4, 50, 100, 1, 'City Center', 'B', 5, 100000, 200000, NULL),
(2, 5, 100, 200, 2, 'Suburbs', 'C', 3, 200000, 400000, NULL),
(3, 5, 70, 120, 1, 'Downtown', 'D', 1, 80000, 150000, NULL),
(4, 6, 150, 300, 3, 'Mountain View', 'B', 5, 400000, 800000, NULL),
(5, 7, 50, 150, 1, 'City Center', 'C', 2, 120000, 300000, NULL),
(6, 8, 60, 200, 2, 'Suburbs', 'B', 4, 250000, 500000, NULL),
(7, 9, 80, 160, 1, 'Downtown', 'D', 3, 90000, 200000, NULL),
(8, 10, 100, 250, 3, 'Mountain View', 'B', 6, 450000, 900000, NULL),
(9, 11, 70, 140, 1, 'City Center', 'C', 2, 100000, 250000, NULL),
(10, 12, 60, 180, 2, 'Suburbs', 'B', 4, 200000, 450000, NULL),
(11, 13, 90, 170, 1, 'Downtown', 'D', 3, 85000, 180000, NULL),
(12, 14, 120, 280, 3, 'Mountain View', 'B', 5, 400000, 800000, NULL),
(13, 15, 100, 200, 1, 'City Center', 'C', 2, 120000, 300000, NULL),
(14, 16, 110, 220, 2, 'Suburbs', 'B', 4, 250000, 500000, NULL),
(15, 17, 70, 150, 1, 'Downtown', 'D', 3, 90000, 200000, NULL),
(16, 18, 90, 230, 3, 'Mountain View', 'B', 6, 450000, 900000, NULL),
(17, 19, 80, 170, 1, 'City Center', 'C', 2, 100000, 250000, NULL),
(18, 20, 70, 190, 2, 'Suburbs', 'B', 4, 200000, 450000, NULL),
(19, 21, 60, 160, 1, 'Downtown', 'D', 3, 85000, 180000, NULL),
(20, 22, 100, 260, 3, 'Mountain View', 'B', 5, 400000, 800000, NULL);

-- Table `favoris`
INSERT INTO `favoris` (`favorite_id`, `user_id`, `property_id`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 5),
(6, 6, 6),
(7, 7, 7),
(8, 8, 8),
(9, 9, 9),
(10, 10, 10),
(11, 11, 11),
(12, 12, 12),
(13, 13, 13),
(14, 14, 14),
(15, 15, 15),
(16, 16, 16),
(17, 17, 17),
(18, 18, 18),
(19, 19, 19),
(20, 20, 20);

-- Table `images_des_annonces`
INSERT INTO `images_des_annonces` (`image_id`, `property_id`, `url`) VALUES
(1, 1, 'https://example.com/image1.jpg'),
(2, 2, 'https://example.com/image2.jpg'),
(3, 3, 'https://example.com/image3.jpg'),
(4, 4, 'https://example.com/image4.jpg'),
(5, 5, 'https://example.com/image5.jpg'),
(6, 6, 'https://example.com/image6.jpg'),
(7, 7, 'https://example.com/image7.jpg'),
(8, 8, 'https://example.com/image8.jpg'),
(9, 9, 'https://example.com/image9.jpg'),
(10, 10, 'https://example.com/image10.jpg'),
(11, 11, 'https://example.com/image11.jpg'),
(12, 12, 'https://example.com/image12.jpg'),
(13, 13, 'https://example.com/image13.jpg'),
(14, 14, 'https://example.com/image14.jpg'),
(15, 15, 'https://example.com/image15.jpg'),
(16, 16, 'https://example.com/image16.jpg'),
(17, 17, 'https://example.com/image17.jpg'),
(18, 18, 'https://example.com/image18.jpg'),
(19, 19, 'https://example.com/image19.jpg'),
(20, 20, 'https://example.com/image20.jpg');

-- Table `images_des_utilisateurs`
INSERT INTO `images_des_utilisateurs` (`image_id`, `user_id`, `url`) VALUES
(1, 1, 'https://example.com/user1.jpg'),
(2, 2, 'https://example.com/user2.jpg'),
(3, 3, 'https://example.com/user3.jpg'),
(4, 4, 'https://example.com/user4.jpg'),
(5, 5, 'https://example.com/user5.jpg'),
(6, 6, 'https://example.com/user6.jpg'),
(7, 7, 'https://example.com/user7.jpg'),
(8, 8, 'https://example.com/user8.jpg'),
(9, 9, 'https://example.com/user9.jpg'),
(10, 10, 'https://example.com/user10.jpg'),
(11, 11, 'https://example.com/user11.jpg'),
(12, 12, 'https://example.com/user12.jpg'),
(13, 13, 'https://example.com/user13.jpg'),
(14, 14, 'https://example.com/user14.jpg'),
(15, 15, 'https://example.com/user15.jpg'),
(16, 16, 'https://example.com/user16.jpg'),
(17, 17, 'https://example.com/user17.jpg'),
(18, 18, 'https://example.com/user18.jpg'),
(19, 19, 'https://example.com/user19.jpg'),
(20, 20, 'https://example.com/user20.jpg');


-- **** Ajout des clés étrangères après insertion des données **** --

ALTER TABLE `affiliations_des_agences`
  ADD CONSTRAINT `fk_affiliations_agency_id` FOREIGN KEY (`agency_id`) REFERENCES `utilisateurs` (`user_id`),
  ADD CONSTRAINT `fk_affiliations_user_id` FOREIGN KEY (`user_id`) REFERENCES `utilisateurs` (`user_id`);

ALTER TABLE `annonces_immobilieres`
  ADD CONSTRAINT `fk_announces_location_id` FOREIGN KEY (`location_id`) REFERENCES `localisation` (`location_id`),
  ADD CONSTRAINT `fk_announces_typology_id` FOREIGN KEY (`typology_id`) REFERENCES `typologies` (`typology_id`),
  ADD CONSTRAINT `fk_announces_user_id` FOREIGN KEY (`user_id`) REFERENCES `utilisateurs` (`user_id`);

ALTER TABLE `codes_de_collaboration`
  ADD CONSTRAINT `fk_codes_user_id` FOREIGN KEY (`user_id`) REFERENCES `utilisateurs` (`user_id`);

ALTER TABLE `criteres_de_recherche`
  ADD CONSTRAINT `fk_criteria_typology_id` FOREIGN KEY (`typology_id`) REFERENCES `typologies` (`typology_id`),
  ADD CONSTRAINT `fk_criteria_user_id` FOREIGN KEY (`user_id`) REFERENCES `utilisateurs` (`user_id`);

ALTER TABLE `favoris`
  ADD CONSTRAINT `fk_favorites_property_id` FOREIGN KEY (`property_id`) REFERENCES `annonces_immobilieres` (`property_id`),
  ADD CONSTRAINT `fk_favorites_user_id` FOREIGN KEY (`user_id`) REFERENCES `utilisateurs` (`user_id`);

ALTER TABLE `images_des_annonces`
  ADD CONSTRAINT `fk_images_ads_property_id` FOREIGN KEY (`property_id`) REFERENCES `annonces_immobilieres` (`property_id`);

ALTER TABLE `images_des_utilisateurs`
  ADD CONSTRAINT `fk_user_images_user_id` FOREIGN KEY (`user_id`) REFERENCES `utilisateurs` (`user_id`);


-- **** Batterie de test (requetes croisées) entre les tables **** --

-- Rechercher les annonces immobilières par typologie et localisation
SELECT a.property_id, a.description, a.price, t.name as typology, l.city, l.neighborhood
FROM annonces_immobilieres a
JOIN typologies t ON a.typology_id = t.typology_id
JOIN localisation l ON a.location_id = l.location_id
WHERE t.name = 'Appartement' AND l.city = 'City';

-- Rechercher les utilisateurs avec des critères de recherche spécifiques
SELECT u.username, u.email, c.surface_min, c.surface_max, c.budget_min, c.budget_max
FROM utilisateurs u
JOIN criteres_de_recherche c ON u.user_id = c.user_id
WHERE c.surface_min >= 50 AND c.surface_max <= 150 AND c.budget_min >= 100000 AND c.budget_max <= 300000;

-- Rechercher les annonces immobilières ajoutées en favoris par un utilisateur
SELECT a.property_id, a.description, a.price, f.user_id
FROM annonces_immobilieres a
JOIN favoris f ON a.property_id = f.property_id
WHERE f.user_id = 1;

-- Rechercher les agences auxquelles un utilisateur est affilié
SELECT u.username, a.date_affiliated
FROM utilisateurs u
JOIN affiliations_des_agences a ON u.user_id = a.agency_id
WHERE a.user_id = 4;

