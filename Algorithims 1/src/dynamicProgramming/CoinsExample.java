package dynamicProgramming;

public class CoinsExample {

	public static void main(String[] args) {
		int [] coinValues = {1,3,5};
		int s = 11;
		Integer[] min = new Integer[s + 1];
		int[][] solutions = new int[12][3];
		for(int i = 0;  i < min.length; ++i){
			min[i] = Integer.MAX_VALUE;
		}
		min[0] = 0;
		for(int i = 1; i < min.length; ++i){
			for(int j = 0; j < coinValues.length; ++j){
				if(coinValues[j] <= i && ((min[i - coinValues[j]] + 1) < min[i])){
					min[i] = min[i - coinValues[j]] + 1;
					solutions[i][0] = 0;
					solutions[i][1] = 0;
					solutions[i][2] = 0;
					
					solutions[i][j] = solutions[i][j] + 1;
					solutions[i][0] =  solutions[i][0] + solutions[i -1][0];
					solutions[i][1] =  solutions[i][1] + solutions[i -1][1];
					solutions[i][2] =  solutions[i][2] + solutions[i -1][2];
				}
			}
		}
		System.out.println("the answer is: " + min[11]);
		System.out.println("The coins needed are:");
		System.out.println("One value coins: " + solutions[11][0]);
		System.out.println("Three value coins: " + solutions[11][1] );
		System.out.println("Five value coins: " + solutions[11][2] );



	}

}
