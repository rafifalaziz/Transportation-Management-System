-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2022-08-13 07:05:18.271

-- tables
-- Table: driver
CREATE TABLE driver (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    phone varchar(20) NOT NULL,
    created_at timestamp NOT NULL,
    status_id int NOT NULL,
    CONSTRAINT driver_pk PRIMARY KEY (id)
);

-- Table: plate_type
CREATE TABLE plate_type (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    CONSTRAINT plate_type_pk PRIMARY KEY (id)
);

-- Table: shipment
CREATE TABLE shipment (
    id int NOT NULL AUTO_INCREMENT,
    production_year int NOT NULL,
    origin varchar(100) NOT NULL,
    destination varchar(100) NOT NULL,
    loading_date timestamp NULL,
    driver_id int NULL,
    truck_id int NULL,
    status_id int NULL,
    CONSTRAINT shipment_pk PRIMARY KEY (id)
);

-- Table: status
CREATE TABLE status (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    order_no int NOT NULL,
    context varchar(100) NOT NULL,
    CONSTRAINT status_pk PRIMARY KEY (id)
);

-- Table: truck
CREATE TABLE truck (
    id int NOT NULL AUTO_INCREMENT,
    license varchar(20) NOT NULL,
    truck_type_id int NOT NULL,
    plate_type_id int NOT NULL,
    status_id int NOT NULL,
    CONSTRAINT truck_pk PRIMARY KEY (id)
);

-- Table: truck_type
CREATE TABLE truck_type (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    CONSTRAINT truck_type_pk PRIMARY KEY (id)
);

-- Table: user
CREATE TABLE user (
    id int NOT NULL AUTO_INCREMENT,
    email varchar(100) NOT NULL,
    password varchar(255) NOT NULL,
    role varchar(50) NOT NULL,
    CONSTRAINT user_pk PRIMARY KEY (id)
);

-- foreign keys
-- Reference: driver_status (table: driver)
ALTER TABLE driver ADD CONSTRAINT driver_status FOREIGN KEY driver_status (status_id)
    REFERENCES status (id);

-- Reference: shipment_driver (table: shipment)
ALTER TABLE shipment ADD CONSTRAINT shipment_driver FOREIGN KEY shipment_driver (driver_id)
    REFERENCES driver (id);

-- Reference: shipment_status (table: shipment)
ALTER TABLE shipment ADD CONSTRAINT shipment_status FOREIGN KEY shipment_status (status_id)
    REFERENCES status (id);

-- Reference: shipment_truck (table: shipment)
ALTER TABLE shipment ADD CONSTRAINT shipment_truck FOREIGN KEY shipment_truck (truck_id)
    REFERENCES truck (id);

-- Reference: truck_plate_type (table: truck)
ALTER TABLE truck ADD CONSTRAINT truck_plate_type FOREIGN KEY truck_plate_type (plate_type_id)
    REFERENCES plate_type (id);

-- Reference: truck_status (table: truck)
ALTER TABLE truck ADD CONSTRAINT truck_status FOREIGN KEY truck_status (status_id)
    REFERENCES status (id);

-- Reference: truck_truck_type (table: truck)
ALTER TABLE truck ADD CONSTRAINT truck_truck_type FOREIGN KEY truck_truck_type (truck_type_id)
    REFERENCES truck_type (id);

-- End of file.

