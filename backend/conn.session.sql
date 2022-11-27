CREATE TABLE `thanhvien` (
   `tvid` VARCHAR(15) NOT NULL,
   `ten` VARCHAR(35) NOT NULL,
   `ho` VARCHAR(35) NOT NULL,
   `dia_chi` VARCHAR(255) NOT NULL,
   `sdt` VARCHAR(15) NOT NULL,
   PRIMARY KEY (`tvid`)
) ENGINE = InnoDB;


CREATE TABLE `sach` (
   `sid` INT(15) UNSIGNED NOT NULL AUTO_INCREMENT,
   `Tua_sach` VARCHAR(45) NOT NULL COLLATE 'utf8mb4_general_ci',
   `Lan_xuat_ban` INT NOT NULL,
   `So_trang` INT NOT NULL,
   `Quoc_gia` VARCHAR(45) NOT NULL COLLATE 'utf8mb4_general_ci',
   `NXB` VARCHAR(15) NOT NULL COLLATE 'utf8mb4_general_ci',
   `Tac_gia` VARCHAR(15) NOT NULL COLLATE 'utf8mb4_general_ci',
   `The_loai` VARCHAR(15) NOT NULL COLLATE 'utf8mb4_general_ci',
   PRIMARY KEY (`sid`) USING BTREE
) ENGINE = InnoDB;


CREATE TABLE `muon` (
   `muonid` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
   `ngay_muon` DATE NOT NULL,
   `ngay_tra` DATE NOT NULL,
   `sach_sid` VARCHAR(15) NOT NULL,
   `thanhvien_tvid` VARCHAR(15) NOT NULL,
   PRIMARY KEY (`muonid`),
   CONSTRAINT `fk_muon_sach_1` FOREIGN KEY (`sach_sid`) REFERENCES `book`.`sach` (`sid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
   CONSTRAINT `fk_muon_thanhvien_1` FOREIGN KEY (`thanhvien_tvid`) REFERENCES `book`.`thanhvien` (`tvid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;
