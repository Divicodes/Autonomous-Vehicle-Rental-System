package edu.sjsu.avrentals.entity.mongo;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Document(collection = "AVSimulation")
public class AVSimulation {

    @Id
    long avsimulation_id;
    int booking_id;
    String xLocation;
    String yLocation;
    String temperature;
    String latitude;
    String longitude;
    String map;
    String weather;
    long simulation_time;
    double speed;
    String direction;
    String lane_violations;
    String traffic_lights;
    String vbreak;

    public AVSimulation() {
    }

    public AVSimulation(long avsimulation_id, int booking_id, String xLocation, String yLocation, String temperature, String latitude, String longitude, String map, String weather, long simulation_time, double speed, String direction, String lane_violations, String traffic_lights, String vbreak) {
        this.avsimulation_id = avsimulation_id;
        this.booking_id = booking_id;
        this.xLocation = xLocation;
        this.yLocation = yLocation;
        this.temperature = temperature;
        this.latitude = latitude;
        this.longitude = longitude;
        this.map = map;
        this.weather = weather;
        this.simulation_time = simulation_time;
        this.speed = speed;
        this.direction = direction;
        this.lane_violations = lane_violations;
        this.traffic_lights = traffic_lights;
        this.vbreak = vbreak;
    }

    public long getAvsimulation_id() {
        return avsimulation_id;
    }

    public void setTimestamp(long timestamp) {
        this.avsimulation_id = timestamp;
    }

    public int getBooking_id() {
        return booking_id;
    }

    public void setBooking_id(int booking_id) {
        this.booking_id = booking_id;
    }

    public String getxLocation() {
        return xLocation;
    }

    public void setxLocation(String xLocation) {
        this.xLocation = xLocation;
    }

    public String getyLocation() {
        return yLocation;
    }

    public void setyLocation(String yLocation) {
        this.yLocation = yLocation;
    }

    public String getTemperature() {
        return temperature;
    }

    public void setTemperature(String temperature) {
        this.temperature = temperature;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getMap() {
        return map;
    }

    public void setMap(String map) {
        this.map = map;
    }

    public String getWeather() {
        return weather;
    }

    public void setWeather(String weather) {
        this.weather = weather;
    }

    public long getSimulation_time() {
        return simulation_time;
    }

    public void setSimulation_time(long simulation_time) {
        this.simulation_time = simulation_time;
    }

    public double getSpeed() {
        return speed;
    }

    public void setSpeed(double speed) {
        this.speed = speed;
    }

    public String getDirection() {
        return direction;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }

    public String getLane_violations() {
        return lane_violations;
    }

    public void setLane_violations(String lane_violations) {
        this.lane_violations = lane_violations;
    }

    public String getTraffic_lights() {
        return traffic_lights;
    }

    public void setTraffic_lights(String traffic_lights) {
        this.traffic_lights = traffic_lights;
    }

    public String getVbreak() {
        return vbreak;
    }

    public void setVbreak(String vbreak) {
        this.vbreak = vbreak;
    }
}
