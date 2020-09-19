# Assingment_2

---

### 16.	Write a program to print table of any entered number using loop.
---

```
import java.util.Scanner;
class Ass16{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the Number= ");
        int n = sc.nextInt();

        for(int i=1; i<=10; i++){
            System.out.println(i*n); 
        }
    }
}
```
### 17.	Write a program to reverse a given number.
---

```
import java.util.Scanner;
class Ass17{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the Number= ");
        int n = sc.nextInt();
        int dig;
        int rev=0;
        while(n!=0){
            dig = n%10;
            rev = rev *10+dig;
            n=n/10;
        }
        System.out.print(rev);
        
    }
}
```

### 18.	Program to check whether number is prime or not.
---

```
import java.util.Scanner;
class Ass18{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the Number= ");
        int n = sc.nextInt();
        int flag=0;
        for(int i=0; i<n/2; i++){
            if(n%2==0){
                System.out.println("Not Prime");
                flag=1;
                break;
            }
        }
        if(flag==0){
            System.out.println("Prime");
        }

        
    }
}
```

### 19.	Calculate  series : 12+22+32+42+.........+n2
---

```
import java.util.Scanner;
class Ass19{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the Number= ");
        int n = sc.nextInt();
        int sum=0;
        for(int i=1; i<=n; i++){
            sum=sum+(i*i);
        }
       
        System.out.println("ans : "+sum);
    }
}

```

### 20.	Print all prime numbers between two given numbers. [ break continue ]
---

```
import java.util.Scanner;
class Ass20{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the 1st Number= ");
        int n1 = sc.nextInt();
        System.out.print("Enter the 2nd Number= ");
        int n2 = sc.nextInt();
        
        for(int i=n1; i<=n2; i++){
            int flag=0;
            for(int j=2; j<i-1; j++){
                if(i%j==0){
                    
                    flag=1;
                    break;
                }
            }
            if(flag==0){
                System.out.println(i);
            }
        }    
    }
}
```

### 21.	Program to show sum and average of 10 element array. Accept array elements from user. 
---

```
import java.util.Scanner;
class Ass21{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int arr[] = new int[10];
        int sum=0;

        for(int i=0; i<arr.length; i++){
            System.out.print("Enter the Number= ");
            arr[i]=sc.nextInt();
        }
          for(int i=0; i<arr.length; i++){
            sum=sum+arr[i];
        }
        System.out.println("Avg of given 10 numbers is "+(sum/10));
            
    }
}
```

### 22.	Sort a ten element array in descending order.
---

```
import java.util.Scanner;
class Ass22{
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        int a[] = new int[10];
        int temp;
        
        for (int i = 0; i < a.length; i++) 
        {
            System.out.print("Enter the elements:");
            a[i] = sc.nextInt();
        }
        for (int i = 0; i < a.length; i++) 
        {
            for (int j = i + 1; j < a.length; j++) 
            {
                if (a[i] < a[j]) 
                {
                    temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
        }
        System.out.println("Descending Order:");
        for (int i = 0; i < a.length - 1; i++) 
        {
            System.out.println(a[i]);
        }
        System.out.print(a[a.length - 1]);
    }
}
```

### 23.	Write a program to reverse the array elements.
---

```
import java.util.Scanner;
class Ass23{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int arr[] = new int[10];
        int temp=0;

        for(int i=0; i<arr.length; i++){
            System.out.print("Enter the Number= ");
            arr[i]=sc.nextInt();
        }
          for (int i = 0; i < arr.length; i++) 
        {
            for (int j = i + 1; j < arr.length; j++) 
            {
                if (arr[i] < arr[j]) 
                {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }

        for(int i=0; i<arr.length; i++){
            System.out.print(arr[i]+", ");
        }
        
            
    }
}
```

### 24.	Write a program to search an element in the array.
---

```
import java.util.Scanner;
class Ass24{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter find element = ");
        int n = sc.nextInt();
        int arr[] ={2,3,4,6,5};
        int flage=0;
        for(int i=0; i<arr.length; i++){
            if(arr[i] == n){
                System.out.print("Element is found..");
                flage=1;
                break;
                
            }
        }
        if(flage==0){
            System.out.print("Element is NOT found..");
        }
            
    }
}
```
### 25.	Write the program to find the sum of even elements and sum of odd elements present in the array of integer type.
---

```
class Ass25{
    public static void main(String[] args) {
        
        
        int arr[] ={2,3,4,6,5,6,7,8,9};
        int even=0;
        int odd=0;
        for(int i=0; i<arr.length; i++){
            if(arr[i]%2==0){
                even=even+arr[i];
            }else{
                odd=odd+arr[i];
            }
        }
        System.out.println("Sum of even no. : "+even);
        System.out.println("Sum of even no. : "+odd);    
    }
}
```



