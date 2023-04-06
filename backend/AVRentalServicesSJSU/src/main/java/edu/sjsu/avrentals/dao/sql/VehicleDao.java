package edu.sjsu.avrentals.dao.sql;

import edu.sjsu.avrentals.controller.ProfileController;
import edu.sjsu.avrentals.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface VehicleDao extends JpaRepository<Vehicle, Long> {

    @Transactional
    @Modifying
    @Query(value = "insert into vehicle(capacity, pickup_location, profile_id, vehicle_number, vehicle_type) " +
            "values(:capacity, :pickup_location, :profile_id, :vehicle_number, :vehicle_type)", nativeQuery = true)
    int addVehicle(int capacity, String pickup_location, int profile_id, String vehicle_number, String vehicle_type);

    @Query(value = "select vehicle_id from vehicle order by vehicle_id desc limit 1", nativeQuery = true)
    int getLatestVehicleId();

    @Query(value = "SELECT * FROM vehicle WHERE vehicle_id = :id", nativeQuery = true)
    Vehicle getVehicleById(int id);

    @Query(value = "SELECT * FROM vehicle WHERE profile_id = :id", nativeQuery = true)
    Vehicle[] getVehicleByOwnerId(int id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM vehicle WHERE vehicle_id = :id", nativeQuery = true)
    int deleteVehicleById(int id);

    @Query(value = "SELECT * FROM vehicle WHERE vehicle_number = :vehicle_number limit 1", nativeQuery = true)
    Vehicle validateVehicle(String vehicle_number);

    @Query(value = "SELECT * FROM vehicle where vehicle_id not in " +
            "(select vehicle_id from booking where ride_status in (\"in_progress\",\"not_started\") OR " +
            "(start_time < :curr_time AND end_time > :curr_time)) ", nativeQuery = true)
    Vehicle[] getAvailableVehicles(long curr_time);

    @Transactional
    @Modifying
    @Query(value = "UPDATE vehicle SET capacity = :capacity, pickup_location = :pickup_location, profile_id = :profile_id, " +
            "vehicle_number = :vehicle_number, vehicle_type = :vehicle_type where vehicle_id = :vehicle_id", nativeQuery = true)
    int updateVehicle(int vehicle_id, int capacity, String pickup_location, int profile_id, String vehicle_number, String vehicle_type);




}
