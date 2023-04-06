package edu.sjsu.avrentals.service;

import edu.sjsu.avrentals.dao.sql.BookingDao;

import edu.sjsu.avrentals.entity.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.Period;

@Service
public class BookingService {
    @Autowired
    private BookingDao bookingDao;

    @Transactional
    public Booking addBooking(Booking booking){

        int vehicle_id = booking.getVehicle_id();
        int owner_id = booking.getOwner_id();
        int rider_id = booking.getRider_id();
        String pickup_location = (booking.getPickup_location() == null)? "NA":booking.getPickup_location();
        String dropoff_location = (booking.getDropoff_location() == null)? "NA":booking.getDropoff_location();
        long start_time = (booking.getStart_time() == 0)? 0:booking.getStart_time();
        long end_time = (booking.getEnd_time() == 0)? 0:booking.getEnd_time();
        double cost = (booking.getCost() == 0)? 0.00:booking.getCost();
        booking.setCost(cost);
        String ride_status = (booking.getRide_status() == null)? "not_started":booking.getRide_status();
        booking.setRide_status(ride_status);

        int rowsUpdated = bookingDao.addBooking(vehicle_id, owner_id, rider_id, pickup_location, dropoff_location, start_time,
                end_time, cost, ride_status);
        int id = bookingDao.getLatestBookingId();

        booking.setBooking_id(id);

        return booking;
    }

    public int updateBooking(Booking booking){

        int booking_id = booking.getBooking_id();

        Booking base = bookingDao.getBookingById(booking_id);

        int vehicle_id = (booking.getVehicle_id() == 0)? base.getBooking_id():booking.getVehicle_id();
        int owner_id = (booking.getOwner_id() == 0)? base.getOwner_id():booking.getOwner_id();
        int rider_id = (booking.getRider_id() == 0)? base.getRider_id():booking.getRider_id();
        String pickup_location = (booking.getPickup_location() == null)? base.getPickup_location():booking.getPickup_location();
        String dropoff_location = (booking.getDropoff_location() == null)? base.getDropoff_location():booking.getDropoff_location();
        long start_time = (booking.getStart_time() == 0)? base.getStart_time():booking.getStart_time();
        long end_time = (booking.getEnd_time() == 0)? base.getEnd_time():booking.getEnd_time();
        double cost = (booking.getCost() == 0)? base.getCost():booking.getCost();
        String ride_status = (booking.getRide_status() == null)? base.getRide_status():booking.getRide_status();

        return bookingDao.updateBooking(booking_id, vehicle_id, owner_id, rider_id, pickup_location, dropoff_location, start_time,
                end_time, cost, ride_status);
    }

    public Booking[] getAllBooking() {
        return bookingDao.getAllBooking();
    }

    public Booking getBookingById(int id) {
        return bookingDao.getBookingById(id);
    }

    public Booking[] getBookingByOwnerId(int id) {
        return bookingDao.getBookingByOwnerId(id);
    }

    public Booking[] getBookingByRiderId(int id) {
        return bookingDao.getBookingByRiderId(id);
    }

    public Booking[] getBookingByStatus(String status) {
        return bookingDao.getBookingByStatus(status);
    }

    public int deleteBookingById(int id) {
        return bookingDao.deleteBookingById(id);
    }

}
