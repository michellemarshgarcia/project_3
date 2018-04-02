### Customer Schema

CREATE DATABASE customer_db;

DROP DATABASE customer_db IF EXISTS;

USE customer_db;

CREATE TABLE customers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(40) NOT NULL,
	email varchar(50) NOT NULL,
	phone int NOT NULL,
    type varchar(20) NOT NULL,
	customerId int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (customerId) REFERENCES customer(Id)
);

CREATE TABLE cookies
(
    theme varchar(40) NOT NUll,
);
