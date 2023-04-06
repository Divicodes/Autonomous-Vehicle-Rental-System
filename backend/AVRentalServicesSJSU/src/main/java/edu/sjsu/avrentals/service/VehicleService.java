package edu.sjsu.avrentals.service;

import edu.sjsu.avrentals.dao.sql.ProfileDao;
import edu.sjsu.avrentals.dao.sql.VehicleDao;
import edu.sjsu.avrentals.entity.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.Period;

@Service
public class VehicleService {
    @Autowired
    private VehicleDao vehicleDao;

    @Transactional
    public Vehicle addVehicle(Vehicle vehicle){

        int capacity = vehicle.getCapacity();
        String pickup_location = (vehicle.getPickup_location() == null)? "NA":vehicle.getPickup_location();
        int profile_id = vehicle.getProfile_id();
        String vehicle_number = (vehicle.getVehicle_number() == null)? "NA":vehicle.getVehicle_number();
        String vehicle_type = (vehicle.getVehicle_type() == null)? "NA":vehicle.getVehicle_type();

        int rowsUpdated = vehicleDao.addVehicle(capacity, pickup_location, profile_id, vehicle_number, vehicle_type);
        int id = vehicleDao.getLatestVehicleId();

        vehicle.setVehicle_id(id);

        return vehicle;
    }

    public Vehicle validateVehicle(Vehicle vehicle){
        return vehicleDao.validateVehicle(vehicle.getVehicle_number());
    }

    public int updateVehicle(Vehicle vehicle){

        int vehicle_id = vehicle.getVehicle_id();

        Vehicle base = vehicleDao.getVehicleById(vehicle_id);

        int capacity = (vehicle.getCapacity() == 0)?base.getCapacity():vehicle.getCapacity();
        String pickup_location = (vehicle.getPickup_location() == null)? base.getPickup_location():vehicle.getPickup_location();
        int profile_id = (vehicle.getProfile_id() == 0)?base.getProfile_id():vehicle.getProfile_id();
        String vehicle_number = (vehicle.getVehicle_number() == null)? base.getVehicle_number():vehicle.getVehicle_number();
        String vehicle_type = (vehicle.getVehicle_type() == null)? base.getVehicle_type():vehicle.getVehicle_type();

        return vehicleDao.updateVehicle(vehicle_id, capacity, pickup_location, profile_id, vehicle_number, vehicle_type);
    }


    public Vehicle getVehicleById(int id) {
        return vehicleDao.getVehicleById(id);
    }

    public Vehicle[] getVehicleByOwnerId(int id) {
        return vehicleDao.getVehicleByOwnerId(id);
    }

    public Vehicle[] getAvailableVehicles() {
        return vehicleDao.getAvailableVehicles(System.currentTimeMillis());
    }

    public int deleteVehicleById(int id) {
        return vehicleDao.deleteVehicleById(id);
    }

}
