package edu.sjsu.avrentals.controller;

import edu.sjsu.avrentals.entity.Profile;
import edu.sjsu.avrentals.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/profile")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @PostMapping(path= "/new", consumes = "application/json", produces = "application/json")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity createProfile(@RequestBody Profile profile)
    {
        try{
            if(profile.getEmail() == null){
                return new ResponseEntity("Email Address Missing", HttpStatus.BAD_REQUEST);
            }
            if(profile.getPassword() == null){
                return new ResponseEntity("Password Missing", HttpStatus.BAD_REQUEST);
            }
            if(profile.getFirstname() == null){
                return new ResponseEntity("Firstname Missing", HttpStatus.BAD_REQUEST);
            }
            if(profile.getProfile_type() == null){
                return new ResponseEntity("Profile Type Missing", HttpStatus.BAD_REQUEST);
            }
            if(profileService.validateCredentials(profile) != null){
                return new ResponseEntity("Given Email and Password Combination Already Exists", HttpStatus.BAD_REQUEST);
            }
        }catch(Exception e){
            System.out.println("Exception : " + e);
        }

        if(profileService.createProfile(profile).getProfile_id() == 0){
            return new ResponseEntity("Profile Creation Failed", HttpStatus.EXPECTATION_FAILED);
        }else {
            return new ResponseEntity(profileService.createProfile(profile), HttpStatus.OK);
        }
    }

    @PostMapping(path= "/login", consumes = "application/json", produces = "application/json")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity validateCredentials(@RequestBody Profile profile)
    {
        try{
            if(profile.getEmail() == null){
                return new ResponseEntity("Email Address Missing", HttpStatus.BAD_REQUEST);
            }
            if(profile.getPassword() == null){
                return new ResponseEntity("Password Missing", HttpStatus.BAD_REQUEST);
            }
        }catch(Exception e){
            System.out.println("Exception : " + e);
        }

        if(profileService.validateCredentials(profile) != null) {
            return new ResponseEntity(profileService.validateCredentials(profile), HttpStatus.OK);
        }else {
            return new ResponseEntity("Invalid Credentials", HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping(path= "/update", consumes = "application/json", produces = "application/json")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity updateProfile(@RequestBody Profile profile)
    {
        try{
            if(profile == null) {
                return new ResponseEntity("No Fields Provided For Update", HttpStatus.BAD_REQUEST);
            }
        }catch(Exception e){
            System.out.println("Exception : " + e);
        }

        if(profileService.updateProfile(profile) != 0) {
            return new ResponseEntity("Profile Updated", HttpStatus.OK);
        }else {
            return new ResponseEntity("Profile Update Failed", HttpStatus.EXPECTATION_FAILED);
        }

    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public ResponseEntity getProfileById(@PathVariable int id){
        return new ResponseEntity(profileService.getProfileById(id), HttpStatus.OK);
    }
}
