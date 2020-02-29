# collatio
make Performance Benchmarks for Javascript

#### Installation

```bash
npm install collatio
```

#### Usage

```javascript
const {Benchmark} = require('collatio');

const b = new Benchmark('Test Loops');

b.setup(() => {
    const DATA = [];
    for (let i = 0; i < 1000000; i++) {
        DATA.push(i);
    }
    return DATA;
});

b.run('Array.filter', d => {
    d.filter(e => e > 3);
});

b.run('ts-tooling FindAll', d => {
    d.FindAll(e => e > 3);
});

b.run('for i loop', d => {
    const tmp = [];
    for (let i = 0; i < d.length; i++) {
        if (d[i] > 3) {
            tmp.push(d[i]);
        }
    }
});

// print the Data into the console
b.print(3);

// access the generated statistical data of the benchmark
console.info(b.stats);
```
