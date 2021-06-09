import $ from "jquery";

$("button")
  .html("Click me") // Try edit it...
  .on("click", () => console.log("Hi friend!"));

console.log("App started");

const ay = [];
ay.push(2);
ay.push(3);
// ay.push({ app: 1 });
ay.app = 1;
ay.push(() => {});

console.warn("for let");
for (let i = 0; i < ay.length; i++) {
  console.log(ay[i]);
}

console.warn("forEach");
ay.forEach((pp) => {
  console.log(pp);
});

console.warn("for in");
for (const i in ay) {
  console.log(i);
  console.log(ay[i]);
}

console.warn("for of");
for (const element of ay) {
  console.log(element);
}

console.warn("object");
console.log(ay);
console.log(ay.app);
console.log(ay.push);
console.log(ay.slice);
