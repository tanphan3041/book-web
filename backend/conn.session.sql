CREATE TABLE `thanhvien` (
   `tvid` VARCHAR(15) NOT NULL,
   `ten` VARCHAR(35) NOT NULL,
   `ho` VARCHAR(35) NOT NULL,
   `dia_chi` VARCHAR(255) NOT NULL,
   `sdt` VARCHAR(15) NOT NULL,
   PRIMARY KEY (`tvid`)
) ENGINE = InnoDB;

CREATE TABLE `sach` (
   `sid` VARCHAR(15) NOT NULL,
   `Tua_sach` VARCHAR(45) NULL,
   `Lan_xuat_ban` INT NOT NULL,
   `So_trang` INT NOT NULL,
   `Quoc_gia` VARCHAR(45) NOT NULL,
   `NXB` VARCHAR(15) NOT NULL,
   `Tac_gia` VARCHAR(15) NOT NULL,
   `The_loai` VARCHAR(15) NOT NULL,
   PRIMARY KEY (`sid`)
) ENGINE = InnoDB;


CREATE TABLE `muon` (
   `muonid` VARCHAR(15) NOT NULL,
   `ngay_muon` DATE NOT NULL,
   `ngay_tra` DATE NOT NULL,
   `sach_sid` VARCHAR(15) NOT NULL,
   `thanhvien_tvid` VARCHAR(15) NOT NULL,
   PRIMARY KEY (`muonid`),
   CONSTRAINT `fk_muon_sach` FOREIGN KEY (`sach_sid`) REFERENCES `book`.`sach` (`sid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
   CONSTRAINT `fk_muon_thanhvien` FOREIGN KEY (`thanhvien_tvid`) REFERENCES `book`.`thanhvien` (`tvid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;
