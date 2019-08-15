package module;

import java.util.ArrayList;

public class Voucher {
    private static ArrayList<Voucher> listOfVoucher = new ArrayList<Voucher>();
    private String id;
    private String name;
    private int discount;

    public Voucher(String name, int discount){
        this.name = name;
        this.discount = discount;
        listOfVoucher.add(this);
    }

}
