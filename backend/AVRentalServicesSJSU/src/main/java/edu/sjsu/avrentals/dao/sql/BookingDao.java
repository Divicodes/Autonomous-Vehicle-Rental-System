package edu.sjsu.avrentals.dao.sql;

import edu.sjsu.avrentals.controller.ProfileController;
import edu.sjsu.avrentals.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface BookingDao extends JpaRepository<Booking, Long> {

    @Transactional
    @Modifying
    @Query(value = "insert into booking(vehicle_id, owner_id, rider_id, pickup_location, dropoff_location, " +
            "start_time, end_time, cost, ride_status) " +
            "values(:vehicle_id, :owner_id, :rider_id, :pickup_location, :dropoff_location, " +
            ":start_time, :end_time, :cost, :ride_status)", nativeQuery = true)
    int addBooking(int vehicle_id, int owner_id, int rider_id, String pickup_location, String dropoff_location,
                          long start_time, long end_time, double cost, String ride_status);

    @Query(value = "select booking_id from booking order by booking_id desc limit 1", nativeQuery = true)
    int getLatestBookingId();

    @Query(value = "SELECT * FROM booking WHERE booking_id = :id", nativeQuery = true)
    Booking getBookingById(int id);

    @Query(value = "SELECT * FROM booking WHERE owner_id = :id", nativeQuery = true)
    Booking[] getBookingByOwnerId(int id);

    @Query(value = "SELECT * FROM booking WHERE rider_id = :id", nativeQuery = true)
    Booking[] getBookingByRiderId(int id);

    @Query(value = "SELECT * FROM booking WHERE ride_status LIKE %:status%", nativeQuery = true)
    Booking[] getBookingByStatus(String status);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM booking WHERE booking_id = :id", nativeQuery = true)
    int deleteBookingById(int id);

    @Query(value = "SELECT * FROM booking order by start_time desc", nativeQuery = true)
    Booking[] getAllBooking();

    @Transactional
    @Modifying
    @Query(value = "UPDATE booking SET vehicle_id = :vehicle_id, owner_id = :owner_id, rider_id = :rider_id, " +
            "pickup_location = :pickup_location, dropoff_location = :dropoff_location, start_time = :start_time, " +
            "end_time = :end_time, cost = :cost, ride_status = :ride_status where booking_id = :booking_id", nativeQuery = true)
    int updateBooking(int booking_id, int vehicle_id, int owner_id, int rider_id, String pickup_location, String dropoff_location,
                      long start_time, long end_time, double cost, String ride_status);




}
