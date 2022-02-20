// let animals = ["MOE",2,3,4,5,6,7,8,9];
// let main = document.querySelector('#main');

// animals.map((animal,index) => {
// <div className="box">{index}</div>
// }

//Closure function
function parent(){

    function yaze(x,y){
         return x + y;
     }

     return yaze
  
  }

  let ourChoice = parent()
  
  console.log(ourChoice(9,8))
  
  
  
//   let human = {
//    eyes:"",
//    hair: "",
//   };
  
//   const american = {...human};
//   american.eyes = "blue";
//   american.hair = "black";
//   const african = {...human};
//   african.eyes = "orange";
//   african.hair = "teal";
//   const asian = {...human};
//   asian.eyes = "red";
//   asian.hair = "purple";
//   asian.legs ='sexy';
  
//   const races = [american, african, asian];
  
//   for(let race of races){
//        for(let trait in race){
//            console.log(trait, race[trait])
//        }
//   }