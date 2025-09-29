import {
    averageX,
    doubleNumbers,
    firstElement,
    formatBook,
    formatUser,
    getDayMessage,
    greet,
    introduce,
    pluck,
    processValue,
    sumArray,
    Weekday,
} from "./greet";

describe("greet", () => {
    test("名前を渡すと挨拶を返す", () => {
        expect(greet("Alice")).toBe("Hello, Alice!");
    });
});

describe("introduce", () => {
    test("名前と年齢を渡すと正しい文章を返す", () => {
        expect(introduce("Bob", 25)).toBe("Bob is 25 years old.");
    });

    test("年齢が省略されたら18を使う", () => {
        expect(introduce("Charlie")).toBe("Charlie is 18 years old.");
    });
});

describe("sumArray", () => {
    test("配列の合計を計算する", () => {
        expect(sumArray([1, 2, 3])).toBe(6);
    });

    test("空配列なら0を返す", () => {
        expect(sumArray([])).toBe(0);
    });
});

describe("formatUser", () => {
    test("ユーザー情報を文字列にする", () => {
        expect(formatUser({ name: "David", age: 30 })).toBe(
            "Name: David, Age: 30",
        );
    });
});

describe("processValue", () => {
    test("文字列なら文字列: を付ける", () => {
        expect(processValue("test")).toBe("文字列: test");
    });

    test("数値なら数値: を付ける", () => {
        expect(processValue(123)).toBe("数値: 123");
    });
});

describe("firstElement", () => {
    test("配列の最初の要素を返す", () => {
        expect(firstElement([10, 20, 30])).toBe(10);
    });

    test("空配列ならundefinedを返す", () => {
        expect(firstElement([])).toBeUndefined();
    });
});

describe("getDayMessage", () => {
    test("曜日のメッセージを返す", () => {
        expect(getDayMessage(Weekday.Sunday)).toBe("今日はSunday");
        expect(getDayMessage(Weekday.Friday)).toBe("今日はFriday");
    });
});

describe("averageX", () => {
    test("xの平均値を返す", () => {
        expect(
            averageX([
                { x: 10, y: 20 },
                { x: 20, y: 30 },
            ]),
        ).toBe(15);
    });

    test("空配列なら0を返す", () => {
        expect(averageX([])).toBe(0);
    });
});

describe("doubleNumbers", () => {
    test("配列の要素を2倍する", () => {
        expect(doubleNumbers([1, 2, 3])).toEqual([2, 4, 6]);
    });
});

describe("formatBook", () => {
    test("著者がある場合はタイトルと著者を返す", () => {
        expect(formatBook({ title: "Book1", author: "Author1" })).toBe(
            "Title: Book1, Author: Author1",
        );
    });

    test("著者がない場合はUnknownを返す", () => {
        expect(formatBook({ title: "Book2" })).toBe(
            "Title: Book2, Author: Unknown",
        );
    });
});

describe("pluck", () => {
    test("オブジェクトの配列から、指定したキーの値を配列として抜き出す", () => {
        expect(
            pluck(
                [
                    { a: 1, b: 2 },
                    { a: 3, b: 4 },
                ],
                "a",
            ),
        ).toStrictEqual([1, 3]);
    });
});
