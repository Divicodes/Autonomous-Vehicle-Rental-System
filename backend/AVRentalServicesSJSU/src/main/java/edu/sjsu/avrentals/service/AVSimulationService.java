package edu.sjsu.avrentals.service;

import edu.sjsu.avrentals.dao.mongo.AVSimulationDao;
import edu.sjsu.avrentals.entity.mongo.AVSimulation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AVSimulationService {
    @Autowired
    private AVSimulationDao avSimulationDao;

    public AVSimulation addAVSimulation(AVSimulation avSimulation){
        return avSimulationDao.save(avSimulation);
    }

    public AVSimulation updateAVSimulation(AVSimulation avSimulation){
        return avSimulationDao.save(avSimulation);
    }

    public List<AVSimulation> getAVSimulationByBookingId(int id){
        return avSimulationDao.findAll().stream().filter(each -> { return each.getBooking_id()== id;}).collect(Collectors.toList());

    }

    public List<AVSimulation> getAllAVSimulation(){
        return avSimulationDao.findAll();

    }

    public void deleteAVSimulationByBookingId(int id){
        List<AVSimulation> temp = getAVSimulationByBookingId(id);
        if(temp != null) {
            for(AVSimulation each : temp) {
                avSimulationDao.delete(each);
            }
        }
    }
}
