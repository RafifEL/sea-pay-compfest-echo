package module;

public class WalletService{
    public void transfer(Wallet sender, Wallet receiver, long amount){
        if(sender.getBalance()>=amount){
            receiver.addBalance(sender.getBalance());
            sender.substractBalance(amount);
        }    
    }
    public void topUp(Wallet wallet, long amount){
        wallet.addBalance(amount);
    }
}