package edu.sjsu.avrentals.dao.sql;

import edu.sjsu.avrentals.controller.ProfileController;
import edu.sjsu.avrentals.entity.Booking;
import edu.sjsu.avrentals.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface TicketDao extends JpaRepository<Ticket, Long> {

    @Transactional
    @Modifying
    @Query(value = "insert into ticket(reporter_id, time_created, time_closed, description, comments, status) " +
            "values(:reporter_id, :time_created, :time_closed, :description, :comments, :status)", nativeQuery = true)
    int addTicket(int reporter_id, long time_created, long time_closed, String description, String comments, String status);

    @Query(value = "select ticket_id from ticket order by ticket_id desc limit 1", nativeQuery = true)
    int getLatestTicketId();

    @Query(value = "SELECT * FROM ticket WHERE ticket_id = :id", nativeQuery = true)
    Ticket getTicketById(int id);

    @Query(value = "SELECT * FROM ticket WHERE reporter_id = :id", nativeQuery = true)
    Ticket[] getTicketByReporterId(int id);

    @Query(value = "SELECT * FROM ticket WHERE status LIKE %:status%", nativeQuery = true)
    Ticket[] getTicketByStatus(String status);

    @Query(value = "SELECT * FROM ticket order by time_created desc", nativeQuery = true)
    Ticket[] getAllTickets();

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM ticket WHERE ticket_id = :id", nativeQuery = true)
    int deleteTicketById(int id);


    @Transactional
    @Modifying
    @Query(value = "UPDATE ticket SET reporter_id = :reporter_id, time_created = :time_created, time_closed = :time_closed, " +
            "description = :description, comments = :comments, status = :status where ticket_id = :ticket_id", nativeQuery = true)
    int updateTicket(int ticket_id, int reporter_id, long time_created, long time_closed, String description,
                     String comments, String status);




}
