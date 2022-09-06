USE world;

-- Ver toda la informacion de toda la tabla
SELECT * FROM country;

-- Ver nombre y poblacion en orden descendente
SELECT Name, Population FROM country ORDER BY Population DESC;

-- Ver nombre y poblacion de México
SELECT Name, Population FROM country WHERE Name = 'Mexico';

-- Ver todas las columnas de México
SELECT * FROM country WHERE Name = 'Mexico';

-- Realizar operaciones y poner alias
SELECT 5+5 AS suma;

-- Operaciones con los datos y dar alias
SELECT sum(Population) AS PoblacionMundial FROM country;

-- Uso de alias para cambiar nombres
SELECT  Name AS 'Nombre del pais', Population AS 'Poblacion del pais' FROM country ORDER BY Population DESC;

-- Mostrar datos sin duplicados
SELECT DISTINCT Continent FROM country;

-- Clausula: WHERE
-- Se puede usar con: < > >= <= != =
SELECT * FROM country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy DESC;

SELECT * FROM country WHERE Continent != 'North America' ORDER BY Continent ASC;
