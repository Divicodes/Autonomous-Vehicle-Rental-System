package edu.sjsu.avrentals.controller;


import edu.sjsu.avrentals.entity.Ticket;

import edu.sjsu.avrentals.entity.mongo.AVSimulation;
import edu.sjsu.avrentals.service.AVSimulationService;
import edu.sjsu.avrentals.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/avsimulation")
public class AVSimulationController {

    @Autowired
    private AVSimulationService avSimulationService;

    @PostMapping(path= "/new", consumes = "application/json", produces = "application/json")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity addAVSimulation(@RequestBody AVSimulation avSimulation)
    {
        try{
            if(avSimulation.getBooking_id() == 0){
                return new ResponseEntity("Booking ID Missing", HttpStatus.BAD_REQUEST);
            }
        }catch(Exception e){
            System.out.println("Exception : " + e);
        }

        avSimulation = avSimulationService.addAVSimulation(avSimulation);

        if(avSimulation.getAvsimulation_id() == 0){
            return new ResponseEntity("AVSimulation Data Entry Failed", HttpStatus.EXPECTATION_FAILED);
        }else {
            return new ResponseEntity(avSimulation, HttpStatus.OK);
        }
    }


//    @PostMapping(path= "/update", consumes = "application/json", produces = "application/json")
//    public ResponseEntity updateAVSimulation(@RequestBody AVSimulation avSimulation)
//    {
//        try{
//            if(avSimulation == null) {
//                return new ResponseEntity("No Fields Provided For Update", HttpStatus.BAD_REQUEST);
//            }
//        }catch(Exception e){
//            System.out.println("Exception : " + e);
//        }
//
//        if(avSimulationService.updateAVSimulation(avSimulation) != 0) {
//            return new ResponseEntity("Simulation Record Updated", HttpStatus.OK);
//        }else {
//            return new ResponseEntity("Simulation Record Update Failed", HttpStatus.EXPECTATION_FAILED);
//        }
//
//    }

    @GetMapping("/booking/{id}")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity getAVSimulationByBookingId(@PathVariable int id) {
        return new ResponseEntity(avSimulationService.getAVSimulationByBookingId(id), HttpStatus.OK);
    }


    @GetMapping("/all")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity getAllAVSimulation(){
        return new ResponseEntity(avSimulationService.getAllAVSimulation(), HttpStatus.OK);
    }



    @DeleteMapping ("/booking/{id}")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity deleteAVSimulationById(@PathVariable int id){
        avSimulationService.deleteAVSimulationByBookingId(id);
        return new ResponseEntity("Simulation Records Deleted For Given ID", HttpStatus.OK);
    }
}
