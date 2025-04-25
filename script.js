console.log("Harry is a hacker");
console.log("Pavan is hacker");

setTimeout(() => {
  // this is the asyncroomous fucnction
  console.log("I am inside settimeout");
}, 2000);
setTimeout(() => {
  console.log("I am inside settimeout two ");
}, 0);

console.log("The end");

const callback = (arg) => {
  console.log(arg);
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Harry");
  document.head.append(sc);
};
loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
