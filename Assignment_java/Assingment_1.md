# Assingment_1

### 01.	Write a program to print Hello World. Compile and run it using command prompt.

---

```
class Ass1{
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
```

### 02.	Write a program to declare a variable named rollNo of integer type. Assign it a value (let say 100) to it and print the following statement roll no = 100 .

---

```
class Ass2{
    public static void main(String[] args) {
        int rollNo=100;
        System.out.println("Roll no is :"+rollNo);
    }
}
```

### 03.	Find the result of following expressions. You need to determine the primitive data type of the variable by looking carefully the given expression and initialize variables by any random value.
* A. y = x2 + 3x - 7 (print value of y) 
* B. y = x++ + ++x (print value of x and y) 
* C. z = x++ - --y - --x  +  x++ (print value of x ,y and z)
* D. z = x && y || !(x || y)  (print value of z) [ x, y, z are boolean variables ]

---

```
import java.util.Scanner;
class Ass3{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter ramdom value : ");
        int x =sc.nextInt();
       int y = x*x + 3*x - 7 ;
       System.out.println("A.y= "+y);
        y = x++ + ++x; 
        System.out.println("B.y= "+y);
        int z = x++ - --y - --x  +  x++;
        System.out.println("C.z= "+z);

        boolean x1 = true;
        boolean y1 = false;
        boolean z1 = x1 && y1 || !(x1 || y1);
        System.out.println("D.z= "+z1);
    }
}
```

### 04.	Write a program that initializes 2 byte type of variables. Add the values of these variables and store in a byte type of variable. [Note: primitive down casting is required in this program ] .

---

```
class Ass4{
    public static void main(String[] args) {
        byte b =126;
        byte c =10;
        int z = b+c;
        byte h = (byte)z;
        System.out.println(z);
        System.out.println(h);
    }
}
```

### 05.	Write a program that takes user’s name as command line argument and prints Welcome <entered user name>.

---

```
class Ass5{
    public static void main(String[] args) {
        String name = args[0];
        System.out.println("Welcome "+name);
    }
}
```

### 06.	Write a program that takes radius of a circle as input. Read the entered radius using Scanner class. Then calculate and print the area and circumference of the circle.

---

```
import java.util.Scanner;
class Ass6{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter radius of a circle : ");
        int rad = sc.nextInt();
        float pi = 3.14F;
        float area = pi * rad * rad;
        float cir = 2 * pi* rad;
        System.out.printf("area  of the circle : %.3f \n \n",area);
        System.out.printf("circumference of the circle : %.3f",cir);
    }
}
```

### 07.	Write a program to calculate sum of 5 subject’s marks & find percentage. Take the obtained marks from user using Scanner class. Output should be in this format [ percentage marks = 99 % ]. Use concatenation operator here.

---

```
import java.util.Scanner;
class Ass7{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter 1st subject marks : ");
        int sub1 = sc.nextInt();
        System.out.print("Enter 2nd subject marks : ");
        int sub2 = sc.nextInt();
        System.out.print("Enter 3rd subject marks : ");
        int sub3 = sc.nextInt();
        System.out.print("Enter 4th subject marks : ");
        int sub4 = sc.nextInt();
        System.out.print("Enter 5th subject marks : ");
        int sub5 = sc.nextInt();

        int sum = sub1+sub2+sub3+sub4+sub5;
        float per = sum*100/500;
        System.out.print("percentage marks = "+ per +"%");
        
    }
}
```

### 08.	Write a program to find the simple interest. Take the principle amount, rate of interest and time from user using Scanner class.

---

```
import java.util.Scanner;
class Ass8{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter principle amount : ");
        int pri = sc.nextInt();
        System.out.print("Enter rate of interest : ");
        float ins = sc.nextInt();
        System.out.print("Enter no of years : ");
        int yr = sc.nextInt();
       
        float sin = (pri*ins*yr)/100;
        System.out.println("simple interest is : "+sin);
        
    }
}
```

