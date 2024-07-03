/**
          --- SQL Dump - Database lftest ---

  * Description:

    Ce fichier contient les instructions SQL pour créer et insérer des données dans les tables de la base de données `lftest`.
    Il inclut les définitions de tables, les contraintes, les index, et les données initiales pour les tables de la base de données.

  * Tables:

    - affiliations_des_agences: Stocke les affiliations des utilisateurs aux agences.
    - annonces_immobilieres: Contient les annonces immobilières.
    - codes_de_collaboration: Stocke les codes de collaboration entre les utilisateurs.
    - criteres_de_recherche: Stocke les critères de recherche des utilisateurs pour les annonces immobilières.
    - favoris: Contient les annonces immobilières marquées comme favoris par les utilisateurs.
    - images_des_annonces: Contient les images associées aux annonces immobilières.
    - images_des_utilisateurs: Contient les images des utilisateurs.
    - localisation: Contient les informations de localisation des annonces immobilières.
    - typologies: Contient les typologies des annonces immobilières (appartement, maison, etc.).
    - utilisateurs: Stocke les informations des utilisateurs.

  * Notes:

    - Ajout de 20 enregistrements par table.
    - Création de requêtes de tests croisés pour la recherche par filtres entre les diverses tables.
**/

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 28, 2024 at 09:34 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lftest`
--

-- --------------------------------------------------------

--
-- Table structure for table `affiliations_des_agences`
--

CREATE TABLE `affiliations_des_agences` (
  `affiliation_id` bigint NOT NULL,
  `user_id` int NOT NULL,
  `agency_id` int NOT NULL,
  `date_affiliated` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `affiliations_des_agences`
--

INSERT INTO `affiliations_des_agences` (`affiliation_id`, `user_id`, `agency_id`, `date_affiliated`) VALUES
(1, 4, 4, '2024-01-01 00:00:00'),
(2, 2, 1, '2024-02-01 00:00:00'),
(3, 3, 2, '2024-03-01 00:00:00'),
(4, 4, 3, '2024-04-01 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `annonces_immobilieres`
--

CREATE TABLE `annonces_immobilieres` (
  `property_id` int NOT NULL,
  `date_posted` datetime DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `dpe` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `is_online` bit(1) NOT NULL,
  `location_id` int DEFAULT NULL,
  `num_rooms` int NOT NULL,
  `price` double NOT NULL,
  `surface` double NOT NULL,
  `typology_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `annonces_immobilieres`
--

