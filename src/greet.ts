// 次の関数 greet に型注釈をつけてください。
// function greet(name) {
//     return "Hello, " + name + "!";
// }

export function greet(name: string): string {
    return `Hello, ${name}!`;
}

// 次の関数に型注釈を付けて、age はオプションで、指定されなければ 18 を使うようにしてください。
// function introduce(name, age) {
//     return name + " is " + age + " years old.";
// }

export function introduce(name: string, age: number = 18): string {
    return `${name} is ${age} years old.`;
}

// 配列の数値を合計する関数 sumArray を作ってください。
// - 関数型を使って宣言すること
// - 引数は number の配列
// - 戻り値は number
// 完成形をTypeScriptで書いてください。
export const sumArray = (nums: number[]): number =>
    // 0 は初期値
    nums.reduce((prev: number, current: number) => prev + current, 0);

// ユーザー情報を受け取って文字列を返す関数 `formatUser` を作ってください。
// - 関数型式で宣言
// - 引数は `{ name: string; age: number }` 型のオブジェクト
// - 戻り値は `"Name: {name}, Age: {age}"` という文字列
type User = { name: string; age: number };
export const formatUser = (user: User): string =>
    `Name: ${user.name}, Age: ${user.age}`;

// `value` が文字列か数値かを受け取り、それぞれで処理を変える関数 `processValue` を作ってください。
// - 関数型式で宣言
// - 引数は `string | number`
// - 戻り値は `string`
//   - `string` の場合 → `"文字列: {value}"`
//   - `number` の場合 → `"数値: {value}"`
export const processValue = (value: string | number): string => {
    const type = typeof value === "string" ? "文字列" : "数値";
    return `${type}: ${value}`;
};

// 配列の最初の要素を返す関数 `firstElement` を作ってください。
// - 関数型式で宣言
// - 配列の要素はジェネリクス `T[]`
// - 戻り値は `T | undefined`（配列が空の場合を考慮）
export const firstElement = <T>(array: T[]): T | undefined => {
    if (array.length === 0) return;
    return array[0];
};

// 曜日を表す `enum` を作り、その値を受け取って `"今日は{曜日}"` と返す関数 `getDayMessage` を作ってください。
// - 関数型式で宣言
// - `enum Weekday { Sunday, Monday, … }` のように定義
// - 戻り値は `string`
export enum Weekday {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}
export const getDayMessage = (weekday: Weekday): string =>
    `今日は${Weekday[weekday]}`;

// 次のような「座標」を表すオブジェクトの配列から、x の平均値を返す関数を作ってください。
// - 型エイリアス Point を使う
// - 関数型式で宣言
// - 配列が空の場合は 0 を返す
// ```type Point = { x: number; y: number };```
type Point = { x: number; y: number };
export const averageX = (points: Point[]): number => {
    if (points.length === 0) return 0;
    return points.reduce((sum, p) => sum + p.x, 0) / points.length;
};

// 次の関数 doubleNumbers を作ってください。
// - 引数は読み取り専用の数値配列 Readonly<number[]>
// - 配列の各要素を2倍して新しい配列を返す
// - 関数型式で宣言
export const doubleNumbers = (nums: readonly number[]): number[] =>
    nums.map((num) => num * 2);

// 次の「本」の情報を扱う関数を作ってください。
// - 型エイリアス Book を作る
//     - title: string 必須
//     - author?: string 任意
// - 関数 formatBook を作る
//     - 引数は Book
//     - 戻り値は "Title: {title}, Author: {author}"
//     - author がない場合は "Unknown" と表示
// - 関数型式で宣言
type Book = {
    title: string;
    author?: string;
};
export const formatBook = (book: Book): string => {
    return `Title: ${book.title}, Author: ${book.author ?? "Unknown"}`;
};

// オブジェクトの配列から、指定したキーの値を配列として抜き出す関数 pluck を作ってください。
// - 関数型式で宣言
// - ジェネリクスを使い、T はオブジェクト型で、キーは keyof T 型を使うこと
// - 引数:
//     - items: T[]
//     - key: keyof T
// - 戻り値: T[K][]
export const pluck = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map((item) => item[key]);
};

