/*
SQLyog Ultimate v11.11 (32 bit)
MySQL - 5.1.37 : Database - db_bengkel
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_bengkel` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `db_bengkel`;

/*Table structure for table `akses_token` */

DROP TABLE IF EXISTS `akses_token`;

CREATE TABLE `akses_token` (
  `id_akses_token` int(20) NOT NULL AUTO_INCREMENT,
  `id_user` int(10) DEFAULT NULL,
  `acces_token` tinytext,
  `ip_address` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_akses_token`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `akses_token_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `t_user` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `akses_token` */

/*Table structure for table `t_level` */

DROP TABLE IF EXISTS `t_level`;

CREATE TABLE `t_level` (
  `id_level` int(10) NOT NULL AUTO_INCREMENT,
  `nama_level` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_level`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `t_level` */

insert  into `t_level`(`id_level`,`nama_level`) values (1,NULL);

/*Table structure for table `t_montir` */

DROP TABLE IF EXISTS `t_montir`;

CREATE TABLE `t_montir` (
  `id_montir` int(10) NOT NULL AUTO_INCREMENT,
  `Nama_montir` varchar(20) DEFAULT NULL,
  `harga_perjam` int(20) DEFAULT NULL,
  PRIMARY KEY (`id_montir`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `t_montir` */

insert  into `t_montir`(`id_montir`,`Nama_montir`,`harga_perjam`) values (1,'dedi',20000),(2,'fiki',25000);

/*Table structure for table `t_service` */

DROP TABLE IF EXISTS `t_service`;

CREATE TABLE `t_service` (
  `id_service` int(10) NOT NULL AUTO_INCREMENT,
  `tgl_service` date DEFAULT NULL,
  `id_user` int(10) DEFAULT NULL,
  `id_montir` int(10) DEFAULT NULL,
  `jumlah_sparepart` int(20) DEFAULT NULL,
  `id_sparepart` int(10) DEFAULT NULL,
  PRIMARY KEY (`id_service`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `t_service` */

insert  into `t_service`(`id_service`,`tgl_service`,`id_user`,`id_montir`,`jumlah_sparepart`,`id_sparepart`) values (1,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `t_sparepart` */

DROP TABLE IF EXISTS `t_sparepart`;

CREATE TABLE `t_sparepart` (
  `id_sparepart` int(10) NOT NULL AUTO_INCREMENT,
  `nama_sparepart` varchar(20) DEFAULT NULL,
  `harga_sparepart` int(20) DEFAULT NULL,
  `satuan` int(20) DEFAULT NULL,
  PRIMARY KEY (`id_sparepart`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `t_sparepart` */

insert  into `t_sparepart`(`id_sparepart`,`nama_sparepart`,`harga_sparepart`,`satuan`) values (1,'Oli',20000,0),(2,'Ban',30000,0);

/*Table structure for table `t_user` */

DROP TABLE IF EXISTS `t_user`;

CREATE TABLE `t_user` (
  `id_user` int(10) NOT NULL AUTO_INCREMENT,
  `nama_user` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `level` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `t_user` */

insert  into `t_user`(`id_user`,`nama_user`,`email`,`password`,`level`) values (1,'Mila','mila@gmail.com','1234','1'),(2,'Vera','vera@gmail.com','4321','2');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
