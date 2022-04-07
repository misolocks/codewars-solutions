/************************************************************ 
Challenge: Two actors who cast together the most

Description:
Given the the schema presented below find two actors who cast together the most and list titles of only those movies they were casting together. Order the result set alphabetically by the movie title.

Table film_actor
    Column     | Type                        | Modifiers
    ------------+-----------------------------+----------
    actor_id    | smallint                    | not null
    film_id     | smallint                    | not null

Table actor
    Column     | Type                        | Modifiers
    ------------+-----------------------------+----------
    actor_id    | integer                     | not null 
    first_name  | character varying(45)       | not null
    last_name   | character varying(45)       | not null

Table film
    Column     | Type                        | Modifiers
    ------------+-----------------------------+----------
    film_id     | integer                     | not null
    title       | character varying(255)      | not null

The desired output:
    first_actor | second_actor | title
    ------------+--------------+--------------------
    John Doe    | Jane Doe     | The Best Movie Ever

first_actor - Full name (First name + Last name separated by a space)
second_actor - Full name (First name + Last name separated by a space)
title - Movie title

Note: actor_id of the first_actor should be lower then actor_id of the second_actor
*************************************************************/

SELECT 
  CONCAT(A1.first_name,' ', A1.last_name) first_actor,
  CONCAT(A2.first_name,' ', A2.last_name) second_actor,
  F.title
FROM
(
  SELECT ROW_NUMBER() OVER (ORDER BY COUNT(*) DESC) row_num, FA1.actor_id A1, FA2.actor_id A2
  FROM film_actor FA1
  INNER JOIN film_actor FA2 ON FA1.film_id = FA2.film_id AND FA1.actor_id < FA2.actor_id
  GROUP BY FA1.actor_id , FA2.actor_id 
) PA
INNER JOIN film_actor  FA1 ON FA1.actor_id=PA.A1
INNER JOIN film_actor FA2 ON FA2.actor_id=PA.A2 and FA1.film_id=FA2.film_id
INNER JOIN actor A1 ON A1.actor_id=FA1.actor_id
INNER JOIN actor A2 ON A2.actor_id=FA2.actor_id 
INNER JOIN film F ON F.film_id=FA1.film_id
WHERE PA.row_num=1
ORDER BY 3 ASC
