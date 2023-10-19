-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: my_db
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admit`
--

DROP TABLE IF EXISTS `admit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admit` (
  `id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `fname` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `age` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `blood` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `addoc` varchar(45) DEFAULT NULL,
  `unit` varchar(45) DEFAULT NULL,
  `admitdate` varchar(45) DEFAULT NULL,
  `seat` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admit`
--

LOCK TABLES `admit` WRITE;
/*!40000 ALTER TABLE `admit` DISABLE KEYS */;
INSERT INTO `admit` VALUES (1234,'Merin','Md ........','020230625','29','Female','B+','Dhaka',NULL,'Emergency',NULL,NULL),(1234,'Merin','Md ........','020230625','29','Female','B-','BORISHAL',NULL,'General word',NULL,NULL),(7655,'Saira','Md ........','01724387907','14','Female','A+','Pabna',NULL,'General word',NULL,NULL),(7655,'Saira','Md ........','01724387907','14','Female','A+','Pabna',NULL,'General word',NULL,NULL),(157,'Maria','Md ........','087548765','76','Female','A-','DHANMONDI','Dr Jubin jamshed','General word','2023-08-03',NULL),(123,'Saira','Md Shakil','01724387907','7','Female','B+','Pabna','Dr. Shamima Sultana','General word','2023-08-07','General Bed'),(1234,'Munira','Md ........','087548765','26','Female','B+','DHANMONDI','Dr. Shamima Sultana','General word','2023-08-04','General Bed'),(9999,'Maria','Md Shakil','098654','18','Female','B+','dhaka','Dr. Shamim Ahmed','General word','2023-08-04','General Bed');
/*!40000 ALTER TABLE `admit` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-18 19:26:17
