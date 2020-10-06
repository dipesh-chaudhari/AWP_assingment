# Assingment_5

---

### 43.	Create a class OneBHK with instance variables roomArea, hallArea and price. Then create default constructor that initializes instance variables with some values and a parameterized constructor that takes values for all instance variables and stores them in instance variables. Now create a method named show()  to print OneBHK’s instance variable values.
#### Create another class TwoBHK which has (inherites) all the properties and behaviors of OneBHK and a new instance variable room2Area. Then create default constructor to initialize all 4 instance variables and a parameterized constructor to take the values for initialization of all instance variables. Override show() method to print all data member information.
#### Write main method in another class (Say Demo) and store three TwoBHK flat’s information and print information using show method. Also print total amount of all flats. 
---

```
class OneBHK{
    private int roomArea;
    private int hallArea;
    private int price;
    OneBHK(){
        roomArea = 1000;
		hallArea = 1100;
		price = 25000;
    }
    OneBHK(int roomArea, int hallArea, int price){
        this.roomArea=roomArea;
        this.hallArea=hallArea;
        this.price=price;
    }
    void show(){
        System.out.println("room area: "+roomArea +" hall area: "+hallArea +" price: "+price);
    }
    int getPrice(){
        return price;
    }
}

class TwoBHK extends OneBHK{
    private int room2Area;
    TwoBHK(){
        super();
        room2Area=1500;
    }
    TwoBHK(int roomArea, int hallArea, int price, int room2Area){
        super(roomArea,hallArea,price);
        this.room2Area=room2Area;
    }
    void show(){
        super.show();
        System.out.println( "room 2 area: "+room2Area );
        System.out.println( "------------------------------------");
    }
}

class DemoFlats{
    public static void main(String[] args) {
        TwoBHK arr[]={new TwoBHK(1000,1200,10000,1000),new TwoBHK(1200,1400,15000,1200),
                    new TwoBHK(1000,1500,20000,1000)};
        
        int totalPrice=0;
        for(TwoBHK a:arr){
            totalPrice=totalPrice+a.getPrice();
            a.show();
        }            
        System.out.println("Total amount of all flats: "+totalPrice);
        
    }
}

```
### 44.	Create three classes
#### -	Faculty with two data members facultyId and salary and two methods, one intput() method for accepting facultyId as input and another printSalary() to print salary.
#### -	FullTimeFaculty that inherits class Faculty with two data members’ basicSalary and allowance. Override input() method in this class that calls super class inut() method and accepts basicSalary and allowance as input. Salary should not be accepted as input but should be calculated using formula (basicSalary + allowance)
#### -	PartTimeFaculty that inherits class Faculty with two data members’ workingHours, ratePerHour. Override input() method in this class that calls super class inut() method and accepts workingHours and ratePerHour as input. Salary should not be accepted as input but should be calculated using formula ( workingHour * ratePerHour )
---

```

class Faculty{
    private int facultyId;
    private int salary;
    void input(int facultyId){
        this.facultyId=facultyId;
    }
    void setSalary(int salary){
        this.salary=salary;
    }
    void show(){
        System.out.println("salary : "+salary );
    }
}

class FullTimeFaculty extends Faculty{
    private int basicSalary;
    private int allowance;

    void input(int facultyId){
        super.input(facultyId);
    }
    void input(int basicSalary, int allowance){
        this.basicSalary=basicSalary;
        this.allowance=allowance;
        super.setSalary(basicSalary+allowance);
    }

}

class PartTimeFaculty extends Faculty{
    private int workingHours; 
    private int ratePerHour;

    void input(int facultyId){
        super.input(facultyId);
    }
    void input(int workingHours, int ratePerHour){
        this.workingHours=workingHours;
        this.ratePerHour=ratePerHour;
        super.setSalary(workingHours*ratePerHour);
    }

}
class DemoFaculty{
    public static void main(String[] args) {
        PartTimeFaculty p = new PartTimeFaculty();
		FullTimeFaculty f = new FullTimeFaculty();
		f.input(1);
		f.input(20000, 1500);
		f.show();
		p.input(2);
		p.input(7, 200);
		p.show();
    }
}

```
### 45.	Create a class Student with two members : rollno and percentage. Create default and parameterized constructors. Create method show() to display information. Create another class CollegeStudent inherits Student class. Add a new member semester to it. Create default and parameterized constructors. Also override show() method that calls super class show() method and displays semester. Create another class SchoolStudent inherits Student class. Add a new member className(eg 12th ,10th etc.) to it. Create default and parameterized constructors. Also override show() method that calls super class show() method and displays className. Create a class( say Demo) with main method that carries out the operation of the project : -- has array to store objects of any class(Student,  CollegeStudent or SchoolStudent) --create two CollegeStudent  and three SchoolStudent objects and store them inside the array -- display all records from the array -- search record on the basic of rollno and check given rollno is of SchoolStudent or of CollegeStudent. --count how many students are having A grade, if for A grade percentage >75. 
---

