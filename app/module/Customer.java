package module;

import java.math.BigDecimal;

public class Customer extends User {
    private String address;
    private String phoneNum;
    private Wallet wallet;

    public Customer(String name, String email, String password){
        super(name, email, password);
        this.wallet = new Wallet(this.id);
        this.listOfUser.add(this);
    }
    
    private void setAddress(String address) {
        this.address = address;
    }

    private void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }
}