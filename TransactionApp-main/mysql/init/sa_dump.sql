-- MySQL dump 10.13  Distrib 8.0.44, for Linux (x86_64)
--
-- Host: localhost    Database: sa
-- ------------------------------------------------------
-- Server version	8.0.44-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `inter_staff`
--

DROP TABLE IF EXISTS `inter_staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inter_staff` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `birthdate` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inter_staff`
--

LOCK TABLES `inter_staff` WRITE;
/*!40000 ALTER TABLE `inter_staff` DISABLE KEYS */;
INSERT INTO `inter_staff` VALUES ('7c13dcea-41aa-4c4a-9c08-61159bca3e08','Charlie Introvert','2000-02-27'),('a3b12f56-9c1e-4ea2-8f0c-d1de8cbf1aa1','Alice Inter','1994-05-12'),('f9d82c45-3bb1-4e5b-a9b4-928fe3e87f32','Bob Shy','1988-11-03');
/*!40000 ALTER TABLE `inter_staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_data`
--

DROP TABLE IF EXISTS `menu_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu_data` (
  `name` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `id` int NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_data`
--

LOCK TABLES `menu_data` WRITE;
/*!40000 ALTER TABLE `menu_data` DISABLE KEYS */;
INSERT INTO `menu_data` VALUES ('Black tea',40,'Drink',3),('Chicken Crisp',60,'Drink',4),('Coke',60,'Drink',2),('Fries',40,'Food',1),('Hamberger',120,'Food',0);
/*!40000 ALTER TABLE `menu_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `outer_staff`
--

DROP TABLE IF EXISTS `outer_staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `outer_staff` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `birthdate` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `outer_staff`
--

LOCK TABLES `outer_staff` WRITE;
/*!40000 ALTER TABLE `outer_staff` DISABLE KEYS */;
INSERT INTO `outer_staff` VALUES ('7c13dcea-41aa-4c4a-9c08-61159bca3e08','Charlie Brave','2000-02-27'),('a3b12f56-9c1e-4ea2-8f0c-d1de8cbf1aa1','Alice Outer','1994-05-12'),('f9d82c45-3bb1-4e5b-a9b4-928fe3e87f32','Bob Outwrd','1988-11-03');
/*!40000 ALTER TABLE `outer_staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `id` varchar(255) NOT NULL,
  `orderId` varchar(50) NOT NULL,
  `orderName` varchar(100) NOT NULL,
  `orderPrice` int NOT NULL,
  `orderQuantity` int NOT NULL,
  `timeStamp` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` VALUES ('11f70bbf-6b0b-47ab-b857-e6c65db5f0a5','dc494030-476b-4bde-b5dd-c21ff942e7c1','Hamberger',120,2,'2025-11-25 05:47:41'),('26baa244-60c3-4ac5-8864-10c64b856ab1','d0779c88-778c-44e9-bdab-2d69278b52c7','Hamberger',120,5,'2025-11-24 19:44:14'),('2e63595e-04a9-44d5-bd4b-7c6eabb3a3c0','e71bce90-df85-4c80-8104-6f6785bae334','Hamberger',120,6,'2025-11-25 08:12:35'),('64e9b40b-e10a-4731-b129-d428ae04d6eb','3cbd9ed3-5293-4c87-8003-1449c021dc94','Hamberger',120,4,'2025-11-25 07:59:53'),('f27d376e-fce7-4ab5-a1f8-81d3353cb615','a27d4268-6934-4425-add9-3b6e7bc47ca5','Hamberger',120,6,'2025-11-25 07:59:09');
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-10 22:42:13
