ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '!!!MySQL123!!!';

DROP DATABASE IF EXISTS Bamazon_db;

CREATE DATABASE Bamazon_db;

CREATE TABLE products (
  itemId INT NOT NULL AUTO_INCREMENT,
  productName VARCHAR(100) NULL,
  departmentName VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stockQuantity INT NULL,
  PRIMARY KEY (id)
);


INSERT INTO products (productName,departmentName,price,stockQuantity)
VALUES ("Hoka Women's Running Shoes", "women's shoes", 165.49, 204);

INSERT INTO products (productName,departmentName,price,stockQuantity)
VALUES ("Adidas XAll Terrain Ultraboost Shoes", "women's shoes", 144.43, 215);

INSERT INTO products (productName,departmentName,price,stockQuantity)
VALUES ("Gund Nuzzle Nestly Dog", "babies", 29.16, 411);

INSERT INTO products (productName,departmentName,price,stockQuantity)
VALUES ("Burt's Bees Onsie 5-Pack 12mos", "babies", 24.95, 1,000);

INSERT INTO products (productName,departmentName,price,stockQuantity)
VALUES ("Canvas Mountaineering Backpack", "hiking", 29.99, 993);

INSERT INTO products (productName,departmentName,price,stockQuantity)
VALUES ("Rotibox Bluettoth Beanie Hat", "hiking", 29.99, 280);

INSERT INTO products (productName,departmentName,price,stockQuantity)
VALUES ("iphone7", "electronics", 799.99, 731);

INSERT INTO products (productName,departmentName,price,stockQuantity)
VALUES ("MacBook Pro", "electronics", 1200, 130);


INSERT INTO products (productName,departmentName,price,stockQuantity)
VALUES ("iphone6", "electronics", 90, 150);


INSERT INTO products (productName,departmentName,price,stockQuantity)
VALUES ("Video BabyMonitor Animeate Digital", "babies", 75.99, 772);


SELECT * FROM Bamazon_db.products; 



