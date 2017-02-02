-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 02, 2017 at 10:29 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `pokemonnocturne`
--

-- --------------------------------------------------------

--
-- Table structure for table `pkmteam`
--

CREATE TABLE IF NOT EXISTS `pkmteam` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pkm1` int(11) DEFAULT NULL,
  `pkm2` int(11) DEFAULT NULL,
  `pkm3` int(11) DEFAULT NULL,
  `pkm4` int(11) DEFAULT NULL,
  `pkm5` int(11) DEFAULT NULL,
  `pkm6` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `pkm2Id` (`pkm2`),
  UNIQUE KEY `pkm3Id` (`pkm3`),
  UNIQUE KEY `pkm4Id` (`pkm4`),
  UNIQUE KEY `pkm5Id` (`pkm5`),
  UNIQUE KEY `pkm6Id` (`pkm6`),
  KEY `pkm1Id` (`pkm1`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `pokemon`
--

CREATE TABLE IF NOT EXISTS `pokemon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `type1` int(11) NOT NULL,
  `type2` int(11) DEFAULT NULL,
  `hp` int(11) NOT NULL,
  `atk` int(11) NOT NULL,
  `def` int(11) NOT NULL,
  `atkSp` int(11) NOT NULL,
  `defSp` int(11) NOT NULL,
  `spe` int(11) NOT NULL,
  `imgPokemon` varchar(255) NOT NULL,
  `spriteFront` varchar(255) NOT NULL,
  `spriteBack` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `typeId1` (`type1`),
  UNIQUE KEY `typeId2` (`type2`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `pokemon`
--

INSERT INTO `pokemon` (`id`, `name`, `type1`, `type2`, `hp`, `atk`, `def`, `atkSp`, `defSp`, `spe`, `imgPokemon`, `spriteFront`, `spriteBack`) VALUES
(1, 'Feunnec', 1, NULL, 40, 45, 40, 62, 60, 60, 'http://www.pokepedia.fr/images/archive/6/62/20130519161117%21Feunnec-XY.png', 'http://www.pokepedia.fr/images/c/cc/Sprite_6_x_653.png', 'http://www.pokepedia.fr/images/2/2f/Sprite_6_dos_653.png'),
(2, 'Grenousse', 2, NULL, 41, 56, 40, 62, 44, 71, 'http://www.pokepedia.fr/images/archive/8/82/20141019225238%21Grenousse-XY.png', 'http://www.pokepedia.fr/images/0/05/Sprite_6_x_656.png', 'http://www.pokepedia.fr/images/1/17/Sprite_6_dos_656.png'),
(3, 'Marisson', 3, NULL, 56, 71, 65, 48, 45, 38, 'http://www.pokepedia.fr/images/archive/c/ce/20130519160840%21Marisson-XY.png', 'http://www.pokepedia.fr/images/c/c6/Sprite_6_x_650.png', 'http://www.pokepedia.fr/images/f/f5/Sprite_6_dos_650.png');

-- --------------------------------------------------------

--
-- Table structure for table `trainer`
--

CREATE TABLE IF NOT EXISTS `trainer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `sexe` char(1) NOT NULL,
  `team` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`),
  KEY `team` (`team`),
  KEY `team_2` (`team`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE IF NOT EXISTS `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `type`
--

INSERT INTO `type` (`id`, `name`) VALUES
(1, 'Feu'),
(2, 'Eau'),
(3, 'Plante'),
(4, 'Electrik');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pkmteam`
--
ALTER TABLE `pkmteam`
  ADD CONSTRAINT `pkm1Id` FOREIGN KEY (`pkm1`) REFERENCES `pokemon` (`id`),
  ADD CONSTRAINT `pkm2Id` FOREIGN KEY (`pkm2`) REFERENCES `pokemon` (`id`),
  ADD CONSTRAINT `pkm3Id` FOREIGN KEY (`pkm3`) REFERENCES `pokemon` (`id`),
  ADD CONSTRAINT `pkm4Id` FOREIGN KEY (`pkm4`) REFERENCES `pokemon` (`id`),
  ADD CONSTRAINT `pkm5Id` FOREIGN KEY (`pkm5`) REFERENCES `pokemon` (`id`),
  ADD CONSTRAINT `pkm6Id` FOREIGN KEY (`pkm6`) REFERENCES `pokemon` (`id`);

--
-- Constraints for table `pokemon`
--
ALTER TABLE `pokemon`
  ADD CONSTRAINT `typeId1` FOREIGN KEY (`type1`) REFERENCES `type` (`id`),
  ADD CONSTRAINT `typeId2` FOREIGN KEY (`type2`) REFERENCES `type` (`id`);

--
-- Constraints for table `trainer`
--
ALTER TABLE `trainer`
  ADD CONSTRAINT `pkmteamid` FOREIGN KEY (`team`) REFERENCES `pkmteam` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
