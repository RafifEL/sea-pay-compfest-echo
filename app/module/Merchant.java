package module;

public class Merchant extends User {
    private boolean Accepted = false;
    private String address;
    private String phoneNum;
    private Wallet wallet;

    public Merchant(String name, String email, String password, String address, String phoneNum){
        super(name, email, password);
        this.address = address;
        this.phoneNum = phoneNum;
        this.listOfUser.add(this);
    }

    private void setAddress(String address) {
        this.address = address;
    }

    private void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    private void setAccepted(boolean accepted) {
        this.Accepted = accepted;
    }
}
