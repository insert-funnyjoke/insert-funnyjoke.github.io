const adjectives = ["Cool", "Mama", "Smart"];
const nicknames = ["Sid", "Siddy", "Siddodarthrama", "Siddharth", "My Man", "Big G", "Dude", "Joe ", "Supercalifragilisticexpialidocious", "Siddorama", "Siddo", "Big Man on Campus"];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const daysOfTheWeek= ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'];

function gottaCatchMostOfEm(except) {
  const allElements = document.getElementsByTagName("*");
  for (let i = allElements.length - 1; i >= 0; i--) {
    const currentElement = allElements[i];
    if (currentElement.className === "circle" && currentElement !== except) {
      currentElement.parentNode.removeChild(currentElement);
    }
  }
}

function growCircle(circle, colour, link) {
  circle.setAttribute('src', 'Images/transparent.png');
  circle.style.backgroundColor = colour;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  let size = Math.min(windowWidth, windowHeight);
  size *= 4;
  circle.style.transition = "width 1s, height 1s, border-radius 1s";
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.borderRadius = `${size / 2}px`;
  gottaCatchMostOfEm(circle);
  const i_t = 9;
  setTimeout(() => console.log("hi"), i_t);
  setTimeout(() => { window.location.href = link; }, i_t);
}

const nickname = nicknames[Math.floor(Math.random() * nicknames.length)];
const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

if (nickname === "Joe ") {
  document.getElementById('welcome-back-header').innerText = `Welcome Back, Joe ${adjective}!`;
} else {
  document.getElementById('welcome-back-header').innerText = `Welcome Back, ${nickname}!`;
}

setInterval(() => {
  const localDate = new Date();

  function twoDigits(num) {
    if (num < 10) {
      return `0${num}`;
    }
    return num;
  }

  document.getElementById('date').innerText = `It's ${daysOfTheWeek[localDate.getDay()]}day, ${twoDigits(localDate.getDate())} ${months[localDate.getMonth()]} ${localDate.getFullYear()}!`;
  document.getElementById('time').innerText = `The time is ${localDate.getHours()}:${twoDigits(localDate.getMinutes())}:${twoDigits(localDate.getSeconds())}:${localDate.getMilliseconds()}.`;
}, 1);
