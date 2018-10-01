CREATE TABLE "movies" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR(255) NOT NULL,
	"genre" VARCHAR(50) NOT NULL,
	"release_date" DATE,
	"image_path" VARCHAR(255),
	"genre_id" INT
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
('SCREAM', 3, '2001/10/20', 
'http://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/scream_2.jpg?itok=G6ZHZNOZ', 
'1h 51m');