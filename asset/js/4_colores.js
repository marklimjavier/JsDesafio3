// intente hacer una funcion anonima pero me choca porque al no tener un archivo que pertenezca al mismo id 
// la pagina choca con esta primera funcion y luego no me deja ver las otras funciones sin importar que esten 
// listas, no se si hice mal esta funcion anonima (el objetivo era hacerlo en un mismo script)

// const ele = document.getElementById("ele1")
// ele.addEventListener("click", function(c) {
//     c.target.style.backgroundColor = 'yellow';
// })

const c1 = document.getElementById ('color1')
const c2 = document.getElementById ('color2')
const c3 = document.getElementById ('color3')
const c4 = document.getElementById ('color4')
const key = document.querySelector ("#colorVariado");
const changeColor = (e) => (e.target.style.backgroundColor = 'black')
c1.addEventListener("click", changeColor)
c2.addEventListener("click", changeColor)
c3.addEventListener("click", changeColor)
c4.addEventListener("click", changeColor)

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        key.style.backgroundColor = 'pink'
        } 
    else if (event.key === 's') {
        key.style.backgroundColor = 'orange'
        } 
    else if (event.key === 'd') {
        key.style.backgroundColor = 'skyBlue'
    }
    else if (event.key === 'q') {
        createNewdiv('purple')
    }
    else if (event.key === 'w') {
        createNewdiv('gray')
    }
    else if (event.key === 'e') {
        createNewdiv('brown')
    }
})

function createNewdiv(color){
    const Cuadro = document.createElement('div');
    Cuadro.style.margin = '100px'
    Cuadro.style.width = '200px'
    Cuadro.style.height = '200px'
    Cuadro.style.backgroundColor = color
    document.body.appendChild(Cuadro)
    
}
