package module;

public class MerchantBuilder {
    private String name;
    private String email;
    private String password;
    private String address;
    private String phoneNum;

    public MerchantBuilder setName(String name) {
        this.name = name;
        return this;
    }

    public MerchantBuilder setEmail(String email) {
        this.email = email;
        return this;
    }

    public MerchantBuilder setPassword(String password) {
        this.password = password;
        return this;
    }

    public MerchantBuilder setAddress(String address) {
        this.address = address;
        return this;
    }

    public MerchantBuilder setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
        return this;
    }

    public Merchant createMerchant() {
        return new Merchant(name, email, password, address, phoneNum);
    }
}