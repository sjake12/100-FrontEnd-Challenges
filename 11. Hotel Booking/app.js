class Counter {
  constructor(num) {
    this.num = Number(num);
  }

  increment() {
    this.num++;
  }

  getCount() {
    return this.num;
  }
}

const count = new Counter(5);

let i = 0;

while (i < 3) {
  count.increment();
  console.log(count.getCount());
  i++;
}
