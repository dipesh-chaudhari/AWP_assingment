# Assingment_2

---

### 26.	Create an array of 17 elements in 5 rows.  And calculate sum of all elements.
---

```
class Ass26{
    public static void main(String[] args) {
        int arr1[] ={2,3,4};
        int arr2[] = {1,2,3};
        int arr3[] = {4,3,2};
        int arr4[] = {1,2,3,4};
        int arr5[] = {5,6,7,8};

        int col[][] =new int[5][];

        col[0]=arr1;
        col[1]=arr2;
        col[2]=arr3;
        col[3]=arr4;
        col[4]=arr5;
        int sum=0;
        for(int a[] : col){
            for(int b : a){
                System.out.print(b);
            }
            System.out.println("");
        }
        for(int a[] : col){
            for(int b : a){
                sum=sum+b;
            }     
        }
        System.out.println("total = : "+sum);
    }
}
```
### 27.	Write a program to fine the smallest and greatest number present in the array of integer type.
---

```
class Ass27{
    public static void main(String[] args) {
        int arr1[] ={2,1,4,7,10,9};
        int gr=arr1[0];
        int sm=arr1[0];
        for(int i=0; i<arr1.length; i++){
            for(int j=0; j<arr1.length; j++){
                if(gr<arr1[j]){
                    gr=arr1[j];
                }
            }
        }
        for(int i=0; i<arr1.length; i++){
            for(int j=0; j<arr1.length; j++){
                if(sm>arr1[j]){
                    sm=arr1[j];
                }
            }
        }
        System.out.println(gr);
        System.out.println(sm);
    }       
}
```
### 28.	Initialize one String type of array and print the elements using for each loop.
---

```
class Ass28{
    public static void main(String[] args) {
        String arr1[] ={"pratham","DIpesh","Akshay","Vish"};
        
        for(String a : arr1){
            System.out.println(a);
        }
    }       
}
```
### 29.	Write a program to print the total number of one-D arrays in a two-D array and the number of elements in every one-D array present in the two-D arrays.
---

```
class Ass29{
    public static void main(String[] args) {
        int arr1[] ={2,3,4};
        int arr2[] = {1,2,3};
        int arr3[] = {4,3,2};
        int arr4[] = {1,2,3,4};
        int arr5[] = {5,6,7,8};

        int col[][] =new int[5][];

        col[0]=arr1;
        col[1]=arr2;
        col[2]=arr3;
        col[3]=arr4;
        col[4]=arr5;
        int count=0;
        for(int a[] : col){
            for(int b : a){
                System.out.print(b);
            }
            count++;
            System.out.println("");
        }
        
        System.out.println("total no. of one D array : "+count);
    }
}
```
### 30.	Create an integer type 2-D array of size [3X3]. Take the elements from the user and then calculate the sum of the elements present in the diagonal.
---

```
import java.util.Scanner;
class Ass30{
    public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);

        int col[][] =new int[3][3];
        
        for(int i=0; i<col.length; i++){
           for(int j=0; j<col.length; j++){
                
                col[i][j]=sc.nextInt();
           }
        }

        int sum=0;

        sum=col[0][0]+col[1][1]+col[2][2];


        for(int a[]:col){
            for(int d:a){
                System.out.print(d);

            }
            System.out.println("");
        }

        System.out.println("sum of diagonal: "+sum);
     
    }
}
```
### 31.	Create a class Student with 2 data members rno and name. Create one method setData() that takes roll number and student name as parameter and stores them in data members rno and name. Create one more method showData() to print the data member values. Create another class ( main class) StudentDemo that creates Student class object and calls setData() and showData() methods.
---

```
class Student{
    private int rno;
    private String name;
    
    void setData(int r, String n){
        rno=r;
        name=n;
    }

    void showData(){
        System.out.println(rno+" "+name);
    }
}

class StudentDemo{
    public static void main(String[] args) {
        Student s = new Student();
        s.setData(35,"Dipesh");
        s.showData();
    }
}
```
### 32.	Modify the above program (no. 30) to count the no of Student objects created. [ In this program static variable is required ]
---

```
class Student1{
    private int rno;
    private String name;
    private static int total;
    void setData(int r, String n, int t){
        rno=r;
        name=n;
        total=t;
    }

    void showData(){
        System.out.println(rno+" "+name+" "+total);
    }
}

class StudentDemo1{
    public static void main(String[] args) {
        Student1 s1 = new Student1();
        s1.setData(35,"Dipesh",1);
        s1.showData();
        Student1 s2 = new Student1();
        s2.setData(75,"Pratham",2);
        s2.showData();
        s1.showData();
        Student1 s3 = new Student1();
        s3.setData(3,"Akshay",3);
        s3.showData();
        s2.showData();
        s1.showData();
    }
}
```

---

*Thank_you*