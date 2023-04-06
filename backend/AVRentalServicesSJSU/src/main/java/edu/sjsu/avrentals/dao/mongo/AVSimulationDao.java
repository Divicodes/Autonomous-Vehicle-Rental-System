package edu.sjsu.avrentals.dao.mongo;

import edu.sjsu.avrentals.entity.mongo.AVSimulation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AVSimulationDao extends MongoRepository<AVSimulation,Long> {
}
