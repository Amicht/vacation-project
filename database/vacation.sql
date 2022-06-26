-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 23, 2022 at 05:59 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vacation`
--

-- --------------------------------------------------------

--
-- Table structure for table `followers`
--

CREATE TABLE `followers` (
  `user_id` int(11) NOT NULL,
  `vacation_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `followers`
--

INSERT INTO `followers` (`user_id`, `vacation_id`) VALUES
(20, 8),
(20, 12),
(20, 13),
(21, 7),
(21, 9),
(21, 16),
(26, 8),
(26, 13),
(26, 22),
(28, 13),
(28, 17),
(28, 20);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_name` varchar(10) COLLATE utf8_bin NOT NULL,
  `id` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`role_name`, `id`) VALUES
('User', 1),
('Admin', 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_bin NOT NULL,
  `last_name` varchar(50) COLLATE utf8_bin NOT NULL,
  `username` varchar(50) COLLATE utf8_bin NOT NULL,
  `password` varchar(50) COLLATE utf8_bin NOT NULL,
  `role_id` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `last_name`, `username`, `password`, `role_id`) VALUES
(19, 'Amit', 'Licht', 'Amicht', '1111', 2),
(20, 'Talya', 'Falach', 'Talya123', '2222', 1),
(21, 'Tomer', 'Avital', 'Tomer123', '3333', 1),
(26, 'Shlomo', 'Russel', 'Shlomo123', '4444', 1),
(28, 'Tehila', 'Calderon', 'Tilicht', '5555', 1);

-- --------------------------------------------------------

--
-- Table structure for table `vacations`
--

CREATE TABLE `vacations` (
  `id` int(11) NOT NULL,
  `description` varchar(1000) COLLATE utf8_bin NOT NULL,
  `destination` varchar(30) COLLATE utf8_bin NOT NULL,
  `picture` varchar(50) COLLATE utf8_bin NOT NULL,
  `from_date` date NOT NULL,
  `to_date` date NOT NULL,
  `price` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `vacations`
--

INSERT INTO `vacations` (`id`, `description`, `destination`, `picture`, `from_date`, `to_date`, `price`) VALUES
(7, 'Amsterdam is full of tourists all year round. The ', 'Amsterdam', 'amsterdam.jpg', '2022-08-17', '2022-08-24', 800),
(8, 'Each of the Maldives, scattered in the Indian Ocea', 'Maldives', 'maldives.jpg', '2022-06-15', '2022-06-22', 4000),
(9, 'Bora Bora is an island in the Pacific Ocean. This ', 'Bora Bora', 'bora.jpg', '2022-09-08', '2022-09-14', 2500),
(10, 'Burgos is a port city in southeastern Bulgaria, on', 'Burgas', 'burgas.jpg', '2022-07-20', '2022-07-25', 400),
(11, 'The most amazing and vibrant city in the world, th', 'New York', 'newyork.jpg', '2022-08-01', '2022-08-07', 1700),
(12, 'Istanbul is the main port city of Turkey and the c', 'Istanbul', 'istanbul.jpg', '2022-12-20', '2022-12-27', 500),
(13, 'Tokyo A beautiful place located on the east coast ', 'Tokyo', 'tokyo.jpg', '2023-05-06', '2023-05-15', 3000),
(14, 'London is the capital of England and the United Ki', 'London', 'london.jpg', '2022-09-13', '2022-09-21', 900),
(15, 'The city of Paris, also known as the \"City of Ligh', 'Paris', 'paris.jpg', '2022-08-10', '2022-08-12', 800),
(16, 'Ayia Napa is a resort town in southeastern Cyprus.', 'Ayia Napa', 'napa.jpg', '2022-11-09', '2022-11-13', 300),
(17, 'San Francisco is the fourth largest city in the st', 'San Francisco', 'san.jpg', '2022-10-24', '2022-10-30', 1900),
(18, 'Zanzibar is a region in the United Republic of Tan', 'Zanzibar', 'zanzibar.jpg', '2022-08-05', '2022-08-11', 700),
(19, 'Rio de Janeiro is a city located in the southeaste', 'Rio de janeiro', 'rio.jpg', '2022-09-02', '2022-09-07', 2300),
(20, 'Barcelona is the second largest city in Spain, ful', 'Barcelona', 'barcelona.jpg', '2022-07-06', '2022-07-12', 700),
(21, 'Las Vegas is the largest city in the state of Neva', 'Las Vegas', 'vegas.jpg', '2022-09-24', '2022-09-29', 1600),
(22, 'Dubai is the most populous city in the United Arab', 'Dubai', 'dubai.jpg', '2022-09-20', '2022-09-28', 1200);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `followers`
--
ALTER TABLE `followers`
  ADD PRIMARY KEY (`user_id`,`vacation_id`),
  ADD KEY `vacation_id` (`vacation_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `vacations`
--
ALTER TABLE `vacations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `vacations`
--
ALTER TABLE `vacations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `followers`
--
ALTER TABLE `followers`
  ADD CONSTRAINT `followers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `followers_ibfk_2` FOREIGN KEY (`vacation_id`) REFERENCES `vacations` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
