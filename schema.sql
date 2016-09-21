CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE forsale(
	id INT AUTO_INCREMENT NOT NULL,
		product VARCHAR(50) NOT NULL,
		departmentField VARCHAR(50) NOT NULL,
		price DECIMAL (10,2) NOT NULL,
		quantity INT(10) NOT NULL,
		primary key(id)
);

SELECT * FROM forsale;