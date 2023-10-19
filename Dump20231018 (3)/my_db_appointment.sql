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
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointment` (
  `id` int NOT NULL,
  `serial` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `age` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `specialist` varchar(45) DEFAULT NULL,
  `blood` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `fee` varchar(45) DEFAULT NULL,
  `consultant` varchar(45) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `doc_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment`
--

LOCK TABLES `appointment` WRITE;
/*!40000 ALTER TABLE `appointment` DISABLE KEYS */;
INSERT INTO `appointment` VALUES (3,'10','tanvir','28','Male','Dhaka','Neurology','AB+','01987533284','2023-08-09','600','Dr. Rashedul Alam',122,1004),(4,'143','Munira','26','Female','Pabna','Gynecologist','B-','01724387907','2023-07-20','700','Dr. Shamima Sultana',1234,244),(100,'012','Maria','40','Female','Mirpur','Radiology','O-','0986432418','2023-08-10','800','Dr. Masum Parvez1',111,113),(105,'19','Sharif','25','Male','Dhaka','Medicine','A+','087548765','2023-08-11','700','Dr. khondoker tina',133,112),(108,'103','Saira','14','Female','Pabna','Gynecologist','B+','01724387907','2023-08-10','600','Dr. Tamanna  Rahman',123,115),(129,'104','Merin','29','Female','Dhaka','Gynecologist','AB-','098654','2023-08-20','700','Dr. Shamima Sultana',5555,244),(130,'104','Sharif','25','Male','dhaka','Cardiology','A+','0189754322','2023-08-10','600','Dr. Ahmed Mustofa Zaman',133,239),(198,'101','Munira','26','Female','Dhaka','Medicine','B-','098654','2023-08-10','700','Dr. khondoker tina',1234,112),(764,'011','Merin','29','Female','DHANMONDI','Gynecologist','B+','087548765','2023-08-11','600','Dr. Tamanna  Rahman',5555,115),(965,'05','Saira','14','Female','Pabna','Cardiology','B+','01724387907','2023-08-12','700','Dr. Jannatul Ferdous',123,1003),(984,'09','Munira','26','Female','dhaka','Medicine','B+','087548765','2023-08-10','600','Dr. Shamim Ahmed',1234,1002),(1076,'102','Saira','14','Female','Pabna','Pediatrician','B+','01724387907','2023-08-09','700','Dr. Ajmeri haque',123,255),(1100,'32','Maria','40','Female','dhaka','Cardiology','B-','098654','2023-08-04','600','Dr. Ahmed Mustofa Zaman',111,239),(1234,'102','Munira','26','Female','Dhaka','Opthalmologist','AB+','0172543986','2023-07-20','800','Dr. Price Mahmud1',1234,111),(3456,'08','Sharif','25','Male','Dhaka','Medicine',NULL,'020230625','2023-08-11','600','Dr. Shamim Ahmed',133,1002),(5555,'101','Merin','29','Female','dhaka','Gynecologist','A+','0155436787','2023-07-20','700','Dr. Shamima Sultana',5555,244),(8888,'103','fds','66','Male','DHANMONDI','Opthalmologist','O-','087548765','2023-07-19','800','Dr. Price Mahmud1',876,111),(9764,'013','Merin','29','Female','DHANMONDI','Gynecologist','B+','087548765','2023-08-12','600','Dr. Tamanna  Rahman',5555,115),(9988,'07','Merin','29','Female','Dhaka','Opthalmologist','AB+','0987654335','2023-08-09','700','Dr. Abdul  Hamid',5555,1001);
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;
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
