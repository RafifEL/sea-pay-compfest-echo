package module;

public class Voucher {
    private String id;
    private String name;
    private int discount;

    public Voucher(String name, int discount){
        this.name = name;
        this.discount = discount;
    }
}
