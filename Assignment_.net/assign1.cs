using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace que1
{
    class Program
    {
        static void Main(string[] args)
        {
            Employee o1 = new Employee("Amol", 12345, 10);
            Employee o2 = new Employee("Amol", 12345);
            Employee o3 = new Employee("Amol");
            Employee o4 = new Employee();

            Console.WriteLine(o1.EmpNo);
            Console.WriteLine(o2.EmpNo);
            Console.WriteLine(o3.EmpNo);

            Console.WriteLine(o3.EmpNo);
            Console.WriteLine(o2.EmpNo);
            Console.WriteLine(o1.EmpNo);

            Console.ReadLine();
        }
    }

    class Employee
    {
        private string name;
        private int empNo;
        public static int count; 
        private decimal basic;
        private short deptNo;
        public string Name
        {
            set
            {
                if (value == null)
                    Console.WriteLine("invalid input");
                else
                    name = value;
            }
            get
            {
                return name;
            }
        }
        
        public int EmpNo
        {
            get
            {
                return empNo;
            }
        }
        
        public decimal Basic
        {
            set
            {
                if (value > 5000 && value < 1000000)
                    basic = value;
                else
                    Console.WriteLine("betn 5000  to 1000000");
            }
            get
            {
                return basic;
            }
        }
        
        public short DeptNo
        {
            set
            {
                if (value != 0)
                    deptNo = value;
                else
                    Console.WriteLine("invalid input");
                
            }
            get
            {
                return deptNo;
            }
        }

        decimal GetNetSalary()
        {
            decimal netSal;
            netSal = basic + 4000 + 1000;
            return netSal;
        }

       public Employee()
        {
            Console.WriteLine("");
            count++;
            this.empNo = count;
        }
        public Employee(string name)
        {
            this.name = name;
            count++;
            this.empNo = count;
        }
        public Employee(string name , decimal basic)
        {
            this.name = name;
            this.basic = basic;
            count++;
            this.empNo = count;
        }
       public Employee(string name, decimal basic, short deptNo)
        {
            this.name = name;
            this.basic = basic;
            this.deptNo = deptNo;
            count++;
            this.empNo = count;
        }


    }
}
