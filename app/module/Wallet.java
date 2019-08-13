package module;

import java.math.BigDecimal;

public class Wallet {
    String id;
    BigDecimal money;
    BigDecimal seaPoint;

    public Wallet(){
        this.money = BigDecimal.ZERO;
        this.seaPoint = BigDecimal.ZERO;
    }

}
