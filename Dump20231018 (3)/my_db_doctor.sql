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
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor` (
  `doc_id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `specialist` varchar(45) DEFAULT NULL,
  `experiance` varchar(45) DEFAULT NULL,
  `followup` varchar(45) DEFAULT NULL,
  `fee` varchar(45) DEFAULT NULL,
  `img` varchar(45) DEFAULT NULL,
  `totalpatient` varchar(45) DEFAULT NULL,
  `commission` varchar(45) DEFAULT NULL,
  `total` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`doc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES (111,'Dr. Price Mahmud1','price542@gmail.com','Opthalmologist','10 Years','Thursday-Friday, 9am-6pm','800','./assets/d5.jpg',NULL,NULL,NULL),(112,'Dr. khondoker tina','tina5434@gmail.com','Medicine','13 Years','Thursday-Friday, 9am-6pm','700','./assets/d1.jpg',NULL,NULL,NULL),(113,'Dr. Masum Parvez1','parvez7654@gmail.com','Radiology','15 Years','Sunday-Friday,9am-5pm','800','./assets/d3.jpg',NULL,NULL,NULL),(115,'Dr. Tamanna  Rahman','tamnna987@gmail.com','Gynecologist','13 Years','Sunday-Friday,9am-5pm','600','./assets/d5.jpg',NULL,NULL,NULL),(239,'Dr. Ahmed Mustofa Zaman','mustofazaman43@gmail.com','Cardiology','12 Years','Saturday-Friday, 9am-7pm','600','./assets/d2.jpg',NULL,NULL,NULL),(244,'Dr. Shamima Sultana','shamima542@gmail.com','Gynecologist','11','Monday-Tuesday,10am-7pm','500','./assets/d4.jpg',NULL,NULL,NULL),(255,'Dr. Ajmeri haque','ajmeri786@gmail.com','Pediatrician','15 Years','Thursday-Friday, 9am-6pm','700','./assets/d7.jpg',NULL,NULL,NULL),(1001,'Dr. Abdul  Hamid','hamid100@gmail.com','Opthalmologist','10 Years','Thursday-Friday, 9am-6pm','700','./assets/d3.jpg',NULL,NULL,NULL),(1002,'Dr. Shamim Ahmed','shamim021@gmail.com','medicine','15 Years','Saturday-Friday, 9am-7pm','600','./assets/d3.jpg',NULL,NULL,NULL),(1003,'Dr. Jannatul Ferdous','jannatul869@gmail.com','Cardiology','7 Years','Monday-Tuesday,10am-7pm','700','./assets/d1.jpg',NULL,NULL,NULL),(1004,'Dr. Rashedul Alam','rashed@gmail.com','Neurology','12 Years','Saturday-Friday, 9am-7pm','600','./assets/d3.jpg',NULL,NULL,NULL);
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
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
