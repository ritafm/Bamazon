DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);



INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("flamingo", "garden", 23.00, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lounger", "hom", 62.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pumpkin", "produce", 2.50, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("gnome", "garden", 14.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vase", "home", 22.00, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("apple", "produce", .75, 10000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shovel", "garden", 15.00, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pillow", "home", 30.00, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tomato", "produce", 2.00, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("rake", "garden", 33.50, 100);
