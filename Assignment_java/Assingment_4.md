# Assingment_4

---

### 33.	Write a program to demonstrate functionalities of this keyword in java. 
---

```

import java.util.Scanner;

 class Employee{
    private int empNo;
    private String name;

     void  setData(int empNo, String name){
        this.empNo= empNo;
        this.name= name;

    }
      void  showData(){
         System.out.println(empNo +"  "+ name);
     }
}

class Ass33{
    public static void main(String[] args) {
       Employee E = new Employee(); 
        E.setData(101,"Ganesh");
        E.showData();

    }
}
```


### 34.	Create a class Circle that has two data members, one to store the radius and another to store area and three methods first init() method to input radius from user, second calculateArea() method to calculate area of circle and third display() method to display values of radius and area. Create class CircleDemo ( main class) that creates the Circle object and calls init(), calculateArea() and display() methods.
---

```

import java.util.Scanner;
class Circle{
    Scanner sc = new Scanner(System.in);
    int rad;
    double area;
    float pi=3.14f;

    void init(){
        System.out.println("Enter radius of circle : ");
        rad =sc.nextInt();
        
        calculateArea();
    }
    
    void calculateArea(){
        area = pi*(rad*rad);
        display();
    }

    void display(){
        System.out.printf("Area of circle : %.4f",area);
    }

}

class CircleDemo{
    public static void main(String[] args) {
        Circle c = new Circle();
        c.init();
        
    }
}

```


### 35.	Create a class MathOperation that has four static methods. add() method that takes two integer numbers as parameter and returns the sum of the numbers. subtract() method that takes two integer numbers as parameter and returns the difference of the numbers. multiply() method that takes two integer numbers as parameter and returns the product. power() method that takes two integer numbers as parameter and returns the power of first number to second number. Create another class Demo (main class) that takes the two numbers from the user and calls all four methods of MathOperation class by providing entered numbers and prints the return values of every method.
---

```
import java.util.Scanner;
class MathOperation{
    static int add(int a, int b){
        return a+b;
    }
    static int subtract(int a, int b){
        return a-b;
    }
    static int multiply(int a, int b){
        return a*b;
    }
    static int power(int a, int b){
        int pow=(int)Math.pow(a,b);
        return pow;
    }
}
class Demo{
    public static void main(String[] args) {
        
    
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter 1st no : ");
        int x =sc.nextInt();
        System.out.print("Enter 2nd no : ");
        int y =sc.nextInt();

        int a = MathOperation.add(x,y);
        int b = MathOperation.subtract(x,y);
        int c = MathOperation.multiply(x,y);
        int d = MathOperation.power(x,y);

        System.out.println("add "+a);
        System.out.println("subtract "+b);
        System.out.println("multiple "+c);
        System.out.println("power "+d);


    }
}
```


### 36.	Create a class MathOperation containing overloaded methods ‘multiply’ to calculate multiplication of following arguments. 
#### a.	 two integers 
#### b.	 three floats 
#### c.	 all elements of array 
#### d.	one double and one integer 
---

```
class MathOperation1{
    static void multiply(int a, int b){
        int ans = a*b;
        System.out.println("a ="+ ans);
    }
    static void multiply(float a, float b, float c){
        float ans = a*b*c;
        System.out.println("b ="+ ans);
    }
    static void multiply(int arr[]){
        int ans=1;
        for(int i=0; i<arr.length; i++){
            ans=ans*arr[i];
        }
        System.out.println("c ="+ ans);
    }
    static void multiply(double a, int b){
        double ans = a*b;
        System.out.println("c ="+ ans);
    }
}
class Demo1{
    public static void main(String[] args) {
        MathOperation1.multiply(2,2);
        MathOperation1.multiply(2.1f,2.1f,2.1f);
        int arr1[]={2,3,4,5};
        MathOperation1.multiply(arr1);
        MathOperation1.multiply(2.1,2);
    }
}
```


### 37.	Create a class Person with properties (name and age) with following features. 
#### a.	Default age of person should be 18.
#### b.	A person object can be initialized with name and age.
#### c.	Method to display name and age of person
#### Create another class PersonDemo ( main class ) that demonstrates the functionalities of Person class by creating Person object and calling methods.
---

```
class Person{
    private int age;
    private String name;

    public Person( String name,int age=18){
        this.age=age;
        this.name=name;
        display();
    }
    void display(){
        System.out.println(name+" "+age);
    }
}

class PersonDemo{
    public static void main(String[] args) {
        Person p = new Person("dipesh");

    }
}
```




### 38.	Create a class Employee with three data members (empNo, salary and totalSalary) and following features.
#### a.	Only parameterized constructor. [Do not overload the constructor]
#### b.	totalSalary always represents salary total of all the employees created.
#### c.	empNo should be auto incremented.
#### d.	display total employees and totalSalary using a method.
#### Create another class EmployeeDemo (main class) that creates some Employee objects and calls Employee method to display no. of employees and total of their salaries.
---

