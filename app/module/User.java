package module;

import java.lang.reflect.Array;
import java.util.ArrayList;

public abstract class User {
    protected static ArrayList<User> ListOfUser = new ArrayList<User>();
    protected static int numOfUser = 0;
    protected long id;
    protected String name;
    protected String password;
    protected String email;

    public User(String name, String email, String password){
        numOfUser += 1;
        this.id = numOfUser;
        this.name = name;
        this.password = password;
        this.email = email;
    }
}
