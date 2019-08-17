package module;

import java.math.BigDecimal;
import java.util.ArrayList;

public class Wallet {
    private static ArrayList<Wallet> listOfWallet = new ArrayList<Wallet>();
    private static int numOfWallet = 0;
    private long id;
    private long balance;
    private double seaPoint;
    private Long userId;

    public Wallet(Long userId){
        numOfWallet += 1;
        this.id = numOfWallet;
        this.balance = 0;
        this.seaPoint = 0;
        this.userId = userId;
        listOfWallet.add(this);
    }

    public void addBalance(long amount){
        this.balance += amount;
    }

    public void substractBalance(Long balance) {
        this.balance =- balance;
    }

    public Long getId() {
        return id;
    }

    public Long getUserID() {
        return userId;
    }

    public Long getBalance() {
        return this.balance;
    }

}
