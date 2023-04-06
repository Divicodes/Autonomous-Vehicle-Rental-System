package edu.sjsu.avrentals.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int profile_id;
    String profile_type;
    String firstname;
    String lastname;
    String password;
    String dob;
    int age;
    String address;
    String phone;
    String email;
    String membership;
    String payment_card;
    int wallet;

    public Profile() {
    }

    public Profile(int profile_id, String profile_type, String firstname, String lastname, String password, String dob, int age, String address, String phone, String email, String membership, String payment_card, int wallet) {
        this.profile_id = profile_id;
        this.profile_type = profile_type;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.dob = dob;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.membership = membership;
        this.payment_card = payment_card;
        this.wallet = wallet;
    }

    public int getProfile_id() {
        return profile_id;
    }

    public void setProfile_id(int profile_id) {
        this.profile_id = profile_id;
    }

    public String getProfile_type() {
        return profile_type;
    }

    public void setProfile_type(String profile_type) {
        this.profile_type = profile_type;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMembership() {
        return membership;
    }

    public void setMembership(String membership) {
        this.membership = membership;
    }

    public String getPayment_card() {
        return payment_card;
    }

    public void setPayment_card(String payment_card) {
        this.payment_card = payment_card;
    }

    public int getWallet() {
        return wallet;
    }

    public void setWallet(int wallet) {
        this.wallet = wallet;
    }
}
