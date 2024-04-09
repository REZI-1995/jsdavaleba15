//1. დაწერეთ for ციკლი, 0 დან 20 - მდე console.log ში დაბეჭდეთ ინდექსი i
let A = "A"
for (let i =0; i< 20; i++){
    console.log(i);
    console.log(A);
}
//2. დაწერეთ while ციკლი 0 დან 30 - მდე console.log ში დაბეჭდეთ ინდექსი i
let B = "B"
let i = 30
while (i > 0) {
    console.log(i);
    i--;
    console.log(B);
}
//3. დაწერეთ do while ციკლი 0 დან 40 - მდე console.log ში დაბეჭდეთ ინდექსი i
//let text = "text";
//let boom = 0;
//do {
 // text = boom;
 // boom++;
//}
//while (boom < 40);
//console.log(boom);
//აქ ბრაუზერი მიჭედავს რატომღაც და ვერ გავიგე რატომ :დ

//4. მოცემული გვაქვს მასივი const numbers = [1,2,5,7,8,10,23,24,26]. 
//for ლუპის დახმარებით შეამოწმეთ მასივის ყველა ელემენტი და  კონსოლში გამოიტანეთ ამ მასივიდან მხოლოდ ლუწი რიცხვები.
const even = [];
const nambers = [1, 2, 5, 7, 8, 10, 23, 24, 26];
for (const num of nambers) {
    if (num % 2 === 0) {
        even.push(num);
    }
}
console.log(even);
//5. გამოიყენეთ const currentDay = new Date().getDay(); ცვლადი;   currentDay
 //ცვლადი გვაძლევს რეალურ კვირის დღეს რიცხვითი სახით 0 - არის კვირა, 1 - არის ორშაბათი და ასე შემდეგ.
 //( 0 - 6 ამდე რიცხვს აბრუნებს სადაც 6 არის შაბათი, ყოველდღე სხვადასხვა მნიშვნელობას დაგიბრუნებთ) , 
 //დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის შემთხვევაში console.log ში გამოვიტანთ სიტყვას - კვირა, 
// 1 ის შემთხვევაში - ორშაბათს და ასე შემდეგ 6 - შაბათი.
const day = 5;
 let dayName;

 switch (day) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid ';
 }
 console.log(dayName); 