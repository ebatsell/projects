#include <iostream>

using namespace std;

void world(int count) {
	for (int i = 0; i < count; i++) {
		cout << "Goodbye World" << endl;
	}
}

int main() {
	world(200);
	return 0;
}