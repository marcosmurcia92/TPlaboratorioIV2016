-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-02-2017 a las 19:23:48
-- Versión del servidor: 10.1.10-MariaDB
-- Versión de PHP: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pizzeriasargento_murcia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `encuestas`
--

CREATE TABLE `encuestas` (
  `idEnc` int(11) NOT NULL,
  `idPed` int(11) NOT NULL,
  `idCliente` int(11) NOT NULL,
  `valorProducto` int(11) NOT NULL,
  `valorAtencion` int(11) NOT NULL,
  `valorDemora` int(11) NOT NULL,
  `comentario` varchar(300) COLLATE utf8_spanish2_ci DEFAULT ' ',
  `foto1` varchar(50) COLLATE utf8_spanish2_ci NOT NULL DEFAULT 'sin foto',
  `foto2` varchar(50) COLLATE utf8_spanish2_ci NOT NULL DEFAULT 'sin foto',
  `foto3` varchar(50) COLLATE utf8_spanish2_ci NOT NULL DEFAULT 'sin foto'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `encuestas`
--

INSERT INTO `encuestas` (`idEnc`, `idPed`, `idCliente`, `valorProducto`, `valorAtencion`, `valorDemora`, `comentario`, `foto1`, `foto2`, `foto3`) VALUES
(1, 1, 4, 5, 3, 5, 'Mas variedad de productos.', 'sin foto', 'sin foto', 'sin foto'),
(2, 39, 6, 1, 2, 1, 'leo odio condimentum id luctus nec molestie sed', 'sin foto', 'sin foto', 'sin foto'),
(3, 41, 9, 4, 4, 5, 'faucibus orci luctus et ultrices posuere', 'sin foto', 'sin foto', 'sin foto'),
(4, 18, 9, 2, 1, 4, 'tortor quis turpis sed ante vivamus tortor duis mattis', 'sin foto', 'sin foto', 'sin foto'),
(5, 19, 6, 1, 3, 4, 'lectus vestibulum quam sapien varius', 'sin foto', 'sin foto', 'sin foto'),
(6, 23, 8, 5, 2, 4, 'non mattis pulvinar nulla pede', 'sin foto', 'sin foto', 'sin foto'),
(7, 16, 10, 2, 1, 5, 'at vulputate vitae nisl aenean lectus pellentesque eget', 'sin foto', 'sin foto', 'sin foto'),
(8, 20, 8, 4, 2, 4, 'ipsum integer a nibh in quis justo', 'sin foto', 'sin foto', 'sin foto'),
(9, 32, 10, 5, 1, 3, 'eget eleifend luctus ultricies eu', 'sin foto', 'sin foto', 'sin foto'),
(10, 25, 10, 1, 1, 4, 'integer a nibh in quis justo maecenas rhoncus aliquam lacus', 'sin foto', 'sin foto', 'sin foto'),
(11, 5, 6, 5, 5, 3, 'dolor morbi vel lectus in quam fringilla rhoncus', 'sin foto', 'sin foto', 'sin foto'),
(12, 50, 8, 5, 2, 5, 'varius integer ac leo pellentesque ultrices mattis', 'sin foto', 'sin foto', 'sin foto'),
(13, 9, 8, 4, 1, 3, 'bibendum imperdiet nullam orci pede venenatis non sodales sed', 'sin foto', 'sin foto', 'sin foto'),
(14, 2, 7, 2, 1, 4, 'maecenas tincidunt lacus at velit', 'sin foto', 'sin foto', 'sin foto'),
(15, 44, 9, 1, 2, 1, 'vel nulla eget eros elementum pellentesque', 'sin foto', 'sin foto', 'sin foto'),
(16, 15, 7, 1, 1, 4, 'quisque porta volutpat erat quisque erat eros viverra eget', 'sin foto', 'sin foto', 'sin foto'),
(17, 45, 8, 4, 2, 4, 'quis turpis sed ante vivamus', 'sin foto', 'sin foto', 'sin foto'),
(18, 28, 9, 3, 3, 2, 'enim in tempor turpis nec euismod scelerisque quam', 'sin foto', 'sin foto', 'sin foto'),
(19, 34, 10, 1, 4, 2, 'luctus et ultrices posuere cubilia curae nulla dapibus dolor', 'sin foto', 'sin foto', 'sin foto'),
(20, 29, 10, 3, 3, 1, 'etiam faucibus cursus urna ut', 'sin foto', 'sin foto', 'sin foto'),
(21, 12, 9, 3, 2, 3, 'tristique fusce congue diam id ornare', 'sin foto', 'sin foto', 'sin foto'),
(22, 4, 6, 3, 4, 3, 'erat vestibulum sed magna at', 'sin foto', 'sin foto', 'sin foto'),
(23, 13, 6, 4, 5, 1, 'aenean fermentum donec ut mauris', 'sin foto', 'sin foto', 'sin foto'),
(24, 22, 10, 2, 2, 2, 'nisi eu orci mauris lacinia sapien quis libero', 'sin foto', 'sin foto', 'sin foto'),
(25, 47, 7, 4, 2, 1, 'elit sodales scelerisque mauris sit amet eros suspendisse', 'sin foto', 'sin foto', 'sin foto'),
(26, 21, 6, 4, 4, 2, 'vehicula condimentum curabitur in libero ut massa volutpat', 'sin foto', 'sin foto', 'sin foto'),
(27, 10, 8, 1, 3, 2, 'rutrum nulla nunc purus phasellus in felis', 'sin foto', 'sin foto', 'sin foto'),
(28, 8, 10, 4, 4, 1, 'ut at dolor quis odio consequat varius integer ac leo', 'sin foto', 'sin foto', 'sin foto'),
(29, 43, 10, 4, 2, 3, 'sapien urna pretium nisl ut', 'sin foto', 'sin foto', 'sin foto'),
(30, 33, 6, 3, 3, 5, 'dolor quis odio consequat varius', 'sin foto', 'sin foto', 'sin foto'),
(31, 48, 6, 2, 5, 4, 'ac lobortis vel dapibus at diam nam', 'sin foto', 'sin foto', 'sin foto'),
(32, 42, 10, 3, 2, 1, 'dapibus dolor vel est donec odio', 'sin foto', 'sin foto', 'sin foto'),
(33, 46, 6, 4, 2, 2, 'nisl venenatis lacinia aenean sit amet', 'sin foto', 'sin foto', 'sin foto'),
(34, 7, 9, 4, 4, 5, 'arcu adipiscing molestie hendrerit at vulputate vitae', 'sin foto', 'sin foto', 'sin foto'),
(35, 40, 8, 3, 2, 5, 'nulla suscipit ligula in lacus curabitur', 'sin foto', 'sin foto', 'sin foto'),
(36, 14, 10, 5, 3, 1, 'sociis natoque penatibus et magnis', 'sin foto', 'sin foto', 'sin foto'),
(37, 24, 7, 1, 4, 2, 'tincidunt ante vel ipsum praesent blandit lacinia erat', 'sin foto', 'sin foto', 'sin foto'),
(38, 30, 10, 1, 3, 3, 'at turpis donec posuere metus vitae ipsum', 'sin foto', 'sin foto', 'sin foto'),
(39, 26, 9, 1, 5, 1, 'sed augue aliquam erat volutpat in congue', 'sin foto', 'sin foto', 'sin foto'),
(40, 6, 6, 3, 5, 3, 'diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum', 'sin foto', 'sin foto', 'sin foto'),
(41, 27, 10, 4, 2, 4, 'potenti in eleifend quam a odio in hac', 'sin foto', 'sin foto', 'sin foto'),
(42, 49, 10, 3, 2, 5, 'duis ac nibh fusce lacus purus aliquet at', 'sin foto', 'sin foto', 'sin foto'),
(43, 38, 9, 2, 3, 1, 'curabitur convallis duis consequat dui', 'sin foto', 'sin foto', 'sin foto'),
(44, 36, 10, 1, 3, 5, 'turpis sed ante vivamus tortor', 'sin foto', 'sin foto', 'sin foto'),
(45, 35, 10, 3, 5, 2, 'mauris lacinia sapien quis libero nullam sit', 'sin foto', 'sin foto', 'sin foto'),
(46, 11, 6, 1, 3, 3, 'mi nulla ac enim in tempor turpis', 'sin foto', 'sin foto', 'sin foto'),
(47, 17, 6, 4, 2, 1, 'rutrum nulla tellus in sagittis dui vel nisl', 'sin foto', 'sin foto', 'sin foto'),
(48, 3, 7, 3, 4, 2, 'aliquet maecenas leo odio condimentum', 'sin foto', 'sin foto', 'sin foto'),
(49, 37, 9, 2, 5, 4, 'molestie sed justo pellentesque viverra pede ac diam cras pellentesque', 'sin foto', 'sin foto', 'sin foto'),
(50, 31, 9, 2, 5, 1, 'augue vestibulum ante ipsum primis in', 'sin foto', 'sin foto', 'sin foto'),
(52, 51, 6, 4, 2, 1, 'sin comentario', '4Quesos (2).jpg', '4Quesos (3).jpg', 'Pizza Fiesta (1).jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inventarios`
--

CREATE TABLE `inventarios` (
  `idInv` int(11) NOT NULL,
  `idSuc` int(11) NOT NULL,
  `idProd` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ofertas`
--

CREATE TABLE `ofertas` (
  `idOfer` int(11) NOT NULL,
  `idProd` int(11) NOT NULL,
  `idSuc` int(11) NOT NULL,
  `fechaFin` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `descuento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `ofertas`
--

INSERT INTO `ofertas` (`idOfer`, `idProd`, `idSuc`, `fechaFin`, `descuento`) VALUES
(1, 3, 3, '2017-02-25T03:00:00.000Z', 40),
(2, 6, 3, '29/08/2016', 28),
(3, 8, 3, '21/06/2016', 57),
(4, 6, 2, '24/05/2016', 26),
(5, 7, 1, '16/09/2016', 78),
(6, 4, 3, '14/06/2016', 33),
(7, 1, 1, '15/12/2016', 54),
(8, 9, 1, '09/04/2016', 50),
(9, 5, 3, '22/03/2016', 55),
(10, 9, 2, '18/07/2016', 47),
(11, 6, 1, '25/09/2016', 30);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `idPed` int(11) NOT NULL,
  `idProd` int(11) NOT NULL,
  `idSuc` int(11) NOT NULL,
  `idCliente` int(11) NOT NULL,
  `monto` int(11) NOT NULL,
  `fechaPedido` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `cantPedida` int(11) NOT NULL,
  `estado` varchar(50) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`idPed`, `idProd`, `idSuc`, `idCliente`, `monto`, `fechaPedido`, `cantPedida`, `estado`) VALUES
(1, 2, 2, 9, 1260, '2017-02-23T03:00:00.000Z', 7, 'Cerrado'),
(2, 4, 3, 6, 1600, '2017-01-27 09:02:49', 10, 'Cerrado'),
(3, 4, 1, 9, 320, '2017-01-25 23:13:58', 2, 'Cerrado'),
(4, 2, 1, 6, 320, '2017-01-29 04:59:26', 2, 'Cerrado'),
(5, 8, 2, 6, 800, '2017-02-22 10:06:36', 5, 'Cerrado'),
(6, 2, 3, 7, 480, '2017-02-05 15:36:13', 3, 'Cerrado'),
(7, 3, 2, 10, 800, '2017-02-06 23:32:36', 5, 'Cerrado'),
(8, 8, 2, 6, 1120, '2017-02-10 04:01:58', 7, 'Cerrado'),
(9, 10, 1, 9, 320, '2017-01-27 18:48:26', 2, 'Cerrado'),
(10, 6, 2, 7, 800, '2017-02-06 09:49:21', 5, 'Cerrado'),
(11, 8, 3, 8, 1760, '2017-02-14 13:24:20', 11, 'Cerrado'),
(12, 2, 3, 8, 1920, '2017-01-23 01:49:34', 12, 'Cerrado'),
(13, 8, 3, 9, 1280, '2017-02-11 23:56:21', 8, 'Cerrado'),
(14, 8, 3, 10, 160, '2017-02-19 13:52:53', 1, 'Cerrado'),
(15, 7, 3, 7, 1600, '2017-01-28 07:58:19', 10, 'Cerrado'),
(16, 9, 2, 10, 1920, '2017-02-13 18:17:43', 12, 'Cerrado'),
(17, 6, 1, 10, 1760, '2017-02-22 06:30:36', 11, 'Cerrado'),
(18, 7, 1, 7, 320, '2017-01-29 03:05:42', 2, 'Cerrado'),
(19, 10, 3, 9, 480, '2017-02-22 14:33:34', 3, 'Cerrado'),
(20, 2, 1, 7, 160, '2017-01-31 11:30:16', 1, 'Cerrado'),
(21, 2, 3, 9, 960, '2017-02-13 23:18:21', 6, 'Cerrado'),
(22, 9, 3, 6, 1760, '2017-02-15 07:01:52', 11, 'Cerrado'),
(23, 6, 3, 9, 1120, '2017-01-26 23:44:40', 7, 'Cerrado'),
(24, 5, 2, 7, 1120, '2017-01-24 11:25:28', 7, 'Cerrado'),
(25, 2, 1, 10, 320, '2017-01-24 08:36:00', 2, 'Cerrado'),
(26, 2, 1, 9, 640, '2017-02-21 02:34:20', 4, 'Cerrado'),
(27, 4, 1, 9, 1600, '2017-02-12 05:40:51', 10, 'Cerrado'),
(28, 2, 3, 6, 640, '2017-02-05 18:23:52', 4, 'Cerrado'),
(29, 5, 2, 9, 1920, '2017-01-28 07:52:53', 12, 'Cerrado'),
(30, 4, 2, 9, 640, '2017-02-02 06:22:39', 4, 'Cerrado'),
(31, 8, 1, 8, 960, '2017-02-06 02:39:11', 6, 'Cerrado'),
(32, 10, 2, 10, 160, '2017-02-20 19:38:33', 1, 'Cerrado'),
(33, 1, 1, 9, 640, '2017-01-23 08:03:32', 4, 'Cerrado'),
(34, 7, 3, 8, 1920, '2017-02-07 19:53:35', 12, 'Cerrado'),
(35, 5, 3, 7, 480, '2017-02-06 12:12:19', 3, 'Cerrado'),
(36, 7, 1, 7, 1280, '2017-02-10 14:58:07', 8, 'Cerrado'),
(37, 9, 2, 8, 1280, '2017-02-02 14:51:08', 8, 'Cerrado'),
(38, 4, 2, 10, 1120, '2017-01-24 05:06:44', 7, 'Cerrado'),
(39, 1, 3, 9, 1600, '2017-01-31 12:55:08', 10, 'Cerrado'),
(40, 1, 3, 6, 1280, '2017-02-20 02:28:39', 8, 'Cerrado'),
(41, 5, 1, 9, 320, '2017-02-05 20:14:08', 2, 'Cerrado'),
(42, 5, 1, 8, 1760, '2017-01-27 13:40:34', 11, 'Cerrado'),
(43, 3, 1, 9, 1760, '2017-01-25 06:42:28', 11, 'Cerrado'),
(44, 4, 3, 8, 960, '2017-02-19 02:26:59', 6, 'Cerrado'),
(45, 5, 1, 7, 1760, '2017-02-05 23:19:23', 11, 'Cerrado'),
(46, 9, 2, 6, 640, '2017-01-24 02:57:26', 4, 'Cerrado'),
(47, 2, 1, 8, 1600, '2017-02-15 06:20:46', 10, 'Cerrado'),
(48, 3, 2, 8, 1120, '2017-02-12 22:32:35', 7, 'Cerrado'),
(49, 4, 3, 7, 320, '2017-02-08 02:23:23', 2, 'Cerrado'),
(50, 10, 3, 10, 1280, '2017-01-27 19:06:06', 8, 'Cerrado'),
(51, 6, 1, 6, 665, '2017-02-25T03:00:00.000Z', 5, 'Cerrado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idProd` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `precio` int(10) NOT NULL,
  `foto1` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `foto2` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `foto3` varchar(50) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idProd`, `nombre`, `precio`, `foto1`, `foto2`, `foto3`) VALUES
(1, 'Muzzarela', 100, 'Muzzarella (1).jpg', 'Muzzarella (2).jpg', 'Muzzarella (3).jpg'),
(2, 'Calabresa', 180, 'Calabresa (1).jpg', 'Calabresa (2).jpg', 'Calabresa (3).jpg'),
(3, 'Napolitana', 160, 'Napolitana (1).jpg', 'Napolitana (2).jpg', 'Napolitana (3).jpg'),
(4, 'Jamón y Huevo', 160, 'Huevo (1).jpg', 'Huevo (2).JPG', 'Huevo (3).jpg'),
(5, 'Fugazzeta', 160, 'Fugazzeta (1).jpg', 'Fugazzeta (2).jpg', 'Fugazzeta (3).jpg'),
(6, 'Cuatro Quesos', 190, '4Quesos (1).jpg', '4Quesos (2).jpg', '4Quesos (3).jpg'),
(7, 'Jamón Crudo y Rúcula', 190, 'JamonCrudoRucula (1).JPG', 'JamonCrudoRucula (2).jpg', 'JamonCrudoRucula (3).jpg'),
(8, 'Jamón y Ananá', 180, 'Ananas (1).jpg', 'Ananas (2).jpg', 'Ananas (3).jpg'),
(9, 'Anchoas', 130, 'Anchoas (1).jpg', 'Anchoas (2).jpg', 'Anchoas (3).jpg'),
(10, 'Jamón y Palmitos', 180, 'Palmitos (1).jpg', 'Palmitos (2).jpg', 'Palmitos (3).jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursales`
--

CREATE TABLE `sucursales` (
  `idSuc` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `direccion` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `localidad` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `lat` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `lng` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `telefono` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `encargado` int(11) NOT NULL,
  `foto1` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `foto2` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `foto3` varchar(50) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `sucursales`
--

INSERT INTO `sucursales` (`idSuc`, `nombre`, `direccion`, `localidad`, `lat`, `lng`, `telefono`, `encargado`, `foto1`, `foto2`, `foto3`) VALUES
(1, 'Pizza Fiesta', 'Av. Gral. José de San Martín 2844', 'Florencio Varela', '-34.805374', '-58.2781779', '(011) 4355-2006', 1, 'Pizza Fiesta (1).jpg', 'Pizza Fiesta (2).jpg', 'Pizza Fiesta (3).jpg'),
(2, 'Tiziano Pizzas y Empanadas', 'Dr. Ricardo Gutiérrez 300', 'Florencio Varela', '-34.801611451493656', '-58.27500477433205', '(011) 4255-8628', 0, 'Pizzeria Tiziano (1).jpg', 'Pizzeria Tiziano (2).jpg', 'Pizzeria Tiziano (3).jpg'),
(3, 'Pizzería Nicolás', 'Gral. Rudencindo Alvarado 1418', 'Florencio Varela', '-34.7833786', '-58.26676729999997', '(011) 4255-8015', 0, 'Pizzeria Nicolas (1).jpg', 'Pizzeria Nicolas (2).jpg', 'Pizzeria Nicolas (3).jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsu` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `clave` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `cargo` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `habilitado` int(11) NOT NULL,
  `idSuc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsu`, `nombre`, `email`, `clave`, `cargo`, `habilitado`, `idSuc`) VALUES
(1, 'admin', 'admin@admin.com', '123', 'Administrador', 1, 0),
(2, 'encargado', 'encargado@encargado.com', '456', 'Encargado', 1, 0),
(3, 'empleado', 'empleado@empleado.com', '789', 'Empleado', 1, 0),
(4, 'cliente', 'cliente@cliente.com', '321', 'Cliente', 1, 0),
(5, 'Jose Encargado 1', 'encargado1@encargado1.com', '999', 'Encargado', 1, 1),
(6, 'Kevin', 'kreyes0@meetup.com', '313', 'Cliente', 1, 0),
(7, 'Marilyn', 'mrobinson1@wunderground.com', '183', 'Cliente', 1, 0),
(8, 'Billy', 'breyes2@bloglines.com', '849', 'Cliente', 1, 0),
(9, 'Donna', 'dsimpson3@ustream.tv', '919', 'Cliente', 1, 0),
(10, 'Richard', 'rhayes4@joomla.org', '118', 'Empleado', 1, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `encuestas`
--
ALTER TABLE `encuestas`
  ADD PRIMARY KEY (`idEnc`);

--
-- Indices de la tabla `inventarios`
--
ALTER TABLE `inventarios`
  ADD PRIMARY KEY (`idInv`);

--
-- Indices de la tabla `ofertas`
--
ALTER TABLE `ofertas`
  ADD PRIMARY KEY (`idOfer`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`idPed`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idProd`);

--
-- Indices de la tabla `sucursales`
--
ALTER TABLE `sucursales`
  ADD PRIMARY KEY (`idSuc`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsu`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `encuestas`
--
ALTER TABLE `encuestas`
  MODIFY `idEnc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
--
-- AUTO_INCREMENT de la tabla `inventarios`
--
ALTER TABLE `inventarios`
  MODIFY `idInv` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `ofertas`
--
ALTER TABLE `ofertas`
  MODIFY `idOfer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `idPed` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idProd` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de la tabla `sucursales`
--
ALTER TABLE `sucursales`
  MODIFY `idSuc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
