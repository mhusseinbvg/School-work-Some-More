package recursion;

import java.util.Scanner;

public class Reversal {
	
	public static void reverseLines(Scanner input){
		if(input.hasNextLine()){
			String line = input.nextLine();
			reverseLines(input);
			System.out.println(line);
		}
	}
}
