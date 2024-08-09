class CustomArray {
  constructor() {
    this.arr = [];
  }

  read(index) {
    if (index < 0 || index >= this.arr.length) {
      throw new Error("Index out of bounds");
    } else if (typeof this.arr[index] === "undefined") {
      throw new Error("Element not found");
    } else {
      return this.arr[index];
    }
  }

  insertAtEnd(element) {
    const lengthOfArr = this.arr.length;
    this.arr[lengthOfArr] = element;
  }

  insertAtBeginning(element) {}
  print() {
    console.log(this.arr);
  }
}

const arrays = new CustomArray();
arrays.insertAtEnd(3);
arrays.print();
