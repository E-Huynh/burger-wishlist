DROP DATABASE IF EXISTS burgers_db;
USE burgers_db;
CREATE TABLE burgers(
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(100),
    devour BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id),
);