INSERT INTO `annonces_immobilieres` (`property_id`, `date_posted`, `description`, `dpe`, `is_online`, `location_id`, `num_rooms`, `price`, `surface`, `typology_id`, `user_id`) VALUES
(9, NULL, NULL, NULL, b'0', 1, 0, 0, 250, 1, 4),
(10, '2024-04-21 09:00:00', 'test1', 'C', b'1', 2, 5, 150000, 150, 2, 5),
(11, '2024-04-22 07:00:00', 'Cozy studio apartment with city views.', 'C', b'1', 3, 2, 120000, 100, 1, 5),
(12, NULL, NULL, NULL, b'0', NULL, 0, 0, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `codes_de_collaboration`
--

CREATE TABLE `codes_de_collaboration` (
  `collaboration_code_id` bigint NOT NULL,
  `user_id` int DEFAULT NULL,
  `code` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `expiration_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `codes_de_collaboration`
--

INSERT INTO `codes_de_collaboration` (`collaboration_code_id`, `user_id`, `code`, `expiration_date`) VALUES
(1, 1, 'ABCDE12345', '2024-12-31 00:00:00'),
(2, 2, 'FGHIJ67890', '2024-11-30 00:00:00'),
(3, 3, 'KLMNOP67890', '2025-01-31 00:00:00'),
(4, NULL, 'QRSTUVWXYZ1234', '2025-02-28 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `criteres_de_recherche`
--

CREATE TABLE `criteres_de_recherche` (
  `criteria_id` bigint NOT NULL,
  `user_id` int NOT NULL,
  `surface_min` double NOT NULL,
  `surface_max` double NOT NULL,
  `typology_id` int DEFAULT NULL,
  `location` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `dpe_min` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `num_rooms_min` int DEFAULT NULL,
  `budget_min` double NOT NULL,
  `budget_max` double NOT NULL,
  `location_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `criteres_de_recherche`
--

INSERT INTO `criteres_de_recherche` (`criteria_id`, `user_id`, `surface_min`, `surface_max`, `typology_id`, `location`, `dpe_min`, `num_rooms_min`, `budget_min`, `budget_max`, `location_id`) VALUES
(1, 4, 50, 100, 1, 'City Center', 'B', 5, 100000, 200000, NULL),
(2, 5, 100, 200, 2, 'Suburbs', 'C', 3, 200000, 400000, NULL),
(3, 5, 70, 120, 1, 'Downtown', 'D', 1, 80000, 150000, NULL),
(4, 6, 150, 300, 3, 'Mountain View', 'B', 5, 400000, 800000, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `favoris`
--

CREATE TABLE `favoris` (
  `favorite_id` bigint NOT NULL,
  `user_id` int NOT NULL,
  `property_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `favoris`
--

INSERT INTO `favoris` (`favorite_id`, `user_id`, `property_id`) VALUES
(11, 1, 9);

-- --------------------------------------------------------

--
-- Table structure for table `images_des_annonces`
--

CREATE TABLE `images_des_annonces` (
  `image_id` bigint NOT NULL,
  `property_id` int NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `images_des_utilisateurs`
--

CREATE TABLE `images_des_utilisateurs` (
  `image_id` bigint NOT NULL,
  `user_id` int NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `images_des_utilisateurs`
--

INSERT INTO `images_des_utilisateurs` (`image_id`, `user_id`, `url`) VALUES
(1, 1, 'https://example.com/user1.jpg'),
(2, 2, 'https://example.com/user2.jpg'),
(3, 3, 'https://example.com/user3.jpg'),
(4, 4, 'https://example.com/user4.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `localisation`
--

CREATE TABLE `localisation` (
  `location_id` int NOT NULL,
  `city` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `neighborhood` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `localisation`
--

INSERT INTO `localisation` (`location_id`, `city`, `neighborhood`, `address`, `latitude`, `longitude`) VALUES
(1, 'City', 'City Center', '123 Main Street', 40.7128, -74.006),
(2, 'Suburbs', 'Green Meadows', '456 Elm Street', 39.7392, -104.9903),
(3, 'Downtown', 'Financial District', '456 Wall Street', 40.7128, -74.006),
(4, 'Mountain View', 'Alpine Meadows', '789 Peak Drive', 37.3861, -122.0839);

-- --------------------------------------------------------

--
-- Table structure for table `typologies`
--

CREATE TABLE `typologies` (
  `typology_id` int NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `typologies`
--

INSERT INTO `typologies` (`typology_id`, `name`) VALUES
(1, 'Appartement'),
(2, 'Maison'),
(3, 'Terrain'),
(4, 'Studio'),
(5, 'Penthouse'),
(6, 'Chalet');

-- --------------------------------------------------------

--
-- Table structure for table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `user_id` int NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `phone_number` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `biography` text COLLATE utf8mb4_general_ci,
  `is_agency` tinyint(1) DEFAULT '0',
  `affiliation_count` int DEFAULT '0',
  `collaboration_code_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `utilisateurs`
--

INSERT INTO `utilisateurs` (`user_id`, `username`, `email`, `password`, `phone_number`, `address`, `biography`, `is_agency`, `affiliation_count`, `collaboration_code_id`) VALUES
(1, 'JohnDoe', 'john@example.com', 'motdepasse123', '+123456789', '123 Main Street, City', 'I am a real estate agent.', 1, 2, 1),
(2, 'JaneSmith', 'jane@example.com', 'password456', '+987654321', '456 Elm Street, City', 'I specialize in luxury properties.', 1, 1, 2),
(3, 'Admin', 'admin@example.com', 'adminpass', '0783800246', '10 boulevard des nations', NULL, 0, NULL, NULL),
(4, 'AliceBrown', 'alice@example.com', 'pass123', '+1122334455', '789 Oak Street, City', 'Real estate agent specializing in commercial properties.', 1, 3, 3),
(5, 'BobGreen', 'bob@example.com', 'pass456', '+9988776655', '101 Pine Avenue, Town', 'Experienced agent helping first-time buyers find their dream homes.', 1, 2, NULL),
(6, 'CharlieBlack', 'charlie@example.com', 'pass789', NULL, '555 Maple Road, Village', 'New agent eager to assist clients in finding the perfect property.', 1, 0, NULL),
(7, 'sii', 'sitki@sitki.fr', 'Sitki123', NULL, NULL, NULL, 0, 0, 0),
(8, 'sitkkki', 'sitki@sitkiii.fr', 'Stk', NULL, NULL, NULL, 0, 0, 0),
(9, 'sii', 'sari@sari.com', 'sari', NULL, NULL, NULL, 0, 0, 0),
(11, 'sari', 'sari@sitki.fr', 'sari', NULL, NULL, NULL, 0, 0, 0),
(12, 'arno ', 'arno@arno.fr', 'arno', NULL, NULL, NULL, 0, 0, 0),
(13, 'arno', 'arno@arbo.fr', 'arno', NULL, NULL, NULL, 0, 0, 0),
(14, 'raphael', 'gg', 'gg', NULL, NULL, NULL, 0, 0, 0),
(17, 'radfphael', 'gggg', 'gggg', NULL, NULL, NULL, 0, 0, 0),
(20, 'radfphael', 'ggjjgg', 'gjjjggg', NULL, NULL, NULL, 0, 0, 0),
(21, 'arnooo', 'arnoo@arboo', 'arnoo', '0837382', '9 brueh ', NULL, 0, 0, 0),
(22, 'stephane', 'life@immo.fr', 'arno', '8272672', '9 bodkd ', NULL, 0, 0, 0),
(34, 'ca', 'ca@ca.com', 'ca', NULL, NULL, NULL, 0, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `affiliations_des_agences`
--
ALTER TABLE `affiliations_des_agences`
  ADD PRIMARY KEY (`affiliation_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `agency_id` (`agency_id`);

--
-- Indexes for table `annonces_immobilieres`
--
ALTER TABLE `annonces_immobilieres`
  ADD PRIMARY KEY (`property_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `typology_id` (`typology_id`),
  ADD KEY `location_id` (`location_id`);

--
-- Indexes for table `codes_de_collaboration`
--
ALTER TABLE `codes_de_collaboration`
  ADD PRIMARY KEY (`collaboration_code_id`),
  ADD UNIQUE KEY `code` (`code`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `criteres_de_recherche`
--
ALTER TABLE `criteres_de_recherche`
  ADD PRIMARY KEY (`criteria_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `typology_id` (`typology_id`);

--
-- Indexes for table `favoris`
--
ALTER TABLE `favoris`
  ADD PRIMARY KEY (`favorite_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `property_id` (`property_id`);

--
-- Indexes for table `images_des_annonces`
--
ALTER TABLE `images_des_annonces`
  ADD PRIMARY KEY (`image_id`),
  ADD KEY `property_id` (`property_id`);

--
-- Indexes for table `images_des_utilisateurs`
--
ALTER TABLE `images_des_utilisateurs`
  ADD PRIMARY KEY (`image_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `localisation`
--
ALTER TABLE `localisation`
  ADD PRIMARY KEY (`location_id`);

--
-- Indexes for table `typologies`
--
ALTER TABLE `typologies`
  ADD PRIMARY KEY (`typology_id`);

--
-- Indexes for table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `collaboration_code_id` (`collaboration_code_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `affiliations_des_agences`
--
ALTER TABLE `affiliations_des_agences`
  MODIFY `affiliation_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `annonces_immobilieres`
--
ALTER TABLE `annonces_immobilieres`
  MODIFY `property_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `codes_de_collaboration`
--
ALTER TABLE `codes_de_collaboration`
  MODIFY `collaboration_code_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `criteres_de_recherche`
--
ALTER TABLE `criteres_de_recherche`
  MODIFY `criteria_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `favoris`
--
ALTER TABLE `favoris`
  MODIFY `favorite_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `images_des_annonces`
--
ALTER TABLE `images_des_annonces`
  MODIFY `image_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `images_des_utilisateurs`
--
ALTER TABLE `images_des_utilisateurs`
  MODIFY `image_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `localisation`
--
ALTER TABLE `localisation`
  MODIFY `location_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `typologies`
--
ALTER TABLE `typologies`
  MODIFY `typology_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `affiliations_des_agences`
--
ALTER TABLE `affiliations_des_agences`
  ADD CONSTRAINT `fk_affiliations_agency_id` FOREIGN KEY (`agency_id`) REFERENCES `utilisateurs` (`user_id`),
  ADD CONSTRAINT `fk_affiliations_user_id` FOREIGN KEY (`user_id`) REFERENCES `utilisateurs` (`user_id`);

--
-- Constraints for table `annonces_immobilieres`
--
ALTER TABLE `annonces_immobilieres`
  ADD CONSTRAINT `fk_announces_location_id` FOREIGN KEY (`location_id`) REFERENCES `localisation` (`location_id`),
  ADD CONSTRAINT `fk_announces_typology_id` FOREIGN KEY (`typology_id`) REFERENCES `typologies` (`typology_id`),
  ADD CONSTRAINT `fk_announces_user_id` FOREIGN KEY (`user_id`) REFERENCES `utilisateurs` (`user_id`);

--
-- Constraints for table `codes_de_collaboration`
--
ALTER TABLE `codes_de_collaboration`
  ADD CONSTRAINT `fk_codes_user_id` FOREIGN KEY (`user_id`) REFERENCES `utilisateurs` (`user_id`);

--
-- Constraints for table `criteres_de_recherche`
--
ALTER TABLE `criteres_de_recherche`
  ADD CONSTRAINT `fk_criteria_typology_id` FOREIGN KEY (`typology_id`) REFERENCES `typologies` (`typology_id`),
  ADD CONSTRAINT `fk_criteria_user_id` FOREIGN KEY (`user_id`) REFERENCES `utilisateurs` (`user_id`);

--
-- Constraints for table `favoris`
--
ALTER TABLE `favoris`
  ADD CONSTRAINT `fk_favorites_property_id` FOREIGN KEY (`property_id`) REFERENCES `annonces_immobilieres` (`property_id`),
  ADD CONSTRAINT `fk_favorites_user_id` FOREIGN KEY (`user_id`) REFERENCES `utilisateurs` (`user_id`);

--
-- Constraints for table `images_des_annonces`
--
ALTER TABLE `images_des_annonces`
  ADD CONSTRAINT `fk_images_ads_property_id` FOREIGN KEY (`property_id`) REFERENCES `annonces_immobilieres` (`property_id`);

--
-- Constraints for table `images_des_utilisateurs`
--
ALTER TABLE `images_des_utilisateurs`
  ADD CONSTRAINT `fk_user_images_user_id` FOREIGN KEY (`user_id`) REFERENCES `utilisateurs` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