```

import java.util.Scanner;

class Studento {
	private int rollNo;
	private double percentage;

	Studento() {

	}

	Studento(int rollNo, double percentage) {
		this.rollNo = rollNo;
		this.percentage = percentage;
	}

	int getrollNo() {
		return rollNo;
	}

	double getpercentage() {
		return percentage;
	}

	void show() {
		System.out.println("the student rollno is = " + rollNo + " and percentage is = " + percentage);
	}
}

class CollegeStudent extends Studento {
	private int semester;

	CollegeStudent() {

	}

	CollegeStudent(int semester, int rollNo, double percentage) {
		super(rollNo, percentage);
		this.semester = semester;
	}

	void show() {
		super.show();
		System.out.println("the student semester is = " + semester);
	}
}

class SchoolStudent extends Studento {
	private int classname;

	SchoolStudent() {

	}

	SchoolStudent(int classname, int rollNo, double percentage) {
		super(rollNo, percentage);
		this.classname = classname;
	}

	void display() {
		System.out.println("hello");
	}

	void show() {
		super.show();
		System.out.println("the student classname is = " + classname);
	}

}

 class DemoSCstudent{

	public static void main(String[] args) {
		
        Studento s[] = { new SchoolStudent(12, 101, 80), new SchoolStudent(12, 103, 70),
             new SchoolStudent(12, 102, 90), new CollegeStudent(2, 111, 80), new CollegeStudent(3, 112, 60) };
		for (Studento a : s) {
			a.show();
        }
        
		Scanner sc = new Scanner(System.in);
		System.out.println("enter rollno to search student ");
		int i = sc.nextInt();
		int flag = 0;
		for (Studento a : s) {

			if (i == a.getrollNo()) {
				flag = 0;
				
				if (a instanceof SchoolStudent) {
					System.out.println("schoolstudent");

				} else if (a instanceof CollegeStudent) {
					System.out.println("collegestudent");
				}
				break;
			} else {
				flag = 1;
            }
        }
		if (flag == 1) {
			System.out.println("rollno is not found");
		}
		for (Studento a : s) {
			if (a.getpercentage() > 75) {
				System.out.println("student rollno is =" + a.getrollNo() + " Student have A grade");
			}
		}

	}

}


```
### 46.	Create a program to demonstrate the use of instanceof operator or secure reference down casting.
---

```
class Person{
    void getDeail(){
        System.out.println("Person Detail");
    }

    void getJob(){
        System.out.println("Person Job");
    }
}
class Employee extends Person{
    void getjob(){
        System.out.println("Employee Job");
    }

    void getDept(){
        System.out.println("Employee Dept");
    }
}
class DemoInstance2{
    public static void main(String[] args) {
        Person arr[] ={new Employee(), new Person()};
            for(Person a: arr){
                if(a instanceof Employee){
                    Employee e =(Employee)a;  //down casting
                    e.getDept();
                }
            }

       
    }
}


```
### 47.	Create a program to demonstrate constructor chaining.
---

```
class Light{
    private int watt;
    Light(){
        System.out.println("light: no Args");
    }
    Light(int watt){
        System.out.println("light: param");
    }

}
class Tubelight extends Light{
    private int volt;
    Tubelight(){
        System.out.println("Tubelight: no Args");
    }
    Tubelight(int volt){
        super(10);
        System.out.println("Tubelight: param");
    }
}
class DemoChaning{
        public static void main(String[] args) {
            Tubelight t=new Tubelight();
            Tubelight t1=new Tubelight(100);
        }          
}

```

---

*Thank_you*