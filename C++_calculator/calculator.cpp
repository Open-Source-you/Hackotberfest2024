#include <iostream>
#include <string>

using namespace std;

int main(){
	char input = 'a';
	float num1;
	float num2;
	cout << "What is the operation(+, -, / or *):\n";
	cin >> input;
	cout << "You chose " << input << "\n";
	cout << "Enter number 1: \n";
	cin >> num1;
	cout << "Enter number 2: \n";
	cin >> num2;
	switch(input){
		case '+':
			cout << "Sum is: " << num1 + num2 << "\n";
			break;
		case '-':
			cout << "Difference is: " << num1 - num2 << "\n";
			break;
		case '*':
			cout << "Product is: " << num1 * num2 << "\n";
			break;
		case '/':
			cout << "Quotient is: " << num1 / num2 << "\n";
			break;
		default:
			cout << "Operation not found\n";
			break;
	}
}
