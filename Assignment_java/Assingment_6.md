# Assingment_6

---


### 48.	Create an Abstract class Processor with int member variable data  and method showData to display data value. Create abstract method process() to define processing of member data. Create a class  Factorial using abstract class Processor  to calculate and print factorial of a number by overriding the process method. b. Create a class Circle using abstract class Processor to calculate and print area of a circle by overriding the process method.Ask user to enter choice (factorial or circle area).  Also ask data to work upon. Use Processor class reference to achieve this mechanism.
---

```
import java.util.*;
abstract  class Processor{
     int data;
    void showData(){
        System.out.println("data :"+data);
    }
    abstract void process();
}
class Factorial extends Processor{
    Scanner sc = new Scanner(System.in);
   void process(){
       System.out.print("Enter a No for find factorial : ");
       int n=sc.nextInt();
       int fact=1;
       for(int i=1; i<=n; i++){
            fact=fact*i;
        }
       System.out.println(n+" = "+fact);
   }
}
class Circle extends Processor{
    final double pi =3.14;
    Scanner sc = new Scanner(System.in);
    void process(){
        System.out.print("Enter a radius of circle for find Area of circle : ");
        double r=sc.nextDouble();
        double area = pi * r * r;
        System.out.println(" area of circle is = "+area);
    }
}
class DemoAbstract{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("1 : find factorial. ");
        System.out.println("2 : find Area of circle. ");
        System.out.print("Enter your choice no :");
        int n =sc.nextInt();

        switch (n) {
            case 1:
                Processor f = new Factorial();
                f.process();
                break;
            case 2:
                Processor c = new Circle();
                c.process();
                break;
        
            default:
                System.out.println("Enter valid Choise...");
        }
    }
}


```


### 49.	Create Interface Taxable with members salesTax=7% and incomeTax=10.5%. create abstract method calcTax(). a. Create class Employee(empId,name,salary) and implement Taxable to calculate incomeTax on yearly salary. b. Create class Product(pid,price,quantity) and implement Taxable to calculate salesTax on unit price of product. c. Create class for main method(Say XYZ), accept employee information and a product information from user and print income tax and sales tax respectively.
---

```
Interface Taxable{
    float salesTax =0.07f;
    float incomeTax=0.105f;
    void calcTax();
}
class Employee implement Taxable{
    private int empId;
    private String name;
    private double salary;
    Employee(int empId,String name,double salary){
        this.empId =empId;
        this.name =name;
        this.salary =salary;
    }
    void calcTax(){

    }
    
}
class Product implement Taxable{
    private int pid;
    private int quantity;
    private double price;
    Product(int pId,double price,int quantity){
        this.pId =pid;
        this.price =price;
        this.quantity =quantity;
    }
    void calcTax(){
       
    }
    
}
class Xyz{
    public static void main(String[] args) {
        
    }
}


```

---

*Thank_you*