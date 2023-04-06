package edu.sjsu.avrentals.dao.sql;

import edu.sjsu.avrentals.controller.ProfileController;
import edu.sjsu.avrentals.entity.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface ProfileDao extends JpaRepository<Profile, Long> {

    @Transactional
    @Modifying
    @Query(value = "insert into profile(address, age, dob, email, firstname, lastname, membership, password, " +
            "payment_card, phone, profile_type, wallet) values(:address, :age, :dob, :email, :firstname, " +
            ":lastname, :membership, :password, :payment_card, :phone, :profile_type, :wallet)", nativeQuery = true)
    int createProfile(String address, int age, String dob, String email, String firstname, String lastname,
                      String membership, String password, String payment_card, String phone, String profile_type,
                      double wallet);

    @Query(value = "select profile_id from profile order by profile_id desc limit 1", nativeQuery = true)
    int getLatestProfileId();

    @Query(value = "SELECT * FROM profile WHERE profile_id = :id", nativeQuery = true)
    Profile getProfileById(int id);

    @Query(value = "SELECT * FROM profile WHERE email = :email AND password = :password limit 1", nativeQuery = true)
    Profile validateCredentials(String email, String password);

    @Transactional
    @Modifying
    @Query(value = "UPDATE profile SET address = :address, age = :age, dob = :dob, email = :email, firstname = :firstname," +
            "  lastname = :lastname, membership = :membership, password = :password, payment_card = :payment_card, " +
            " phone = :phone, profile_type = :profile_type, wallet = :wallet where profile_id = :profile_id", nativeQuery = true)
    int updateProfile(int profile_id, String address, int age, String dob, String email, String firstname, String lastname,
                      String membership, String password, String payment_card, String phone, String profile_type,
                      double wallet);






}
