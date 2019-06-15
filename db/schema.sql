DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;
USE `burgers_db`;

CREATE TABLE burgers (
    `id` Int( 20 ) AUTO_INCREMENT NOT NULL,
    `burgerName` VARCHAR( 255 ) NOT NULL,
    devoured BOOLEAN default false,
    `created_at` DATETIME NOT NULL,
	PRIMARY KEY ( `id` )
);