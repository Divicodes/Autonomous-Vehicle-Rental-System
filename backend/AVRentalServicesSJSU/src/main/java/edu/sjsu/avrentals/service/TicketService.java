package edu.sjsu.avrentals.service;


import edu.sjsu.avrentals.dao.sql.TicketDao;
import edu.sjsu.avrentals.entity.Ticket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.Period;

@Service
public class TicketService {
    @Autowired
    private TicketDao ticketDao;

    @Transactional
    public Ticket addTicket(Ticket ticket){

        int reporter_id = ticket.getReporter_id();
        long time_created = System.currentTimeMillis();
        ticket.setTime_created(time_created);
        long time_closed = (ticket.getTime_closed() == 0)? 0:ticket.getTime_closed();
        String description = (ticket.getDescription() == null)? "NA":ticket.getDescription();
        ticket.setDescription(description);
        String comments = (ticket.getComments() == null)? "NA":ticket.getComments();
        ticket.setComments(comments);
        String status = (ticket.getStatus() == null)? "open":ticket.getStatus();
        ticket.setStatus(status);

        int rowsUpdated = ticketDao.addTicket(reporter_id, time_created, time_closed, description, comments, status);
        int id = ticketDao.getLatestTicketId();

        ticket.setTicket_id(id);

        return ticket;
    }

    public int updateTicket(Ticket ticket){

        int ticket_id = ticket.getTicket_id();

        Ticket base = ticketDao.getTicketById(ticket_id);

        int reporter_id = (ticket.getReporter_id() == 0)?base.getReporter_id():ticket.getReporter_id();
        long time_created = (ticket.getTime_created() == 0)? base.getTime_created():ticket.getTime_created();
        long time_closed = (ticket.getTime_closed() == 0)? base.getTime_closed():ticket.getTime_closed();
        String description = (ticket.getDescription() == null)? base.getDescription():ticket.getDescription();
        String comments = (ticket.getComments() == null)? base.getComments():ticket.getComments();
        String status = (ticket.getStatus() == null)? base.getStatus():ticket.getStatus();

        return ticketDao.updateTicket(ticket_id, reporter_id, time_created, time_closed, description, comments, status);
    }


    public Ticket getTicketById(int id) {
        return ticketDao.getTicketById(id);
    }

    public Ticket[] getTicketByReporterId(int id) {
        return ticketDao.getTicketByReporterId(id);
    }

    public Ticket[] getTicketByStatus(String status) {
        return ticketDao.getTicketByStatus(status);
    }

    public Ticket[] getAllTickets() {
        return ticketDao.getAllTickets();
    }

    public int deleteTicketById(int id) {
        return ticketDao.deleteTicketById(id);
    }

}
