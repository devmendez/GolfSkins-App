DROP TABLE IF EXISTS players, playersCredentials;

CREATE TABLE players (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  PRIMARY KEY (id)
);


CREATE TABLE playersCredentials (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(25),
  password VARCHAR(100),
  PRIMARY KEY (id),
  UNIQUE KEY (username)
);

INSERT INTO players
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



