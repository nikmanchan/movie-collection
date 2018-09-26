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