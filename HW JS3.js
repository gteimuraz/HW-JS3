// 1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს(m, n) და დააბრუნებს რომელიც მეტია იმ რიცხვს,
//     თუ რიცხვები ტოლია დააბრუნებს 0 - ს

// let m = 3;
// let n = 2;
// let x

// function SmallOne(m, n) {
//     if (m > n) {
//         x = m;
//     }
//     else if (m < n) {
//         x = n
//     }
//     else x = 0
//     return x;
// }

// console.log(SmallOne(3, 2))

// 2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი

// function sum(a, b) {
//     console.log(a + b)
// }
// return sum(2, 2)

// 3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს(ფუნქციას არ აქვს პარამეტრი)

// function passport() {
//     console.log("თეიმურაზ გალუსტიანი")
// }
// passport()

// 4. დაწერეთ ფუნქცია ორი პარამეტრით: firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ
//     (ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)

// function Name(firstName, lastName) {
//     return firstName, lastName
// }

// console.log(Name())


// 5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს(n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე
//     (n - მდე) რიცხვების ნამრავლი(ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1 * 2 * 3 - ის მნიშვნელობა,
//         დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას.
//             Პ.ს.გამოიყენეთ თქვენთვის სასურველი ციკლი)

// function sum(n) {
//     for (i = 1; i > 1; i*=) {
//         n = n * i
//     }
//     console.log(sum(n))
// }

// sum(3);


// დავალებებისთვის გამოიყენეთ:ობიექტი student - რომელსაც აქვს შემდეგი properties: firstName, lastName, age, scores
//     (scores არის შემდეგი რიცხვების მასივი: 4, 7, 5, 3, 2)
// და მეთოდი fullName რომელიც აბრუნებს სტუდენტის სრულ სახელს(ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად არ უნდა დაწეროთ)

// let student = {
//     firstName: "Temo",
//     lastName: "Galustiani",
//     age: 36,
//     scores: [4, 7, 5, 3, 2],
//     FullName() {
//         console.log(this.firstName, this.lastName)
//     }
//     }

// 6. დაბეჭდეთ  სტუდენტის სრული სახელი(სახელი + გვარი - გამოიყენეთ student ობიექტის მეთოდი)

// student.FullName()

// 7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს(scores) და ფუნქცია დააბრუნებს  ქულების ჯამს


// 8. დაბეჭდეთ სტუდენტის სახელი და ასაკი
// console.log(student.firstName, student.age)

//status?