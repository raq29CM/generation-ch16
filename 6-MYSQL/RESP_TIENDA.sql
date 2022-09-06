USE tienda;
SELECT * FROM compra;
CREATE TABLE compra(
order_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
cliente_id INT NOT NULL,
fecha_compra DATE NOT NULL,
total DECIMAL(5,2) NOT NULL,
cantidad_productos INT NOT NULL
);

SELECT * FROM clientes;
CREATE TABLE clientes(
cliente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL, 
telefono CHAR(50) NOT NULL, 
direccion VARCHAR(150) NOT NULL
);
INSERT INTO clientes(nombre, apellido, telefono, direccion)
VALUES ('Pedro', 'Paramo', '55555555234', 'Comala'),
 ('Raul', 'Sanchez', '55555555234', 'Comala'),
 ('Victor', 'Fernández', '55555555234', 'Comala');

-- Agregar llave foránea
ALTER TABLE compra
ADD CONSTRAINT fk_clientes_compra
FOREIGN KEY (cliente_id)
REFERENCES clientes (cliente_id);

-- Borrar llave foránea
ALTER TABLE compra
DROP FOREIGN KEY fk_clientes_compra;

INSERT INTO compra(cliente_id, fecha_compra, total, cantidad_productos)
VALUES (3, '2022-09-06', 300.50, 2);

DROP TABLE compra;

