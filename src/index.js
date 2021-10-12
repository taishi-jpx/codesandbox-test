/**
 * const, let 等の変数宣言
 *
 */

// var val1 = "var変数";
// console.log(val1);
// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);
// // 再宣言も可能
// var val1 = "varを再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);
// letは再宣言不可能
// let val2 = "再宣言";

// constは上書きと再宣言不可能
// const val3 = "const変数";
// val3 = "変更"

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけえ",
//   age: 28
// };
// val4.name = "jak";
// val4.addres = "hiroshima";
// console.log(val4);

// 配列も中身変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monky");
// console.log(val5);

/*
 *テンプレート文字列
 *
 */

// const name = "ねこ";
// const age = 28;
// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age;
// console.log(message1);
// // テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

/*
 *Arrow関数
 */

//  従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数（引数のカッコを削除可能、１行で処理が終わるときはreturnを省略出来る
// const func2 = (str) => str;
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "ねこ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}で、年齢は${myProfile.age}です。`;
// console.log(message1);

// オブジェクトで先にプロパティを抜き出し可能（分割代入）
// const { name, age } = myProfile;
// const message2 = `名前は${name}で、年齢は${age}でい。`;
// console.log(message2);

// 配列も分割代入可能
// const myProfile = ["なこ", 28];
// const message3 = `名前は${myProfile[0]}で、年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}でして、年齢は${age}なのです`;
// console.log(message4);

/**
 * デフォルト値
 */

// const sayHello = (name = "初期値") => console.log(`こんにちは！${name}さん！`);
// sayHello();
// sayHello("neko");

/**
 * スプレッド構文 ...
 */

// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);

// // 配列のコピーと結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// =で記載するともとの配列も変わってしまうので駄目
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列処理
 */

const nameArr = ["田中", "山田", "ねこ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}:${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// mapは第２引数に順番を取ることも出来る
// nameArr.map((name, index) => console.log(`${index + 1}:${name}`));

// filterは条件式を書いて一致するものを（そのまま）返す
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// })

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "ねこ") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
// 構文：　ある条件　？　条件がTrueのとき：　条件がfalseのとき
// const val1 = 1 > 0 ? 'true' : 'false';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力して';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えてる' : '許容範囲';
// }
// console.log(checkSum(50,90));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */

// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2がTrueです");
// }

// if (flag1 && flag2) {
//   console.log("1も2もTrueです");
// }

// ||　は　左側がfalseなら右を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&（アンパサンド）　は左がtureなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
