package edu.sjsu.avrentals.service;

import edu.sjsu.avrentals.dao.sql.ProfileDao;
import edu.sjsu.avrentals.entity.Profile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.Period;

@Service
public class ProfileService {
    @Autowired
    private ProfileDao profileDao;

    @Transactional
    public Profile createProfile(Profile profile){

        String address = (profile.getAddress() == null)? "NA": profile.getAddress();
        String dob = (profile.getDob() == null)? "NA": profile.getDob(); //YYYY-MM-DD format
        int age = (profile.getDob() != null)? calculateAge(LocalDate.parse(profile.getDob())) : 0; //YYYY-MM-DD format
        profile.setAge(age);
        String email = profile.getEmail();
        String firstname = profile.getFirstname();
        String lastname = (profile.getLastname() == null)? "NA":profile.getLastname();
        String membership = profile.getMembership();
        String password = profile.getPassword();
        String payment_card = (profile.getPayment_card() == null)? "NA":profile.getPayment_card();
        String phone = (profile.getPhone() == null)? "NA":profile.getPhone();
        String profile_type = profile.getProfile_type();
        double wallet = profile.getWallet();


        int rowsUpdated = profileDao.createProfile(address, age, dob, email, firstname, lastname, membership, password,
                payment_card, phone, profile_type, wallet);
        int id = profileDao.getLatestProfileId();

        profile.setProfile_id(id);

        return profile;
    }

    public int calculateAge(LocalDate dob) {
        //creating an instance of the LocalDate class and invoking the now() method
        //now() method obtains the current date from the system clock in the default time zone
        LocalDate curDate = LocalDate.now();
        //calculates the amount of time between two dates and returns the years
        if ((dob != null) && (curDate != null)) {
            return Period.between(dob, curDate).getYears();
        } else {
            return 0;
        }
    }

    public Profile validateCredentials(Profile profile){
        return profileDao.validateCredentials(profile.getEmail(), profile.getPassword());
    }

    public int updateProfile(Profile profile){

        int profile_id = profile.getProfile_id();

        Profile base = profileDao.getProfileById(profile_id);

        String address = (profile.getAddress() == null)? base.getAddress(): profile.getAddress();
        String dob = (profile.getDob() == null)? base.getDob(): profile.getDob(); //YYYY-MM-DD format
        int age = (profile.getDob() != null)? calculateAge(LocalDate.parse(profile.getDob())) : base.getAge(); //YYYY-MM-DD format
        profile.setAge(age);
        String email = (profile.getEmail() == null)? base.getEmail():profile.getEmail();
        String firstname = (profile.getFirstname() == null)? base.getFirstname():profile.getFirstname();
        String lastname = (profile.getLastname() == null)? base.getLastname():profile.getLastname();
        String membership = (profile.getMembership() == null)? base.getMembership():profile.getMembership();
        String password = (profile.getPassword() == null)? base.getPassword():profile.getPassword();
        String payment_card = (profile.getPayment_card() == null)? base.getPayment_card():profile.getPayment_card();
        String phone = (profile.getPhone() == null)? base.getPhone():profile.getPhone();
        String profile_type = (profile.getProfile_type() == null)? base.getProfile_type():profile.getProfile_type();
        double wallet = (profile.getWallet() == 0)? base.getWallet():profile.getWallet();

        return profileDao.updateProfile(profile_id, address, age, dob, email, firstname, lastname, membership, password,
                payment_card, phone, profile_type, wallet);
    }


    public Profile getProfileById(int id) {
        return profileDao.getProfileById(id);
    }

}
