// var counter=3;
// while(counter>0){
//     console.log(counter);
//     counter=counter-1;
// }
// console.log(counter);

// var result = "Hello".indexOf('l');
// console.log(result);

// var d=Math.random()
// console.log("d is : ",d*100);

// var e=Math.ceil(0.00001)
// console.log(e);

// var str = "Hello";
// console.log(str.match("jello"))
// var noise;
// console.log(noise);
// noise="wind"
// console.log(noise);

// function addTwoNums(a,b){
//     try{    
//     if(typeof(a)!='number'){
//         throw new ReferenceError("the first argument is not a number")
//     }
//     else if(typeof(b)!='number'){
//         throw new ReferenceError("the second argument is not a number")
//     }else{
//         console.log(a+b)
//     }
// }catch(err){
//     console.log(err)
// }}
// addTwoNums(5,"5")


// *****************Recursion function********************
// let counter=3;
// function example(){
//     console.log(counter);
//     counter=counter-1;
//     if(counter===0) {
//         console.log("not call example");
//         return} ;
//     example();
// }
// example()

// ***********************Inheritance****************************
// class Train {
//     constructor(color, lightsOn) {
//         this.color = color;
//         this.lightsOn = lightsOn;
//     }
// }
// var train =new Train('red',true)
// console.log(train);
// class Train {
//     constructor(color, lightsOn) {
//         this.color = color;
//         this.lightsOn = lightsOn;
//     }
//     toggleLights() {
//         this.lightsOn = !this.lightsOn;
//     }
//     lightsStatus() {
//         console.log('Lights on?', this.lightsOn);
//     }
//     getSelf() {
//         console.log(this);
//     }
//     getPrototype() {
//         var proto = Object.getPrototypeOf(this);
//         console.log("proto : ",proto);
//     }
// }

// class HighSpeedTrain extends Train {
//     constructor(passengers, highSpeedOn, color, lightsOn) {
//         super(color, lightsOn);
//         this.passengers = passengers;
//         this.highSpeedOn = highSpeedOn;
//     }
//     toggleHighSpeed() {
//         this.highSpeedOn = !this.highSpeedOn;
//         console.log('High speed status:', this.highSpeedOn);
//     }
//     toggleLights() {
//         super.toggleLights();
//         super.lightsStatus();
//         console.log('Lights are 100% operational.');
//     }
// }

// var myFirstTrain = new Train('red', false);
// console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
// var mySecondTrain = new Train('blue', false);
// var myThirdTrain = new Train('blue', false);


// var train4 = new Train('red', false);
// train4.toggleLights(); // undefined
// train4.lightsStatus(); // Lights on? true
// train4.getSelf(); // Train {color: 'red', lightsOn: true}
// train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

// var train5 = new Train('blue', false);
// var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
// console.log();

// train5.toggleLights(); // undefined
// train5.lightsStatus(); // Lights on? true
// highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.
// train5.getPrototype()

// ********************Template Literals********************

// console.log("Hello
//  World!") //throws error

console.log(`Hello 
World
!`)  //runs perfectly

// **************for of and fo in loop**************
// var vehical = {
//     engine: true,
//     speed: "slow"
// }
// var bike = Object.create(vehical);
// bike.steering = false;
// for (prop of Object.keys(bike)) {
//     console.log("of loop ", prop, ":", bike[prop]);
// }

// for (prop in bike) {
//     console.log("in loop", prop, ":", bike[prop]);
// }

// ****************ForEach ()********************
// const veggies = ['onion', 'garlic', 'potato'];
// veggies.forEach( function(veggie, index) {
//     console.log(`${index}. ${veggie}`);
// });

// ********************************Map*****************************
// let bestBoxers = new Map();
// bestBoxers.set(1, "The Champion");
// bestBoxers.set(2, "The Runner-up");
// bestBoxers.set(3, "The third place");
// bestBoxers.set("all", "nothing");

// console.log(bestBoxers);
// var specificValue=bestBoxers.get("all");
// console.log(specificValue);

// ********************************Set*****************************
// const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
// const uniqueFruits = new Set(repetitiveFruits);
// console.log(uniqueFruits);

// *****************************Spread Operator*************************
// var places=["Pune","Delhi","Mumbai","Uttrakhand","Mysore","Bangalore"]
// function showIterniary(place0,place1,place2,place3,place4){
//     console.log("place 1",place0);
//     console.log("place 2",place1);
//     console.log("place 3",place2);
//     console.log("place 4",place3);
//     console.log("place 5",place4);
// }

// showIterniary(...places)

// ***********************Rest Operator********************
/*eg1*/
// function addTaxToPrices(taxRates,...itemsBrought){
//     console.log(itemsBrought);
//     return itemsBrought.map(item=>taxRates*item)
// }
// let shopping=addTaxToPrices(1.1,46,89,35,79)
// console.log(shopping);

/*eg2*/
// const top7=["Pune","Delhi","Mumbai","Uttrakhand","Mysore","Bangalore","Gurgaon","Ooty"]
// const [first,second,third,...secondpreference]=top7
// console.log(first,second,third);
// console.log(secondpreference);

console.log(`\``);


// function myFunction(v, w, x, y, z) {
//     console.log(v);
//     console.log(w);
//     console.log(x);
//     console.log(y);
//     console.log(...[3]);
// }
// const args = [0, 1];
// myFunction(-1, ...args, 2, ...[3]);
// class Animal {

// }

// class Dog extends Animal {
//     constructor() {
//         this.noise = "bark";
//     }

//     makeNoise() {
//       return this.noise;
//     }
// }

// class Wolf extends Dog {
//     constructor() {
//         super();
//         this.noise = "growl";
//     }
// }

// var result = new Wolf();
// console.log(result.makeNoise());

// const [a,b]=[1,2,3,4]
// console.log(c);

a=10;
b=10;
c=6;
z=10;
if(a!=z){
if(a<=z){
    console.log("show a");
}
else{
    console.log("not show a ");
}}
else{

}

var x;
console.log("x is ",x);
x=8;