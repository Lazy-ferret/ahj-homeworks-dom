(()=>{"use strict";var e=document.createElement("img");e.src="./img/goblin.png",e.classList.add("goblin-img");var t=document.querySelectorAll(".hole"),n=function(){return Math.floor(Math.random()*t.length)};setInterval((function(){document.images&&document.images[0].parentElement.removeChild(document.images[0]),t[n()].insertBefore(e,t[n()].firstChild)}),1e3)})();