### 09.	Write a program to read the days (eg. 670 days) as integer value using Scanner class. Now convert the entered days into complete years, months and days and print them.

---

```
import java.util.Scanner;
class Ass9{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter days : ");
        int userDay = sc.nextInt();
        int year = userDay / 365;
        int month = (userDay % 365)/30;
        int day = (userDay % 365)%30;
        
        System.out.print("Years : "+year+" month : "+month+" days : "+day);


        
    }
}
```

### 10.	Write a program to convert temperature from Fahrenheit to Celsius. Take Fahrenheit as input using Scanner class. [ formula : C= 5*(f-32)/9 ]

---

```
import java.util.Scanner;
class Ass10{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter temperature in Fahrenheit : ");
        int f = sc.nextInt();
        float c= 5*(f-32)/9;
        
        System.out.print(" temperature from in Celsius "+c);


        
    }
}
```

### 11.	Write a program to swap two numbers without using third variable.

---

```
import java.util.Scanner;
class Ass11{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("a = ");
        int a = sc.nextInt();
        System.out.print("b = ");
        int b = sc.nextInt();
        
        b =(a+b)-(a=b);
        System.out.print("a = :"+a +"  b = :"+b);
    }
}
```

### 12.	In a company an employee is paid as under: If his basic salary is less than Rs. 10000, then HRA = 10% of basic salary and DA = 90% of basic salary. If his salary is either equal to or above Rs. 10000, then HRA = Rs. 2000 and DA = 98% of basic salary. If the employee's salary is input by the user write a program to find his gross salary. [ formula : GS= Basic + DA + HRA ].

---

```
import java.util.Scanner;
class Ass12{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Basic Salary = ");
        int bc = sc.nextInt();
        if(bc < 10000){
            float hra = bc*0.10F;
            float da = bc*0.90F;
            float GS= bc + da + hra;
            System.out.print("gross salary= "+GS);

        }else if(bc >= 10000){
            float hra = 2000;
            float da = bc*0.98F;
            float GS= bc + da + hra;
            System.out.print("gross salary= "+GS);
        }
        
    }
}
```

### 13.	Program to find greatest in 3 numbers. [ once using if else statement and then using ternary operator ( logical operator) ] 

---

```
import java.util.Scanner;
class Ass13{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("enter 1st = ");
        int a = sc.nextInt();
        System.out.print("enter 2nd = ");
        int b = sc.nextInt();
        System.out.print("enter 3rd = ");
        int c = sc.nextInt();

       /* if(a>b && a>b){
            System.out.println("1st number is greater");
        }else if(b>a && b>c){
            System.out.println("2nd number is greater");
        }else{
            System.out.println("3rd number is greater");
        }
        */

        int g = (a>b)? ((a>c)?a:c) : ((b>c)?b:c);
        System.out.println(g+" number is greater");
        
    }
}
```

### 14.	Program to check that entered year is a leap year or not.

---

```
import java.util.Scanner;
class Ass14{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("enter year = ");
        int yr = sc.nextInt();
       if( yr%100 != 0 &&  yr%4 == 0 || yr%400 ==0 ){
        System.out.print("This is leap year");
       }else{
        System.out.print("This is not leap year");
       
       }
        
    }
}
```

### 15.	Accept person’s gender (character m for male and f for female), age (integer), as input and then check whether person is eligible for marriage or not.

---

```
import java.util.Scanner;
class Ass15{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("enter gender = ");
        char gen = sc.next().charAt(0);
        System.out.print("enter age = ");
        int age = sc.nextInt();

        if(gen == 'm'){
            if(age>=21){
                System.out.print("eligible for marriage");
            }else{
                System.out.print("NOT eligible for marriage");
            }

        }else if(gen == 'f'){
            if(age>=18){
                System.out.print("eligible for marriage");
            }else{
                System.out.print("NOT eligible for marriage");
            }

        }else{
            System.out.print("Enter valid Input");
        }
      
       
       
        
    }
}
```
---

*Thank_you*
