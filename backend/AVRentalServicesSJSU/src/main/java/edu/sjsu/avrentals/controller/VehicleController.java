package edu.sjsu.avrentals.controller;


import edu.sjsu.avrentals.entity.Vehicle;

import edu.sjsu.avrentals.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/vehicle")
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @PostMapping(path= "/new", consumes = "application/json", produces = "application/json")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity addVehicle(@RequestBody Vehicle vehicle)
    {
        try{
            if(vehicle.getVehicle_number() == null){
                return new ResponseEntity("Vehicle Number Missing", HttpStatus.BAD_REQUEST);
            }
            if(vehicle.getVehicle_type() == null){
                return new ResponseEntity("Vehicle Type Missing", HttpStatus.BAD_REQUEST);
            }
            if(vehicle.getProfile_id() == 0){
                return new ResponseEntity("Owner's Profile ID Missing", HttpStatus.BAD_REQUEST);
            }
            if(vehicle.getCapacity() == 0){
                return new ResponseEntity("Vehicle Capacity Missing", HttpStatus.BAD_REQUEST);
            }
            if(vehicle.getPickup_location() == null){
                return new ResponseEntity("Vehicle's Pickup Location Missing", HttpStatus.BAD_REQUEST);
            }
            if(vehicleService.validateVehicle(vehicle) != null){
                return new ResponseEntity("Vehicle With Given Details Already Exists", HttpStatus.BAD_REQUEST);
            }
        }catch(Exception e){
            System.out.println("Exception : " + e);
        }

        vehicle = vehicleService.addVehicle(vehicle);

        if(vehicle.getVehicle_id() == 0){
            return new ResponseEntity("Vehicle Registration Failed", HttpStatus.EXPECTATION_FAILED);
        }else {
            return new ResponseEntity(vehicle, HttpStatus.OK);
        }
    }


    @PostMapping(path= "/update", consumes = "application/json", produces = "application/json")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity updateVehicle(@RequestBody Vehicle vehicle)
    {
        try{
            if(vehicle == null) {
                return new ResponseEntity("No Fields Provided For Update", HttpStatus.BAD_REQUEST);
            }
        }catch(Exception e){
            System.out.println("Exception : " + e);
        }

        if(vehicleService.updateVehicle(vehicle) != 0) {
            return new ResponseEntity("Vehicle Updated", HttpStatus.OK);
        }else {
            return new ResponseEntity("Vehicle Update Failed", HttpStatus.EXPECTATION_FAILED);
        }

    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity getVehicleById(@PathVariable int id){
        return new ResponseEntity(vehicleService.getVehicleById(id), HttpStatus.OK);
    }

    @GetMapping("/owner/{id}")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity getVehicleByOwnerId(@PathVariable int id){
        return new ResponseEntity(vehicleService.getVehicleByOwnerId(id), HttpStatus.OK);
    }

    @GetMapping("/available")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity getAvailableVehicles(){
        return new ResponseEntity(vehicleService.getAvailableVehicles(), HttpStatus.OK);
    }

    @DeleteMapping ("/{id}")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity deleteVehicleById(@PathVariable int id){
        if(vehicleService.deleteVehicleById(id) != 0) {
            return new ResponseEntity("Vehicle Deleted", HttpStatus.OK);
        }else {
            return new ResponseEntity("Vehicle Deletion Failed", HttpStatus.EXPECTATION_FAILED);
        }
    }
}
