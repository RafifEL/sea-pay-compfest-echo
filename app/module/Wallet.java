package module;

import java.math.BigDecimal;
import java.util.ArrayList;

public class Wallet {
    private static ArrayList<Wallet> listOfWallet = new ArrayList<Wallet>();
    private static int numOfWallet = 0;
    private long id;
    private double money;
    private double seaPoint;

    public Wallet(){
        numOfWallet += 1;
        this.id = numOfWallet;
        this.money = 0;
        this.seaPoint = 0;
        listOfWallet.add(this);
    }

}
