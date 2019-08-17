package module;

public class Item {
    private String idMerch;
    private String idItem;
    private String name;
    private int price;
    private String description;

    public Item(String name, int price, String description){
        this.name = name;
        this.price = price;
        this.description = description;
    }
}
