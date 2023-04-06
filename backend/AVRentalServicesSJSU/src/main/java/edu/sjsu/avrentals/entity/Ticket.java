package edu.sjsu.avrentals.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int ticket_id;
    int reporter_id;
    long time_created;
    long time_closed;
    String description;
    String comments;
    String status;

    public Ticket() {
    }

    public Ticket(int ticket_id, int reporter_id, long time_created, long time_closed, String description, String comments, String status) {
        this.ticket_id = ticket_id;
        this.reporter_id = reporter_id;
        this.time_created = time_created;
        this.time_closed = time_closed;
        this.description = description;
        this.comments = comments;
        this.status = status;
    }

    public int getTicket_id() {
        return ticket_id;
    }

    public void setTicket_id(int ticket_id) {
        this.ticket_id = ticket_id;
    }

    public int getReporter_id() {
        return reporter_id;
    }

    public void setReporter_id(int reporter_id) {
        this.reporter_id = reporter_id;
    }

    public long getTime_created() {
        return time_created;
    }

    public void setTime_created(long time_created) {
        this.time_created = time_created;
    }

    public long getTime_closed() {
        return time_closed;
    }

    public void setTime_closed(long time_closed) {
        this.time_closed = time_closed;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
