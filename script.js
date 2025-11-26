let body = document.querySelector("body");
let btn = document.querySelector("button");
let sound = [
  "sd/28.mp3",
  "sd/29.mp3",
  "sd/30.mp3",
  "sd/31.mp3",
  "sd/32.mp3",
  "sd/33.mp3",
  "sd/34.mp3",
  "sd/35.mp3",
  "sd/36.mp3",
  "sd/37.mp3",
  "sd/38.mp3",
  "sd/39.mp3",
  "sd/40.mp3",
  "sd/41.mp3",
  "sd/42.mp3",
  "sd/43.mp3",
  "sd/44.mp3",
];
// btn.addEventListener("click", function () {
//   let h1 = document.createElement("h6");
//   body.appendChild(h1);
//   h1.innerText = "hi";
//   console.log(h1);
// });

body.addEventListener("keypress", function (e) {
  let randomSound = sound[Math.floor(Math.random() * sound.length)];
  let audio = new Audio(randomSound);
  audio.play();
  let div = document.createElement("div");
  let randomPath = path[Math.floor(Math.random() * path.length)];
  var x = Math.random() * 100;
  var y = Math.random() * 100;
  var r = Math.random() * 360;
  var c1 = Math.floor(Math.random() * 255);
  var c2 = Math.floor(Math.random() * 255);
  var c3 = Math.floor(Math.random() * 255);

  div.style.height = "70px";
  div.style.width = "70px";
  div.style.position = "absolute";
  div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
  div.style.clipPath = randomPath;
  div.style.left = x + "%";
  div.style.top = y + "%";
  div.style.rotate = r + "deg";

  body.appendChild(div);
  btn.innerHTML = e.key;
  if (e.key === " ") {
    btn.innerHTML = "Space";
  }
});

let path = [
  "polygon(50% 0%, 0% 100%, 100% 100%)", // triangle
  "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // square
  "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", // diamond
  "circle(50% at 50% 50%)", // circle
  "ellipse(40% 60% at 50% 50%)",
  "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
  "polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)",
  "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)",
  "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)",
  "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
];
