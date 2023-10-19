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
-- Table structure for table `bill_details`
--

DROP TABLE IF EXISTS `bill_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bill_details` (
  `id` int DEFAULT NULL,
  `billid` int NOT NULL,
  `tid` int DEFAULT NULL,
  `tname` varchar(45) DEFAULT NULL,
  `price` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bill_details`
--

LOCK TABLES `bill_details` WRITE;
/*!40000 ALTER TABLE `bill_details` DISABLE KEYS */;
INSERT INTO `bill_details` VALUES (1234,0,0,'Cross Matching',NULL),(1234,0,0,'Blood Group + Rh Factor',NULL),(0,0,0,NULL,NULL),(1234,23,1108,'Dengue IgG',NULL),(1234,23,1106,'Package for Blood donor',NULL),(1234,25,1108,'Dengue IgG','500'),(1234,25,1106,'Package for Blood donor','1500'),(1234,25,1108,'Dengue IgG','500'),(1234,25,1106,'Package for Blood donor','1500'),(1234,25,1106,'Package for Blood donor','1500'),(1234,25,1108,'Dengue IgG','500'),(1234,26,1106,'Package for Blood donor','1500'),(1234,26,1107,'Dengue Igm','500'),(1234,27,1108,'Dengue IgG','500'),(1234,27,1107,'Dengue Igm','500'),(1234,28,1110,'Plain X-ray Abdomen','550'),(1234,28,1109,'X-ray Chest PA-View','550'),(5555,29,1107,'Dengue Igm','500'),(5555,29,1108,'Dengue IgG','500'),(5555,30,1105,'Urine RE','150'),(5555,30,1101,'CBC','450'),(5555,31,1103,'Blood Group + Rh Factor','100'),(5555,31,1106,'Package for Blood donor','1500'),(123,32,1104,'Cross Matching','400'),(123,32,1102,'RBC','200'),(123,33,1108,'Dengue IgG','500'),(123,33,1107,'Dengue Igm','500'),(123,33,1101,'CBC','450'),(5555,34,1107,'Dengue Igm','500'),(5555,34,1101,'CBC','450'),(1234,35,1107,'Dengue Igm','500'),(1234,35,1102,'RBC','200'),(1234,35,1101,'CBC','450'),(5555,36,1101,'CBC','450'),(5555,36,1107,'Dengue Igm','500'),(5555,39,1101,'CBC','450'),(5555,39,1107,'Dengue Igm','500'),(1234,41,1111,'USG Pregnancy Profile','600'),(1234,41,1110,'Plain X-ray Abdomen','550'),(1234,41,1104,'Cross Matching','400');
/*!40000 ALTER TABLE `bill_details` ENABLE KEYS */;
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
