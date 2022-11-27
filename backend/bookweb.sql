USE `bookweb` DROP TABLE `renter` CREATE TABLE `books` (
   `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_general_ci',
   `author` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
   `address` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
   `favorite` TINYINT(1) UNSIGNED NOT NULL DEFAULT '0',
   PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB;
CREATE TABLE `renters` (
   `renterid` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_general_ci',
   `address` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
   `phone` TINYTEXT NOT NULL COLLATE 'utf8mb4_general_ci',
   PRIMARY KEY (`renterid`) USING BTREE
) ENGINE = InnoDB;
CREATE TABLE `rent` (
   `rentid` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
   `rid` INT(10) UNSIGNED NOT NULL,
   `bid` INT(10) UNSIGNED NOT NULL,
   INDEX `fk_books_rent_idx` (`bid` ASC),
   INDEX `fk_renters_rent_idx` (`rid` ASC),
   CONSTRAINT `fk_books_rent` FOREIGN KEY (`bid`) REFERENCES `books` (`id`),
   CONSTRAINT `fk_renters_rent` FOREIGN KEY (`rid`) REFERENCES `renters` (`renterid`),
   PRIMARY KEY (`rentid`) USING BTREE
) ENGINE = InnoDB;
INSERT INTO `books` (`name`, `author`, `address`)
VALUES (
      'Ba người lính ngự lâm',
      'Alexandre Dumas cha',
      'Nhã Nam'
   ),
   (
      'Truyện loài vật',
      ' Ernest Thompson Seton',
      'Nhã Nam'
   ),
   ('Ngựa ô yêu dấu', 'Anna Sewell', 'Nhã Nam'),
   (
      'Con Bim trắng tai đen',
      'Gavriil Troyepolsky',
      'Nhã Nam'
   ),
   (
      'Những tấm lòng cao cả',
      'Edmondo De Amicis',
      'Nhã Nam'
   ),
   ('Nanh Trắng', 'Jack London', 'Nhã Nam'),
   (
      'Thời gian để sống và thời gian để chết',
      'Erich Maria Remarque',
      'Nhã Nam'
   ),
   (
      'Khải hoàn môn',
      'Erich Maria Remarque',
      'Nhã Nam'
   )