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
-- Table structure for table `bill`
--

DROP TABLE IF EXISTS `bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bill` (
  `billid` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `id` int DEFAULT NULL,
  `bdate` varchar(45) DEFAULT NULL,
  `totalbill` varchar(45) DEFAULT NULL,
  `commision` varchar(45) DEFAULT NULL,
  `subtotal` varchar(45) DEFAULT NULL,
  `consultant` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`billid`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bill`
--

LOCK TABLES `bill` WRITE;
/*!40000 ALTER TABLE `bill` DISABLE KEYS */;
INSERT INTO `bill` VALUES (1,'Munira',0,NULL,NULL,NULL,NULL,NULL),(2,'Munira',0,NULL,NULL,NULL,'700',NULL),(3,'fds',0,NULL,NULL,NULL,'1000',NULL),(5,'2160',0,'Dengue IgG','2400','10',NULL,NULL),(8,'Munira',0,NULL,'5','997.5','1050',NULL),(9,'Munira',1234,NULL,'819','9','900',NULL),(10,'Munira',1234,NULL,'675','10','750',NULL),(12,'Munira',1234,NULL,'1350','10','1500',NULL),(14,'Munira',1234,NULL,'1500','10','1350',NULL),(16,'Munira',1234,NULL,'1500','10','1350',NULL),(18,'Munira',1234,NULL,'500','4','480',NULL),(19,'Munira',1234,NULL,'1150','10','1035',NULL),(20,'Munira',1234,NULL,'500','6','470',NULL),(21,NULL,0,NULL,NULL,NULL,NULL,NULL),(22,'Munira',1234,NULL,'1900','10','1710',NULL),(23,'Munira',1234,NULL,'2000','10','1800',NULL),(24,NULL,0,NULL,NULL,NULL,NULL,NULL),(25,'Munira',1234,NULL,'2000','10','1800',NULL),(26,NULL,0,NULL,NULL,NULL,NULL,NULL),(27,'Munira',1234,NULL,'1000','6','940',NULL),(28,'Munira',1234,'2023-08-07','1100','15','935',NULL),(29,'Merin',5555,'2023-08-09','1000','10','900',NULL),(30,'Merin',5555,'2023-08-08','600','10','540','Dr. Ahmed Mustofa Zaman'),(31,'Merin',5555,NULL,'1600','5','1520','Dr. Tamanna  Rahman'),(32,'Saira',123,'2023-08-11','600','5','570','Dr. Price Mahmud1'),(33,'Saira',123,'2023-08-09','1450','10','1305','Dr. Rashedul Alam'),(34,'Merin',5555,'2023-08-09','950','10','855','Dr. Shamima Sultana'),(35,'Munira',1234,'2023-08-21','1150','10','1035','Dr. Shamima Sultana'),(36,'Merin',5555,'2023-08-21','950','10','855','Dr. Shamima Sultana'),(37,NULL,0,NULL,NULL,NULL,NULL,NULL),(38,NULL,0,NULL,NULL,NULL,NULL,NULL),(39,'Merin',5555,'2023-08-21','950','10','855','Dr. Shamima Sultana'),(40,NULL,0,NULL,NULL,NULL,NULL,NULL),(41,'Munira',1234,'2023-09-09','1550','10','1395','Dr. Shamim Ahmed');
/*!40000 ALTER TABLE `bill` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-18 19:26:16
