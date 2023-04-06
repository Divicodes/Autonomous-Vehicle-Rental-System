package edu.sjsu.avrentals.controller;


import edu.sjsu.avrentals.entity.Booking;

import edu.sjsu.avrentals.service.BookingService;
import edu.sjsu.avrentals.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping(path= "/new", consumes = "application/json", produces = "application/json")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity addBooking(@RequestBody Booking booking)
    {
        try{
            if(booking.getVehicle_id() == 0){
                return new ResponseEntity("Vehicle ID Missing", HttpStatus.BAD_REQUEST);
            }
            if(booking.getOwner_id() == 0){
                return new ResponseEntity("Owner ID Missing", HttpStatus.BAD_REQUEST);
            }
            if(booking.getRider_id() == 0){
                return new ResponseEntity("Rider ID Missing", HttpStatus.BAD_REQUEST);
            }
            if(booking.getPickup_location() == null){
                return new ResponseEntity("Pickup Location Missing", HttpStatus.BAD_REQUEST);
            }
            if(booking.getPickup_location() == null){
                return new ResponseEntity("Drop Off Location Missing", HttpStatus.BAD_REQUEST);
            }
            if(booking.getStart_time() == 0){
                return new ResponseEntity("Booking Start Time Missing", HttpStatus.BAD_REQUEST);
            }
        }catch(Exception e){
            System.out.println("Exception : " + e);
        }

        booking = bookingService.addBooking(booking);

        if(booking.getBooking_id() == 0){
            return new ResponseEntity("Booking Failed", HttpStatus.EXPECTATION_FAILED);
        }else {
            return new ResponseEntity(booking, HttpStatus.OK);
        }
    }


    @PostMapping(path= "/update", consumes = "application/json", produces = "application/json")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity updateBooking(@RequestBody Booking booking)
    {
        try{
            if(booking == null) {
                return new ResponseEntity("No Fields Provided For Update", HttpStatus.BAD_REQUEST);
            }
        }catch(Exception e){
            System.out.println("Exception : " + e);
        }

        if(bookingService.updateBooking(booking) != 0) {
            return new ResponseEntity("Booking Updated", HttpStatus.OK);
        }else {
            return new ResponseEntity("Booking Update Failed", HttpStatus.EXPECTATION_FAILED);
        }

    }

    @GetMapping()
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity getAllBooking(){
        return new ResponseEntity(bookingService.getAllBooking(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity getBookingById(@PathVariable int id){
        return new ResponseEntity(bookingService.getBookingById(id), HttpStatus.OK);
    }

    @GetMapping("/owner/{id}")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity getBookingByOwnerId(@PathVariable int id){
        return new ResponseEntity(bookingService.getBookingByOwnerId(id), HttpStatus.OK);
    }

    @GetMapping("/rider/{id}")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity getBookingByRiderId(@PathVariable int id){
        return new ResponseEntity(bookingService.getBookingByRiderId(id), HttpStatus.OK);
    }

    @GetMapping("/status/{status}")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity getBookingByStatus(@PathVariable String status){
        return new ResponseEntity(bookingService.getBookingByStatus(status), HttpStatus.OK);
    }

    @DeleteMapping ("/{id}")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity deleteBookingById(@PathVariable int id){
        if(bookingService.deleteBookingById(id) != 0) {
            return new ResponseEntity("Booking Deleted", HttpStatus.OK);
        }else {
            return new ResponseEntity("Booking Deletion Failed", HttpStatus.EXPECTATION_FAILED);
        }
    }
}
