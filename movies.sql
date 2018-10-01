CREATE TABLE "movies" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR(255) NOT NULL,
	"release_date" DATE,
	"image_path" VARCHAR(255),
	"genre_id" INT,
	"run_time" VARCHAR(9) NOT NULL
);

CREATE TABLE "genres" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(50) NOT NULL
);

INSERT INTO "genres"
("name")
VALUES
('action'), ('adventure'), ('comedy'), ('crime'), 
('drama'), ('epic'), ('horror'), ('musical'), 
('science fiction'), ('war'), ('westerns');

INSERT INTO "movies"
("title", "genre_id", "release_date", "image_path", "run_time")
VALUES
('SCREAM', 7, '2001/10/20', 'http://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/scream_2.jpg?itok=G6ZHZNOZ', '1h 51m'),
('Despicable Me', 3, '2010/07/09', 'https://images-na.ssl-images-amazon.com/images/I/91FS9l0XJIL._SL1500_.jpg', '1h 34m'),
('Star Wars: The Last Jedi', 1, '2017/12/15', 'https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg', '2h 4m');