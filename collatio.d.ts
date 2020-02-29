/**
 * define a Benchmark Setup that can execute multiple times
 */
export class Benchmark<T> {
    /**
     * the generated statistical data for each test
     */
    public stats: {name: string, duration: number, runtime: number, ops: number}[];

    /**
     * create a new Benchmark
     *
     * @param name the Name of the Benchmark
     */
    constructor(name: string);

    /**
     * setup some data to use in the Benchmark Functions
     *
     * @param cb the Function that setup the Data
     * @param runtime the time in milliseconds to run a function to measure
     */
    setup(cb: () => T, runtime?: number): void;

    /**
     * run a function to measure
     *
     * @param name a unique name for the measure
     * @param cb the operation to measure
     */
    run(name: string, cb: (d: T) => void): void;

    /**
     * print the Result into the Console
     *
     * @param accuracy the number of decimal places in the numbers
     */
    print(accuracy?: number): void;
}