// 次の仕様で isString 関数を作ってください：
// - 関数型式で宣言
// - 引数は unknown 型
// - 戻り値は 型述語 (arg is string) を使って、引数が文字列かどうかを判定
// - 返す値は boolean
export const isString = (arg: unknown): arg is string => {
    return typeof arg === "string";
};

// ユニオン型 string | number の配列から 文字列だけを抽出する関数 filterStrings を作ってください。
// - 関数型式で宣言
// - 型述語を使って、返り値の型が正しく string[] になるようにしてください。
export const filterStrings = (args: (string | number)[]): string[] => {
    return args.filter((arg): arg is string => isString(arg));
};

// ユニオン型 Dog | Cat の配列があります。
// 型定義：
// ```typscript
// type Dog = { kind: "dog"; name: string; bark: () => void };
// type Cat = { kind: "cat"; name: string; meow: () => void };
// ```
//
// 関数 filterDogs を作ってください。
// - 引数: (Dog | Cat)[]
// - 戻り値: Dog[]
// - 関数型式で宣言
// - 型述語を使って、kind: "dog" の要素だけをフィルタしてください。
export type Dog = { kind: "dog"; name: string; bark: () => void };
export type Cat = { kind: "cat"; name: string; meow: () => void };
export const filterDogs = (pets: (Dog | Cat)[]): Dog[] => {
    return pets.filter((pet): pet is Dog => pet.kind === "dog");
};

// ジェネリクスを使い、オブジェクト配列から指定したキーの値だけを返す関数 pluckValues を作ってください。
// - 関数型式で宣言
// - 引数:
//    - items: T[] （オブジェクトの配列）
//    - key: K （T のプロパティキー）
// - 戻り値: T[K][]
// - 型安全に、key が T のプロパティ以外を受け取らないようにしてください
export const pluckValues = <T, K extends keyof T>(
    items: T[],
    key: K,
): T[K][] => {
    return items.map((item) => item[key]);
};

// ユーザーオブジェクトの配列があります：
// ```typescript
// type User = { id: number; name?: string };
// ```
//
// 関数 getUserNames を作ってください
// - 引数: users: User[]
// - 戻り値: string[]
// - name が存在しない場合は "Unknown" に置き換える
// - Optional チェーン (?.) と Nullish coalescing (??) を使う
type User2 = { id: number; name?: string };
export const getUserNames = (users: User2[]): string[] => {
    return users.map((user) => user?.name ?? "Unknown");
};

// 型 Product を定義します：
// ```typescript
// type Product = {
//     id: number;
//     name: string;
//     price: number;
// };
// ```
//
// 関数 updateProduct を作ってください
// - 引数:
//     - product: Product
//     - updates: Partial<Product>（一部だけ更新可能）
// - 戻り値: Product（更新後の完全なオブジェクト）
// - 関数型式で宣言してください
type Product = {
    id: number;
    name: string;
    price: number;
};
export const updateProduct = (
    product: Product,
    updates: Partial<Product>,
): Product => {
    return { ...product, ...updates };
};

// 次の型 Employee があります：
// ```typescript
// type Employee = {
//     id: number;
//     name: string;
//     department: string;
//     salary: number;
// };
// ```
//
// 以下を満たす関数を作ってください：
// 1. getPublicProfile
//     - 引数: Employee
//     - 戻り値: Pick<Employee, "id" | "name" | "department">
//     - 給与情報を除いた公開プロフィールを返す
// 2. removeSensitiveInfo
//     - 引数: Employee[]
//     - 戻り値: Omit<Employee, "salary">[]
//     - 複数の従業員データから給与情報を取り除く
type Employee = {
    id: number;
    name: string;
    department: string;
    salary: number;
};
export const getPublicProfile = (
    employee: Employee,
): Pick<Employee, "id" | "name" | "department"> => {
    // biome-ignore lint/correctness/noUnusedVariables: salaryは使用しない
    const { salary, ...publicInfo } = employee;
    return publicInfo;
};

export const removeSensitiveInfo = (
    employees: Employee[],
): Omit<Employee, "salary">[] => {
    return employees.map(({ salary, ...publicInfo }) => publicInfo);
};
