-- MySQL Script generated by MySQL Workbench
-- Mon Sep  5 13:28:02 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema escuela
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `escuela` ;

-- -----------------------------------------------------
-- Schema escuela
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `escuela` ;
USE `escuela` ;

-- -----------------------------------------------------
-- Table `escuela`.`materia`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `escuela`.`materia` ;

CREATE TABLE IF NOT EXISTS `escuela`.`materia` (
  `id_materia` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `version` VARCHAR(45) NOT NULL,
  `grado` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_materia`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `escuela`.`alumno`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `escuela`.`alumno` ;

CREATE TABLE IF NOT EXISTS `escuela`.`alumno` (
  `id_alumno` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `curso` VARCHAR(45) NOT NULL,
  `materia_id_materia` INT NOT NULL,
  PRIMARY KEY (`id_alumno`),
  INDEX `fk_alumno_materia1_idx` (`materia_id_materia` ASC) VISIBLE,
  CONSTRAINT `fk_alumno_materia1`
    FOREIGN KEY (`materia_id_materia`)
    REFERENCES `escuela`.`materia` (`id_materia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `escuela`.`profesor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `escuela`.`profesor` ;

CREATE TABLE IF NOT EXISTS `escuela`.`profesor` (
  `id_identificacion` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `materia_id_materia` INT NOT NULL,
  PRIMARY KEY (`id_identificacion`, `materia_id_materia`),
  INDEX `fk_profesor_materia1_idx` (`materia_id_materia` ASC) VISIBLE,
  CONSTRAINT `fk_profesor_materia1`
    FOREIGN KEY (`materia_id_materia`)
    REFERENCES `escuela`.`materia` (`id_materia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
