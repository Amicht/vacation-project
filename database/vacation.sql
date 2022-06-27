-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 27, 2022 at 11:25 AM
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
(2, 8),
(2, 11),
(2, 18),
(2, 20),
(2, 24),
(2, 27),
(3, 8),
(3, 10),
(3, 17),
(3, 20),
(3, 24),
(4, 8),
(4, 9),
(4, 10),
(4, 11),
(4, 15),
(4, 24),
(4, 27);

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
  `password` varchar(100) COLLATE utf8_bin NOT NULL,
  `role_id` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `last_name`, `username`, `password`, `role_id`) VALUES
(1, 'Amit', 'Licht', 'Amicht', 'a410aa945c22d16729a268788b61c5e13c926459fe3467db3cbfad8408d0489d', 2),
(2, 'Tehila', 'Licht', 'Tilicht', 'a7012108f6ed88673aeffe4341d3d4dc6487c288e021e46f36e3d4391ba76c78', 1),
(3, 'Shlomo', 'Russel', 'ShlomoRus', '431240dc007bb235fd93aef5a2e8467f593318c170213912a96e0df33a0e3bd7', 1),
(4, 'Talya', 'Falach', 'TalyaFalach', '201b4ec3f7c280c551f4606491e0d007e5bc11a634758cb6cb6531bb8aacd763', 1);

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
(7, 'Planning a trip to Amsterdam? Find all the resources you need to get started - from accommodation and excursions to renting a car or using public transport.', 'Amsterdam', 'amsterdam.jpg', '2022-08-16', '2022-08-23', 1800),
(8, 'Maldives, in full Republic of Maldives, also called Maldive Islands, independent island country in the north-central Indian Ocean. It consists of a chain of about 1,200 small coral islands and sandbanks (some 200 of which are inhabited), grouped in clusters, or atolls.', 'Maldives', 'maldives.jpg', '2022-06-14', '2022-06-21', 4000),
(9, 'Bora Bora island will make you feel love at first sight. With ocean views  of turquoise waters resembling an artist’s palette of bright blues and greens, romantics from around the world appreciate Bora Bora’s, lush, tropical vegetation circling the perimeter of the island and the valleys of Mount Otemanu blossom with hibiscus.', 'Bora Bora', 'bora.jpg', '2022-09-07', '2022-09-13', 700),
(10, 'Burgas (also Bourgas) is a city on the Black Sea coast of Bulgaria. It is a large industrial centre with many tourist attractions in the region. Built by the sea and surrounded by lakes, Burgas offers relatively mild weather characterized by cooler summers and warmer winters.', 'Burgas', 'burgas.jpg', '2022-07-19', '2022-07-24', 400),
(11, 'New York, often called New York City (NYC) to distinguish it from the State of New York, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is also the most densely populated major city in the United States. Located at the southern tip of the state of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban area.', 'New York', 'newyork.jpg', '2022-07-31', '2022-08-06', 1700),
(12, 'The old walled city of Istanbul stands on a triangular peninsula between Europe and Asia. Sometimes as a bridge, sometimes as a barrier, Istanbul for more than 2,500 years has stood between conflicting surges of religion, culture, and imperial power. For most of those years it was one of the most coveted cities in the world.', 'Istanbul', 'istanbul.jpg', '2022-12-19', '2022-12-26', 500),
(13, 'Tokyo, formerly (until 1868) Edo, city and capital of Tokyo to (metropolis) and of Japan. It is located at the head of Tokyo Bay on the Pacific coast of central Honshu. It is the focus of the vast metropolitan area often called Greater Tokyo, the largest urban and industrial agglomeration in Japan.', 'Tokyo', 'tokyo.jpg', '2023-05-05', '2023-05-14', 3000),
(14, 'Welcome to London! Discover the best of London with Visit London, the official guide to England’s exciting capital. Find things to do in London, from iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events. If you’re not able to visit just yet, plan ahead to make the most of your next visit.', 'London', 'london.jpg', '2022-09-12', '2022-09-20', 900),
(15, 'Paris, city and capital of France, situated in the north-central part of the country. People were living on the site of the present-day city, located along the Seine River some 233 miles (375 km) upstream from the river’s mouth on the English Channel (La Manche), by about 7600 BCE. The modern city has spread from the island (the Île de la Cité) and far beyond both banks of the Seine.', 'Paris', 'paris.jpg', '2022-08-09', '2022-08-11', 800),
(16, 'Ayia Napa is most widely known for its nightlife scene and, while it serves up clubs and party venues in spades, that’s hardly all it offers travellers. Whether you’re an adventurous globetrotter looking for a Mediterranean destination with a mix of both nightlife and history and culture, or a family with absolutely no interest in nightlife activities but still looking for a fun and new destination, you can find lots to love in this popular town on Cyrpus eastern coast.', 'Ayia Napa', 'napa.jpg', '2022-11-08', '2022-11-12', 300),
(17, 'San Francisco holds a secure place in the United States’ romantic dream of itself—a cool, elegant, handsome, worldly seaport whose steep streets offer breathtaking views of one of the world’s greatest bays. According to the dream, San Franciscans are sophisticates whose lives hold full measures of such civilized pleasures as music, art, and good food. Their children are to be pitied, for, as the wife of publishing magnate Nelson Doubleday once said, “They will probably grow up thinking all cities are so wonderful.”', 'San Francisco', 'san.jpg', '2022-10-23', '2022-10-29', 1900),
(18, 'Zanzibar is a semi-autonomous archipelago off the coast of Tanzania, consisting of Zanzibar Island (locally, Unguja), Pemba Island, and many smaller islands. Zanzibar island is approximately 90 km long and 30 km wide.', 'Zanzibar', 'zanzibar.jpg', '2022-08-04', '2022-08-10', 700),
(19, 'Rio de Janeiro is home to some of the world’s friendliest people and most beautiful beaches. Brazil’s interracial history of Portuguese, Japanese, Indian, and German settlers has created a multicultural society, which has led to festivals and celebrations that are known all over the world.', 'Rio de janeiro', 'rio.jpg', '2022-09-01', '2022-09-06', 2300),
(20, 'Barcelona  is a city on the coast of northeastern Spain. It is the capital and largest city of the autonomous community of Catalonia, as well as the second most populous municipality of Spain. ', 'Barcelona', 'barcelona.jpg', '2022-07-05', '2022-07-11', 1700),
(21, 'Las Vegas, often known simply as Vegas, is the 26th-most populous city in the United States, the most populous city in the state of Nevada, and the county seat of Clark County. The city anchors the Las Vegas Valley metropolitan area and is the largest city within the greater Mojave Desert.[7] Las Vegas is an internationally renowned major resort city, known primarily for its gambling, shopping, fine dining, entertainment, and nightlife. The Las Vegas Valley as a whole serves as the leading financial, commercial, and cultural center for Nevada.', 'Las Vegas', 'vegas.jpg', '2022-09-23', '2022-09-28', 1600),
(22, 'Dubai, one of the seven united Arab emirates of the eponymous small country on the Arabian Peninsula, really leaves an impression with all its splendour and unique buildings. Travelling to Dubai is travelling to the city of contrasts where the vibrancy of a modern metropolis and the traditional desert life are intertwined.', 'Dubai', 'dubai.jpg', '2022-09-19', '2022-09-27', 1200),
(24, 'New Zealand is a land of great contrasts and diversity. Active volcanoes, spectacular caves, deep glacier lakes, verdant valleys, dazzling fjords, long sandy beaches, and the spectacular snowcapped peaks of the Southern Alps/Kā Tiritiri o te Moana on the South Island—all contribute to New Zealand’s scenic beauty. New Zealand also has a unique array of vegetation and animal life, much of which developed during the country’s prolonged isolation.', 'New Zealand', 'bb7b6dc5-e116-4808-843b-d16c1992a885.jpg', '2022-06-20', '2022-06-29', 3000),
(27, 'Israel is a small country with a relatively diverse topography, consisting of a lengthy coastal plain, highlands in the north and central regions, and the Negev desert in the south. Running the length of the country from north to south along its eastern border is the northern terminus of the Great Rift Valley.', 'Israel', '8d3465d1-751a-49e0-bda0-578ccc939a96.jpg', '2022-06-08', '2022-06-10', 2500);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `vacations`
--
ALTER TABLE `vacations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

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
