-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 22, 2023 at 11:59 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_project`
--
CREATE DATABASE IF NOT EXISTS `node_project` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `node_project`;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL,
  `cost` decimal(8,2) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `phone` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `products_ids` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `cost`, `name`, `email`, `status`, `city`, `address`, `phone`, `date`, `products_ids`) VALUES
(1687292192169, '51.98', 'Maha', 'maha@gmail.com', 'paid', 'Hyderabad', 'Maruthinagar, 5-6-145/5', '9876543210', '2023-06-21 01:46:32', ',1');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` bigint(20) NOT NULL,
  `order_id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` decimal(8,2) NOT NULL,
  `product_image` varchar(255) NOT NULL,
  `product_quantity` int(11) NOT NULL,
  `order_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `product_name`, `product_price`, `product_image`, `product_quantity`, `order_date`) VALUES
(1, 1687292192169, 1, 'Chicken Cheese Burger', '39.99', 'o7.jpg', 2, '2023-06-21');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` bigint(20) NOT NULL,
  `order_id` bigint(20) NOT NULL,
  `transaction_id` text NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `order_id`, `transaction_id`, `date`) VALUES
(1, 1687292192169, '41X20384T6673921A', '2023-06-21 01:48:47');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` float(8,2) NOT NULL,
  `sale_price` float(8,2) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `image` text NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `sale_price`, `quantity`, `image`, `category`, `type`) VALUES
(1, 'Chicken Cheese Burger', 'The burger buns are prepared with chicken patty ,cooked with BBQ sauce, and topped with salad leaves.', 39.99, 25.99, 0, 'f7.png', 'burger', 'Non-veg'),
(2, 'Chicken Club Sandwich', 'This sandwich features lettuce, bacon, tomato, chicken, and garlic parmesan herb butter, butter pickles.', 35.99, 25.99, 0, 'ccs.png\r\n', 'sandwich', 'Non-veg'),
(3, 'Arrabiata pasta', 'A pasta dish prepared with a fiery hot sauce made with tomatoes, olive oil, garlic, and red chili peppers.', 25.99, NULL, 0, 'f9.png', 'pasta', 'Veg'),
(4, 'Margherita Pizza', 'A pizza featuring a bubbly crust, crushed San Marzano tomato sauce, fresh mozzarella and basil, olive oil, and salt.', 20.99, 15.99, 0, 'f3.png', 'pizza', 'Veg'),
(5, 'Fries', 'Thinly sliced potatoes are deep-fried till they\'re crisp on all sides and then sprinkled with salt and pepper.', 15.99, 12.99, 0, 'o6.png', 'fries', 'Veg'),
(6, 'Mexican-style Burrito', 'A meal stuffed with seasoned rice, tangy mexican salsa, grilled fajitas, sauteed spicy chicken, sour cream, cucumber and cheese.', 20.99, 17.99, 0, 'b.png', 'burrito', 'Non-veg'),
(7, 'Chicken Cheese Dog', 'This dish combines the flavors of juicy, grilled chicken and creamy, melted cheese, nestled inside a soft and fluffy bun', 25.99, 18.99, 0, 'hd.png', 'hotdog', 'Non-veg'),
(8, 'Chocolate shake', 'A delightful treat that combines the smoothness of creamy milk with the rich and indulgent flavors of chocolate.', 15.99, 10.99, 0, 'chos.png', 'beverage', 'Veg'),
(9, 'Lemonade', 'A refreshing citrus beverage made from fresh lemons, water, and sugar, offering a tangy and thirst-quenching flavor.', 15.99, 10.99, 0, 'lmn.png', 'beverage', 'Veg'),
(10, 'Lava Cake', 'A delectable dessert that features a warm and gooey chocolate center enclosed within a delicate cake exterior. ', 12.99, 7.99, 0, 'cl.png', 'dessert', 'Veg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1687292192170;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
