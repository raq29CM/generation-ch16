CREATE DATABASE ejercicio_relaciones;

USE ejercicio_relaciones;

-- Creacion de tablas
CREATE TABLE cohorte(
cohorte12_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
instructor_id INT NOT NULL,
numero_alumnos INT NOT NULL,
horario VARCHAR(255) NOT NULL,
tipo_sesiones VARCHAR(255) NOT NULL,
ciudad VARCHAR(255) NOT NULL
);

CREATE TABLE instructor (
instructor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL, 
edad INT NOT NULL, 
cumpleanios DATE NOT NULL, 
RFC varchar(255) NOT NULL, 
supervisor VARCHAR(255) NOT NULL, 
sesiones VARCHAR(255) NOT NULL);

CREATE TABLE direccion(
direccion_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
calle VARCHAR(255) NOT NULL,
pais VARCHAR(255) NOT NULL,
cp INT NOT NULL 
);

CREATE TABLE alumno(
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
CURP VARCHAR(255) NOT NULL,
RFC VARCHAR(255),
nivel_ingles VARCHAR (255) NOT NULL,
amonestaciones INT NOT NULL 
);

CREATE TABLE equipo(
equipo_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
nombre VARCHAR(255) NOT NULL,
cantidad_integrantes INT NOT NULL,
logo VARCHAR(255) NOT NULL
);

-- Llaves foraneas en cohorte
ALTER TABLE alumno
ADD CONSTRAINT fk_cohorte_alumno
FOREIGN KEY (alumno_id)
REFERENCES cohorte (alumno_id);

ALTER TABLE instructor
ADD CONSTRAINT fk_cohorte_instructor
FOREIGN KEY (instructor_id)
REFERENCES cohorte (instructor_id);

-- Llaves foraneas en equipo
ALTER TABLE alumno
ADD CONSTRAINT fk_equipo_alumno
FOREIGN KEY (alumno_id)
REFERENCES equipo (alumno_id);

-- Llaves foraneas en direccion
ALTER TABLE alumno
ADD CONSTRAINT fk_direccion_alumno
FOREIGN KEY (alumno_id)
REFERENCES direccion (alumno_id);

-- Llenado de tablas
-- Primero se llenan estas tablas: 
INSERT INTO cohorte(alumno_id, instructor_id, numero_alumnos, horario, tipo_sesiones, ciudad)
VALUES (1, 1, 48, '9AM - 6PM', 'Base de datos', 'CDMX'),
 (2, 2, 35, '9AM - 6PM', 'Java Script', 'CDMX');
 
INSERT INTO equipo(alumno_id, nombre, cantidad_integrantes, logo)
VALUES (1, 'Vaquitas Galacticas', 7, 'vacas'),
 (2, 'Kreilboings de mango', 6, 'castores');
 
INSERT INTO direccion(alumno_id, calle, pais, cp)
VALUES (1, 'Cerrada lluvia', 'México', 14408),
 (2, 'Pillalli', 'México', 14400);

-- Despues estas:
INSERT INTO instructor(instructor_id, nombre, edad, cumpleanios, RFC, supervisor, sesiones)
VALUES (1, 'Raul Sanchez', 35, '2022-05-26', 'SAMR900526J09', 'Marina', 'técnicas'),
 (2,'Victor Fernández', 35, '2022-08-16', 'FECV900816MT5', 'Marina', 'técnicas');
 
INSERT INTO alumno(alumno_id, nombre, edad, CURP, RFC, nivel_ingles, amonestaciones)
VALUES (1, 'Raquel Cruz', 25, 'CUMA961129MDFRRN09', 'CUMA961129JT2', 'C2', 0),
 (2, 'Diana Guapo', 27, 'GULD941030MDFRFMN6', 'GULD941030N07', 'C1', 0);

-- Esto solo esta en caso de querer verificar o en caso de error
-- verificar que se creo correctamente
SELECT * FROM cohorte;

-- Eliminar tablas
DROP TABLE cohorte;
DROP TABLE instructor;
DROP TABLE direccion;
DROP TABLE alumno;
DROP TABLE equipo;

-- Eliminar llaves foraneas
ALTER TABLE cohorte
DROP FOREIGN KEY fk_cohorte_alumno;
ALTER TABLE cohorte
DROP FOREIGN KEY fk_cohorte_instructor;
ALTER TABLE equipo
DROP FOREIGN KEY fk_equipo_alumno;
ALTER TABLE direccion
DROP FOREIGN KEY fk_direccion_alumno;