// Your code goes here

//mouse events

const busImg =
    document.querySelector(".intro img")
console.log(busImg)

busImg.addEventListener("mouseenter", () => {
    busImg.style.transform = "scale(1.5)";
    busImg.style.transition = "transform 1s"
})

busImg.addEventListener("mouseleave", () => {
    busImg.style.transform = "scale(1)"
})

document.querySelectorAll("p").forEach((el) => {
    el.addEventListener("mouseover", () => {
        el.style.color = "hotpink";


    })

})

document.querySelectorAll("p").forEach((el) => {
    el.addEventListener("mouseout", () => {
        el.style.color = "black";
    })
})



//click events

document.querySelectorAll("h2").forEach((el) => {
    el.addEventListener("click", () => {
        el.style.color = "lightblue";

    })

})

document.querySelectorAll("h2").forEach((el) => {
    el.addEventListener("dblclick", () => {
        el.style.color = "black";
    })
})


//resize

const bacon = document.querySelector(".intro img")

window.addEventListener('resize', () => {
    bacon.src = "https://images.unsplash.com/photo-1528607929212-2636ec44253e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
})

//scroll

window.addEventListener('scroll', () => {
    console.log('scrolling scrolling scrolling');
})

//keys

window.addEventListener('keydown', () =>{
    console.log('some person pressed the key');
} )

window.addEventListener('keyup', () =>{
    console.log('some person released the key');
})
