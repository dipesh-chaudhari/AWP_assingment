# Assingment_8

---

### 52.	Input name of a person and count how many vowels it contains.  Use String class functions. 
---

```
import java.util.Scanner;

public class Ass52 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		String s = sc.nextLine();
		char ar[] = s.toCharArray();
		int count = 0;
		;
		for (int i = 0; i < s.length(); i++) {

			if (ar[i] == 'a' || ar[i] == 'e' || ar[i] == 'i' || ar[i] == 'o' || ar[i] == 'u' || s.charAt(i) == 'A'
					|| s.charAt(i) == 'E' || s.charAt(i) == 'I' || s.charAt(i) == 'O' || s.charAt(i) == 'U') {
				count++;
			}

			// System.out.println(ar[i]);
		}
		System.out.println("the no of vowels are= " + count);

	}

}

```

### 53.	Input data exactly in the following format, and print sum of all integer values. “67, 89, 23, 67, 12, 55, 66”.   (Hint use String class split method and Integer class parseInt method) .
---

```
  
public class Ass53 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String s = "67,89,23,67,12,55,66";

		String s1[] = s.split(",");
		int sum = 0;
		for (String c : s1) {
			sum = sum + Integer.parseInt(c);
		}
		System.out.println("the sum is= " + sum);
	}

}

```

### 54.	Write a program to reverse the given String.
---

```
import java.util.Scanner;

public class Ass54 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Enter name to count character ");
		Scanner sc = new Scanner(System.in);
		String s = sc.nextLine();
		int count = 0;
		for (int i = 0; i < s.length(); i++) {
			if (s.charAt(i) == ' ') {
				continue;
			}
			count++;
		}
		System.out.println("The no of character are = " + count);

	}

}

```

### 55.	Write a program to count no of words in the String.
---

```
public class Ass55 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String s = "onkar patil";
		String a = "";
		for (int i = s.length() - 1; i >= 0; i--) {
			System.out.print(s.charAt(i));
		}
	}
}

```

### 56.	Write a program to convert very first character of every word in uppercase in a String.
---

```
public class Ass56 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String s = "welcome to cdac mumbai";

		int i = 0;
		String a[] = s.split(" ");
		String s2[] = new String[a.length];
		for (String b : a) {
			s2[i] = b.substring(0, 1).toUpperCase() + b.substring(1);
			i++;
		}
		String s1 = String.join(" ", s2);
		System.out.println(s1);

	}

}

```

### 57.	Write a program to reverse every word of the String.
---

```
import java.util.Scanner;

public class Q57 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Enter string");
		Scanner sc = new Scanner(System.in);
		String s = sc.nextLine();
		String s2 = "";
		String s1[] = s.split(" ");
		for (int i = 0; i < s1.length; i++) {

			String revworld = "";
			for (int j = s1[i].length() - 1; j >= 0; j--) {
				revworld += s1[i].charAt(j);
			}
			s2 = s2 + revworld + " ";
		}
		System.out.println("The reverse each world string = " + s2);

	}

}

```

### 58.	Store name of weekdays in an array (starting from “Sunday” at 0 index). Ask day position from user and print day name. Handle array index out of bound exception and give proper message if user enter day index outside range (0-6). 
---

```
import java.util.Scanner;

public class Ass58 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String s[] = { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" };
		System.out.println("Enter the day no which you want 0-6");
		Scanner sc = new Scanner(System.in);
		try {
			int n = sc.nextInt();
			for (int i = 0; i <= n; i++) {

				if (i == n) {
					System.out.println("The day is = " + s[i]);
				}
			}
		} catch (ArrayIndexOutOfBoundsException e) {
			System.out.println("Enter  valid day no");
		}

	}

}

```

---

*Thank_you*