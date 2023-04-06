create database avrentals;

CREATE TABLE `booking` (
                           `booking_id` int NOT NULL AUTO_INCREMENT,
                           `cost` double NOT NULL,
                           `dropoff_location` varchar(255) DEFAULT NULL,
                           `end_time` bigint NOT NULL,
                           `owner_id` int NOT NULL,
                           `pickup_location` varchar(255) DEFAULT NULL,
                           `ride_status` varchar(255) DEFAULT NULL,
                           `rider_id` int NOT NULL,
                           `start_time` bigint NOT NULL,
                           `vehicle_id` int NOT NULL,
                           PRIMARY KEY (`booking_id`)
) ENGINE=InnoDB;

CREATE TABLE `profile` (
                           `profile_id` int NOT NULL AUTO_INCREMENT,
                           `address` varchar(255) DEFAULT NULL,
                           `age` int NOT NULL,
                           `dob` varchar(255) DEFAULT NULL,
                           `email` varchar(255) DEFAULT NULL,
                           `firstname` varchar(255) NOT NULL,
                           `lastname` varchar(255) DEFAULT NULL,
                           `membership` bit(1) DEFAULT FALSE,
                           `password` varchar(255) NOT NULL DEFAULT NULL,
                           `payment_card` varchar(255) DEFAULT NULL,
                           `phone` varchar(255) DEFAULT NULL,
                           `profile_type` varchar(255) DEFAULT NULL,
                           `wallet` int DEFAULT 0,
                           PRIMARY KEY (`profile_id`)
) ENGINE=InnoDB;

CREATE TABLE `ticket` (
                          `ticket_id` int NOT NULL AUTO_INCREMENT,
                          `comments` varchar(255) DEFAULT NULL,
                          `description` varchar(255) DEFAULT NULL,
                          `reporter_id` int NOT NULL,
                          `status` varchar(255) DEFAULT NULL,
                          `time_closed` bigint NOT NULL,
                          `time_created` bigint NOT NULL,
                          PRIMARY KEY (`ticket_id`)
) ENGINE=InnoDB;

CREATE TABLE `vehicle` (
                           `vehicle_id` int NOT NULL AUTO_INCREMENT,
                           `capacity` int NOT NULL,
                           `pickup_location` varchar(255) DEFAULT NULL,
                           `profile_id` int NOT NULL,
                           `vehicle_number` varchar(255) DEFAULT NULL,
                           `vehicle_type` varchar(255) DEFAULT NULL,
                           PRIMARY KEY (`vehicle_id`)
) ENGINE=InnoDB;

