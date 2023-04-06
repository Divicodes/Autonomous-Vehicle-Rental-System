package edu.sjsu.avrentals.controller;


import edu.sjsu.avrentals.entity.Ticket;

import edu.sjsu.avrentals.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ticket")
public class TicketController {

    @Autowired
    private TicketService ticketService;

    @PostMapping(path= "/new", consumes = "application/json", produces = "application/json")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity addTicket(@RequestBody Ticket ticket)
    {
        try{
            if(ticket.getReporter_id() == 0){
                return new ResponseEntity("Reporter ID Missing", HttpStatus.BAD_REQUEST);
            }
            if(ticket.getDescription() == null){
                return new ResponseEntity("Ticket Description Missing", HttpStatus.BAD_REQUEST);
            }

        }catch(Exception e){
            System.out.println("Exception : " + e);
        }

        ticket = ticketService.addTicket(ticket);

        if(ticket.getTicket_id() == 0){
            return new ResponseEntity("Ticket Creation Failed", HttpStatus.EXPECTATION_FAILED);
        }else {
            return new ResponseEntity(ticket, HttpStatus.OK);
        }
    }


    @PostMapping(path= "/update", consumes = "application/json", produces = "application/json")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity updateTicket(@RequestBody Ticket ticket)
    {
        try{
            if(ticket == null) {
                return new ResponseEntity("No Fields Provided For Update", HttpStatus.BAD_REQUEST);
            }
        }catch(Exception e){
            System.out.println("Exception : " + e);
        }

        if(ticketService.updateTicket(ticket) != 0) {
            return new ResponseEntity("Ticket Updated", HttpStatus.OK);
        }else {
            return new ResponseEntity("Ticket Update Failed", HttpStatus.EXPECTATION_FAILED);
        }

    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity getTicketById(@PathVariable int id){
        return new ResponseEntity(ticketService.getTicketById(id), HttpStatus.OK);
    }

    @GetMapping("/reporter/{id}")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity getTicketByReporterId(@PathVariable int id){
        return new ResponseEntity(ticketService.getTicketByReporterId(id), HttpStatus.OK);
    }

    @GetMapping("/status/{status}")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity getTicketByStatus(@PathVariable String status){
        return new ResponseEntity(ticketService.getTicketByStatus(status), HttpStatus.OK);
    }

    @GetMapping()
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity getAllTickets(){
        return new ResponseEntity(ticketService.getAllTickets(), HttpStatus.OK);
    }

    @DeleteMapping ("/{id}")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity deleteTicketById(@PathVariable int id){
        if(ticketService.deleteTicketById(id) != 0) {
            return new ResponseEntity("Ticket Deleted", HttpStatus.OK);
        }else {
            return new ResponseEntity("Ticket Deletion Failed", HttpStatus.EXPECTATION_FAILED);
        }
    }
}
