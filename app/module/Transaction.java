package module;

import java.math.BigDecimal;
import java.util.ArrayList;

public class Transaction {
    private static ArrayList<Transaction> listOfTransaction = new ArrayList<Transaction>();
    private static long numOfTransaction = 0;
    private String type;
    private long id;
    private long idSender;
    private long idReceiver;
    private long amount;
    private String nameSender;
    private String nameReceiver;

    public Transaction(String type, long id, long idSender, long idReceiver, long
            amount, String nameSender, String nameReceiver  ) {
        numOfTransaction += 1;
        this.type = type ;
        this.id = numOfTransaction;
        this.idSender= idSender;
        this.idReceiver = idReceiver;
        this.amount = amount;
        this.nameSender = nameSender;
        this.nameReceiver = nameReceiver;
        listOfTransaction.add(this);
    }
}
