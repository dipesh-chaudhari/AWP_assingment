using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Que2
{
    class Program
    {
        static void Main(string[] args)
        {
            GeneralManger o = new GeneralManger("Dipu",  10, 50000, "ProdctionManager", "Navaj");
            Console.WriteLine(o.CalcNetSalary());


            Console.ReadLine();
        }
    }
    public abstract class Employee
    {
        private string name;
        private int empNo;
        public static int count;
        private short deptNo;
        protected decimal basic;

        public string Name
        {
            set
            {
                if (value != null)
                    name = value;
                else
                    Console.WriteLine("invalid name");
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
                return count;
            }
        }

        public short DeptNo
        {
            set
            {
                if (value != 0)
                    deptNo = value;
                else
                    Console.WriteLine("invalid dept no");

            }
            get
            {
                return deptNo;
            }
        }

        public abstract decimal Basic
        {
            set; get;
        }

        public abstract decimal CalcNetSalary();

        public Employee(string name, short deptNo, decimal basic)
        {
            this.Name = name;
            this.DeptNo = deptNo;
            this.Basic = basic;
            count++;
            this.empNo = count;
        }


    }





    public class Manager : Employee
    {
        string designation;


        public override decimal Basic
        {
            set
            {
                if (value > 10000)
                    basic = value;
                else
                    Console.WriteLine("invalid sal manager");

            }
            get
            {
                return basic;
            }
        }

        public string Designation
        {
            set
            {
                if (value != null)
                    designation = value;
                else
                    Console.WriteLine("invalid designation");
            }
            get
            {
                return designation;
            }
        }

        public override decimal CalcNetSalary()
        {
            decimal sal;
            sal = basic + 1000 + 2000;
            return sal;
        }

        public Manager(string name, short deptNo, decimal basic, string designation) : base(name, deptNo, basic)
        {
            this.Designation = designation;
        }
    }



    public class GeneralManger : Manager
    {
        public string perks;
        public string Perks
        {
            set; get;
        }

        public override decimal Basic
        {
            set
            {
                if (value > 20000)
                    basic = value;
                else
                    Console.WriteLine("invalid sal manager");

            }
            get
            {
                return basic;
            }
        }

        public override decimal CalcNetSalary()
        {
            decimal sal;
            sal = basic + 1000 + 2000;
            return sal;
        }

       public GeneralManger(string name, short deptNo, decimal basic, string designation, string perks ) : base(name, deptNo, basic,designation) 
        {
            this.perks = Perks;
        }

        
    }

    class Ceo : Employee
    {
        public override decimal Basic
        {
            set
            {
                if (value > 30000)
                    basic = value;
                else
                    Console.WriteLine("invalid sal CEO");

            }
            get
            {
                return basic;
            }
        }

        public override decimal CalcNetSalary()
        {

            decimal sal;
            sal = basic + 1000 + 2000;
            return sal;
        }

       public Ceo(string name, short deptNo, decimal basic) : base(name, deptNo, basic)
        {

        }
    }
}
