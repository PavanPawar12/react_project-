console.log("This is Promises");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random  was not Supporting you ");
  } else {
    setTimeout(() => {
      console.log("Yes I am dome");
      resolve("Pavan");
    }, 3000);
  }
});

prom1.then((a) => {
  console.log(a);
}).catch((err)=>{
    console.log(err);
    
})
