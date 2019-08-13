package module;

import java.math.BigDecimal;

public class Customer {
    private String id;
    private String name;
    private String password;
    private String address;
    private String email;
    private String phoneNum;
    private Wallet wallet;

    public Customer(String name, String email, String password){
        this.name = name;
        this.password = password;
        this.email = email;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }


}
