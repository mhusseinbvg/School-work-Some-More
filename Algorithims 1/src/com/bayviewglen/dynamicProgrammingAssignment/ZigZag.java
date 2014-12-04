package com.bayviewglen.dynamicProgrammingAssignment;

import java.util.ArrayList;

public class ZigZag {

	public static void main(String[] args) {
		int[] zigZag = {};// enter the integers here
		ArrayList<Integer> solutions = new ArrayList<Integer>();// puts them into list because so much easier to use
		for(int w = 0; w < zigZag.length; ++ w)
			solutions.add(zigZag[w]);
		int difference = 0; 
		int i = 0;
		solutions = removeDuplicates(solutions); // removes all the duplicates of the numbers next to eachother
		while(i < solutions.size() - 2){
			if(zigZag.length < 2){
				System.out.print(zigZag.length);
				break;
			}
			difference = solutions.get(i + 1) - solutions.get(i);
			if(difference == 0){ 
				solutions.remove(i);
				i = 0;
				continue;
			}else if (difference > 0){ // if its positive
				if(solutions.get(i + 2) == solutions.get(i + 1)){
					solutions.remove(i + 2);
					i = 0;
					continue;
				}else if(solutions.get(i + 2) - solutions.get(i + 1) > 0 ){ // if they both be positive remove the bigger one
					int max = Math.max(solutions.get(i + 2), solutions.get(i + 1));
					if(solutions.get(i + 2) == max)
						solutions.remove(i);
					else
						solutions.remove(i);
					continue;
				}else{
					i++;
					continue;
				}
			}else{
				if(solutions.get(i + 2) - solutions.get(i + 1) < 0 ){ // if they both negative then remove the smaller one
					int min = Math.min(solutions.get(i + 2), solutions.get(i + 1));
					if(solutions.get(i + 2) == min)
						solutions.remove(i);
					else
						solutions.remove(i);
					continue;
				}else{
					i++;
					continue;
				}
			}
		}

		System.out.println(solutions.size());// prints out the size of the array
	}
	
	/**
	 * @param ArrayList<Integer>
	 * @return ArrayList<Integer> with all repeating numbers next to themselves removed
	 */
	private static ArrayList<Integer> removeDuplicates(ArrayList<Integer> solutions) {
		ArrayList<Integer> changed = solutions;
		for(int i = 0; i < changed.size() - 1; ++i){
			if(changed.get(i) == changed.get(i + 1)){
				changed.remove(i);
				i = 0;
			}
				
		}
		return changed;
	}
}