```
class Employee{
    private static int empNo;
    private int salary;
    private static int totalSalary;
    public Employee(int salary){
        this.salary=salary;
        
        empNo++;
        
        totalSalary=totalSalary+salary;
        display();
    }
    void display(){
        System.out.println(empNo+" "+salary+" "+totalSalary);
    }
}
class EmployeeDemo{
    public static void main(String[] args) {
        Employee e1 = new Employee(10000);
        Employee e2 = new Employee(10500);
        Employee e3 = new Employee(20000);
        Employee e4 = new Employee(30000);
    }
}
```
### 39.	Create class Product with three data members (pid, price, quantity) and parameterized constructor that takes values for all three data members.  
#### Create a main method in different class (say ProductDemo) and perform following task:
#### a. Accept information for five Product objects from user and store objects in an array
#### b. Find pid of product with highest price. 
#### c. Create a static method (with array of product’s object as argument) in Product class to calculate and return total amount spent on all products. ( amount spent on single product = price of product * quantity of product )
---

```
import java.util.Scanner;
class Product{

    public int pid;
    public float price;
    private int quantity;

    public Product(int id, float pr, int qu) {
        pid=id;
        price=pr;
        quantity=qu;
        display();
    }
    void display(){
        System.out.println(pid+" "+price+" "+quantity);
    }
    static void calculate(Product arr[]){
        double res =0;
        for(Product a: arr){
            res=res+(double)(a.price*a.quantity);
        }
        System.out.println("Total ammount spend :"+res);
    }

}
class ProductDemo{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Product pr[] = new Product[5];
        for(int i=0; i<pr.length; i++){
            System.out.print((i+1)+":  Enter product id:");
            int pid=sc.nextInt();
            System.out.print((i+1)+":  Enter product price:");
            float price=sc.nextFloat();
            System.out.print((i+1)+":  Enter product quntity:");
            int qnt=sc.nextInt();
            Product p = new Product(pid,price,qnt);
            pr[i]=p;
        } 
        float max = pr[0].price;
        int id = pr[0].pid;
        for(Product a :pr){
            if(a.price>max){
                max=a.price;
                id=a.pid;
            }
        }
        System.out.println("highest price is "+max+" pid is "+id);
        Product.calculate(pr);
    }
}
```
### 40.	Create a class Student having data members name, roll no., age and score. Write a program to accept 10 records of student and store them in an array. And then arrange the student records based on the score group [0-50], [50-65], [65-80], [80-100].
---

```
import java.util.*;
class Student{
    public String name;
    public int rollNo;
    public int age;
    public int score;

    Student(String name,int rollNo,int age,int score){
        this.name=name;
        this.rollNo=rollNo;
        this.age=age;
        this.score=score;
    }
    int getScore(){
        return score;
    }
    void show(){
        System.out.println(" |name: "+name+" |rollno: "+rollNo+" |age: "+age+" |score: "+score);
    }
}
class StudentDemo{
    public static void main(String[] args) {
       Scanner sc =new Scanner(System.in);
       Student arr[] = new Student[5];
       for (int i=0; i<arr.length; i++){
           System.out.print((i+1)+"  :Enter a name : ");
           String name =sc.next();
           System.out.print((i+1)+"  :Enter a rollNo : ");
           int rollNo =sc.nextInt();
           System.out.print((i+1)+"  :Enter a age : ");
           int age =sc.nextInt();
           System.out.print((i+1)+"  :Enter a score : ");
           int score =sc.nextInt();
           System.out.println("**********************");
           Student s = new Student(name,rollNo,age,score);
           arr[i]=s;
        }
       
        // score group [0-50], [50-65], [65-80], [80-100]
        System.out.println("====================");
        System.out.println("score group [0-50]");
        for(int i=0; i<arr.length; i++){
            if(0<arr[i].getScore() && 50>arr[i].getScore()){
                
                
                arr[i].show();
            }
        }
        System.out.println("====================");
        System.out.println("score group [50-65]");
            for(int i=0; i<arr.length; i++){
                if(50<arr[i].getScore() && 65>arr[i].getScore()){
                        
                        arr[i].show();
                    }
            }
        System.out.println("====================");
        System.out.println("score group [65-80]");
            for(int i=0; i<arr.length; i++){
                if(65<arr[i].getScore() && 80>arr[i].getScore()){
                        
                        arr[i].show();
                }
            }
        System.out.println("====================");
        System.out.println("score group [80-100]");
            for(int i=0; i<arr.length; i++){
                if(80<arr[i].getScore() && 100>arr[i].getScore()){
                        
                        arr[i].show();
                }
            }
         
        
    }
}
```
### 41.	Write a program to demonstrate this() construct functionality.
---

```
class Abc{
    Abc(){
        System.out.println("No args");
    }
    Abc(int a){
        this();
        System.out.println("param");
    }
}
class AbcDemo{
    public static void main(String[] args) {
        
        Abc a=new Abc(1);
    }
}
```
### 42.	Create a class Tile to store the edge length of a square tile, and create another class Floor to store length and width of a rectangular floor. Add method totalTiles(Tile t) in Floor class with Tile as argument to calculate the whole number of tiles needed to cover the floor completely.
---

```
class Tile {
	private int elength;

	Tile() {

	}

	Tile(int elength) {
		this.elength = elength;
	}

	int getElength() {
		return elength;
	}

}

class Floor extends Tile {
	private int length;
	private int width;

	Floor() {

	}

	Floor(int length, int width) {
		this.length = length;
		this.width = width;
	}

	void totalTiles(Tile t) {
		double total = (2 * length * width) / t.getElength();
		System.out.println("total tiles required are = " + total);

	}
}

public class Ass42 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Tile t = new Tile(20);
		Floor f = new Floor(10, 10);
		f.totalTiles(t);
	}

}
```

---

*Thank_you*