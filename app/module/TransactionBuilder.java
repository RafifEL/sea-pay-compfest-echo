package module;

public class TransactionBuilder {
    private String type;
    private long id;
    private long idSender;
    private long idReceiver;
    private long amount;
    private String nameSender;
    private String nameReceiver;

    public TransactionBuilder setType(String type) {
        this.type = type;
        return this;
    }

    public TransactionBuilder setId(long id) {
        this.id = id;
        return this;
    }

    public TransactionBuilder setIdSender(long idSender) {
        this.idSender = idSender;
        return this;
    }

    public TransactionBuilder setIdReceiver(long idReceiver) {
        this.idReceiver = idReceiver;
        return this;
    }

    public TransactionBuilder setAmount(long amount) {
        this.amount = amount;
        return this;
    }

    public TransactionBuilder setNameSender(String nameSender) {
        this.nameSender = nameSender;
        return this;
    }

    public TransactionBuilder setNameReceiver(String nameReceiver) {
        this.nameReceiver = nameReceiver;
        return this;
    }

    public Transaction createTransaction() {
        Transaction transaction = new Transaction(type, id, idSender, idReceiver, amount, nameSender, nameReceiver);
        transaction.addTransaction();
        return transaction;
    }
}