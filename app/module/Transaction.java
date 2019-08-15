package module;

import java.math.BigDecimal;
import java.util.ArrayList;

public class Transaction {
    private static ArrayList<Transaction> listOfTransaction = new ArrayList<Transaction>();
    private static long numOfTransaction;
    private String type;
    private long id;
    private long idSender;
    private long idReceiver;
    private long amount;
    private String nameSender;
    private String nameReceiver;

    public void addTransaction(){
        this.listOfTransaction.add(this);
    }
    
}
