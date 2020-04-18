DROP TABLE IF EXISTS users, usersCredentials;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  PRIMARY KEY (id)
);


CREATE TABLE usersCredentials (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(25),
  password VARCHAR(100),
  PRIMARY KEY (id),
  UNIQUE KEY (username)
);

INSERT INTO users
	(first_name, last_name)
VALUES 
  
  ("Devina","Mendez"),
  ("Gilbert","Mendez"),
  ("Will","Ragan"),
  ("Aleah","Ragan"),
  ("Nathan","Villegas"),
  ("Brittney","Gillaspie"),
  ("Bruce","Wayne"),
  ("Alison","Bookamer"),
  ("Jani","Budlight"),
  ("Buddy","Guy");



