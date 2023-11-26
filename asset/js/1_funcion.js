const ele = document.getElementById("ele1")
const pintar = (c) => (c.target.style.backgroundColor = 'yellow')
ele.addEventListener("click", pintar)