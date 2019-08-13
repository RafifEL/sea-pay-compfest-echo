package module;

public class Merchant {
    private boolean Accepted = false;
    private String id;
    private String name;
    private String password;
    private String address;
    private String email;
    private String phoneNum;
    private Wallet wallet;

    public Merchant(String name, String email, String password){
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

    public void setAccepted(boolean accepted) {
        this.Accepted = accepted;
    }
}
