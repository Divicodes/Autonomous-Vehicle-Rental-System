package edu.sjsu.avrentals.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int booking_id;
    int vehicle_id;
    int owner_id;
    int rider_id;
    String pickup_location;
    String dropoff_location;
    long start_time;
    long end_time;
    double cost;
    String ride_status;

    public Booking() {
    }

    public Booking(int booking_id, int vehicle_id, int owner_id, int rider_id, String pickup_location, String dropoff_location, long start_time, long end_time, double cost, String ride_status) {
        this.booking_id = booking_id;
        this.vehicle_id = vehicle_id;
        this.owner_id = owner_id;
        this.rider_id = rider_id;
        this.pickup_location = pickup_location;
        this.dropoff_location = dropoff_location;
        this.start_time = start_time;
        this.end_time = end_time;
        this.cost = cost;
        this.ride_status = ride_status;
    }

    public int getBooking_id() {
        return booking_id;
    }

    public void setBooking_id(int booking_id) {
        this.booking_id = booking_id;
    }

    public int getVehicle_id() {
        return vehicle_id;
    }

    public void setVehicle_id(int vehicle_id) {
        this.vehicle_id = vehicle_id;
    }

    public int getOwner_id() {
        return owner_id;
    }

    public void setOwner_id(int owner_id) {
        this.owner_id = owner_id;
    }

    public int getRider_id() {
        return rider_id;
    }

    public void setRider_id(int rider_id) {
        this.rider_id = rider_id;
    }

    public String getPickup_location() {
        return pickup_location;
    }

    public void setPickup_location(String pickup_location) {
        this.pickup_location = pickup_location;
    }

    public String getDropoff_location() {
        return dropoff_location;
    }

    public void setDropoff_location(String dropoff_location) {
        this.dropoff_location = dropoff_location;
    }

    public long getStart_time() {
        return start_time;
    }

    public void setStart_time(long start_time) {
        this.start_time = start_time;
    }

    public long getEnd_time() {
        return end_time;
    }

    public void setEnd_time(long end_time) {
        this.end_time = end_time;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public String getRide_status() {
        return ride_status;
    }

    public void setRide_status(String ride_status) {
        this.ride_status = ride_status;
    }
}
