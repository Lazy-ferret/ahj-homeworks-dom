const goblinImg = document.createElement('img');
goblinImg.src = './img/goblin.png';
goblinImg.classList.add('goblin-img');

const holes = document.querySelectorAll('.hole');

const position = function getRandom() {
  return Math.floor(Math.random() * holes.length);
};

function changePosition() {
  if (document.images) {
    const currentImgParent = document.images[0].parentElement;
    currentImgParent.removeChild(document.images[0]);
  }
  holes[position()].insertBefore(goblinImg, holes[position()].firstChild);
}

setInterval(changePosition, 1000);

// for demonstration purpose only;
export default function demo(value) {
  return value;
}
