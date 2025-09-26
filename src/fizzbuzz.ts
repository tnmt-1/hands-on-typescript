const range = (min: number, max: number): number[] => {
    // 配列の長さを最初から必要分だけにする
    // i + min を返すことで、生成される配列の値が直接 min から max の範囲になる
    return Array.from({ length: max - min + 1 }, (_, i) => i + min);
};

const fizzbuzz = (min: number, max: number): string[] =>
    range(min, max).map((num) =>
        num % 15 === 0
            ? "FizzBuzz"
            : num % 3 === 0
              ? "Fizz"
              : num % 5 === 0
                ? "Buzz"
                : num.toString(),
    );

fizzbuzz(1, 30).forEach((v) => {
    console.log(v);
});

export = {
    fizzbuzz,
};
