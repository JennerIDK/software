-- ==========================================
-- DATOS BASE (DEPENDENCIAS)
-- ==========================================

-- Tipos de productos
INSERT INTO tipo_producto(nombre) VALUES ('Gorras');

-- Productos (Gorras)
INSERT INTO productos (nombre, precio, stock, estado, id_tipo) VALUES 
('Gorra AVICCI', 49.90, 25, 'Disponible', 1),
('Gorra Marea Originals', 39.90, 18, 'Disponible', 1),
('Gorra RVCA 59FIFTY', 59.90, 12, 'Disponible', 1),
('Gorra RVCA Essentials', 44.90, 30, 'Disponible', 1);

-- Usuarios
INSERT INTO usuarios (nombre, email, password, rol, estado) VALUES
('Juan Pérez', 'juan.perez@gmail.com', 'password1', 'Administrador', 'ACTIVO'),
('Ana García', 'ana.garcia@gmail.com', 'password2', 'Empleado', 'ACTIVO'),
('Carlos Ruiz', 'carlos.ruiz@gmail.com', 'password3', 'Empleado', 'INACTIVO'),
('Maria López', 'maria.lopez@gmail.com', 'password4', 'Invitado', 'ACTIVO'),
('David Sánz', 'david.sanz@gmail.com', 'password5', 'Administrador', 'ACTIVO');


-- ==========================================
-- MOVIMIENTOS CRONOLÓGICOS
-- ==========================================

-- =============================
--      MES: 2025-01
-- =============================

-- Ingreso de stock
INSERT INTO ingresos (id_producto, cantidad, descripcion, fecha_ingreso) VALUES 
(4, 10, 'Ingreso inicial de Gorras RVCA Essentials', '2025-01-03 09:00:00');

-- Venta 1
INSERT INTO ventas (id_usuario, total, fecha_venta) VALUES 
(5, 99.80, '2025-01-07 13:08:00');

INSERT INTO detalle_venta (id_venta, id_producto, cantidad, precio_unitario) VALUES 
(1, 1, 2, 49.90);

-- Venta 2
INSERT INTO ventas (id_usuario, total, fecha_venta) VALUES 
(1, 119.80, '2025-01-14 11:12:00');

INSERT INTO detalle_venta (id_venta, id_producto, cantidad, precio_unitario) VALUES 
(2, 3, 2, 59.90);


-- =============================
--      MES: 2025-02
-- =============================

-- Ingreso adicional
INSERT INTO ingresos (id_producto, cantidad, descripcion, fecha_ingreso) VALUES 
(2, 5, 'Reposición de stock Marea Originals', '2025-02-02 10:30:00');

-- Venta 3
INSERT INTO ventas (id_usuario, total, fecha_venta) VALUES 
(2, 89.80, '2025-02-10 15:20:00');

INSERT INTO detalle_venta (id_venta, id_producto, cantidad, precio_unitario) VALUES 
(3, 2, 2, 39.90);


-- =============================
--      MES: 2025-03
-- =============================

-- Venta 4
INSERT INTO ventas (id_usuario, total, fecha_venta) VALUES 
(3, 44.90, '2025-03-05 18:45:00');

INSERT INTO detalle_venta (id_venta, id_producto, cantidad, precio_unitario) VALUES 
(4, 4, 1, 44.90);