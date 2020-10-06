# Assingment_7

---


### 50.	Explain the importance of toString() and equals() method of the Object class and override them on class Employee(empId,name,salary).  a. Create class for main method(say XYZ),and accept five employees information and store in an array. Also ensure if entered empId already exist or not (use equals method).  b. Display all employee info using toString method.
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


### 51.	Create a program that helps banks to maintain records. It should have following facilities. o Anybody can create current or saving account with following initial information: account number, name, balance, and branch. o display account detail for a particular accounts. o display total money deposited in bank. o allow deposit and  withdrawal in an account  . o for saving account opening balance and minimum balance must be 5000. o for current account opening balance and minimum balance must be 1000. o can not withdraw the amount from the account that makes balance less than the minimum balance. 
---

```
class AcInfo{
    private int acNo;
    private String name;
    private double balance;
    private String branch;
    private String acType;
    
    AcInfo(){
    	
    }
    
    
	AcInfo(int acNo, String name, double balance,  String branch, String acType) {
		super();
		
		
		if(acType=="saving") {
			if(balance>=5000) {
				this.balance=balance;
				this.acNo = acNo;
				this.name = name;
				
				this.branch = branch;
				this.acType = acType;
			}else {
				System.out.println("Balance must be 5000");
			}
		}
		if(acType=="current") {
			if(balance>=1000) {
				this.balance=balance;
				this.acNo = acNo;
				this.name = name;
				
				this.branch = branch;
				this.acType = acType;
			}else {
				System.out.println("Balance must be 1000");
			}
		}
	}
	
	void display() {
		System.out.println("Account No: "+acNo);
		System.out.println("Account Holder Name: "+name);
		System.out.println("Account Balance: "+balance);
		System.out.println("Bank Branch: "+branch);
		System.out.println("Account Type : "+acType);
	}
	
	void withdraw(double balance) {
		double bal=this.getBalance()-balance;
		if(this.getBalance()>=balance) {
			if(this.getAcType()=="saving") {
				if(bal>=5000) {
					
					
					this.setBalance(this.getBalance()-balance);
					System.out.println(this.getBalance());
				}else {
					System.out.println("Balance must be 5000");
				}
			}
			if(this.getAcType()=="current") {
				if(bal>=1000) {
					this.setBalance(this.getBalance()-balance);
					System.out.println(this.getBalance());
				}else {
					System.out.println("Balance must be 1000");
				}
			}
			
		}else {
			System.out.println("Withdraw Balance Below the "+this.balance);
		}
	}

	void diposite(double balance) {
		this.balance=this.balance+balance;
	}

	public int getAcNo() {
		return acNo;
	}
	public void setAcNo(int acNo) {
		this.acNo = acNo;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public String getAcType() {
		return acType;
	}
	public void setAcType(String acType) {
		this.acType = acType;
	}

	
    
}
class Ass51{
    public static void main(String[] args) {
    	 Scanner sc = new Scanner(System.in);
      AcInfo arr [] = {new AcInfo(12345,"Pratya",10000,"Chopda","saving"),
    		  			new AcInfo(14321,"Akshya",1200,"Nanded","current"),
    		  			new AcInfo(12377,"Onkya",1900,"Kolhapur","current"),
      					};
     
      int acNo,flag;
      outer:
      while (true) {
		
    	  System.out.println("========================= ");
      System.out.println("1 :Account Details ");
      System.out.println("2 :Deposite ");
      System.out.println("3 :Withdraw ");
      System.out.println("4 :Exit ");
      System.out.print("Enter your choice :");
      int n = sc.nextInt();
      switch (n) {
	case 1:
		System.out.println("Enter Acc No :");
		 acNo=sc.nextInt();
		 flag=0;
		for(AcInfo a : arr) {
			if(a.getAcNo()==acNo) {
				a.display();
				flag=1;
			}
		}
		if(flag==0) {
			System.out.println("Invalid Account No..!!");
		}
		
		break;
	case 2:
		System.out.println("Enter Acc No :");
		 acNo=sc.nextInt();
		 flag=0;
		for(AcInfo a : arr) {
			if(a.getAcNo()==acNo) {
				System.out.print("Enter your Ammount :");
				double balance = sc.nextDouble();
				a.diposite(balance);
				flag=1;
			}
		}
		if(flag==0) {
			System.out.println("Invalid Account No..!!");
		}
		
		break;
	case 3:
		System.out.println("Enter Acc No :");
		 acNo=sc.nextInt();
		 flag=0;
		for(AcInfo a : arr) {
			if(a.getAcNo()==acNo) {
				System.out.print("Enter your Ammount :");
				double balance = sc.nextDouble();
				a.withdraw(balance);
				flag=1;
			}
		}
		if(flag==0) {
			System.out.println("Invalid Account No..!!");
		}
		
		break;
	case 4:
		break outer;
	default:
		System.out.println("Enter valid choice....!");
	}
      }  
    }
}



```

---

*Thank_you*