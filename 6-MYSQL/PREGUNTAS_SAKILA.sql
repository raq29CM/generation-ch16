-- TITULO DE PELICULAS CON EL IDIOMA QUE TIENE
SELECT title, language_id FROM film GROUP BY title;

-- QUE ACTORES HAN TRABAJADO EN PELICULAS FRANCESAS 
-- R: Ninguno (todas las peliculas estan en ingles)
SELECT film.film_id, film.title, actor.first_name, actor.last_name  FROM film 
INNER JOIN film_actor ON film.film_id = film_actor.film_id 
INNER JOIN actor on film_actor.actor_id = actor.actor_id
INNER JOIN language on film.language_id = language.language_id
INNER JOIN film_category on film.film_id = film_category.film_id 
WHERE category_id = 9 AND language.name = 'French';


