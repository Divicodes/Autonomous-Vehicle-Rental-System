package edu.sjsu.avrentals.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int vehicle_id;
    String vehicle_type;
    String vehicle_number;
    int capacity;
    String pickup_location;
    int profile_id;

    public Vehicle() {
    }

    public Vehicle(int vehicle_id, String vehicle_type, String vehicle_number, int capacity, String pickup_location, int profile_id) {
        this.vehicle_id = vehicle_id;
        this.vehicle_type = vehicle_type;
        this.vehicle_number = vehicle_number;
        this.capacity = capacity;
        this.pickup_location = pickup_location;
        this.profile_id = profile_id;
    }

    public int getVehicle_id() {
        return vehicle_id;
    }

    public void setVehicle_id(int vehicle_id) {
        this.vehicle_id = vehicle_id;
    }

    public String getVehicle_type() {
        return vehicle_type;
    }

    public void setVehicle_type(String vehicle_type) {
        this.vehicle_type = vehicle_type;
    }

    public String getVehicle_number() {
        return vehicle_number;
    }

    public void setVehicle_number(String vehicle_number) {
        this.vehicle_number = vehicle_number;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public String getPickup_location() {
        return pickup_location;
    }

    public void setPickup_location(String pickup_location) {
        this.pickup_location = pickup_location;
    }

    public int getProfile_id() {
        return profile_id;
    }

    public void setProfile_id(int profile_id) {
        this.profile_id = profile_id;
    }
}
