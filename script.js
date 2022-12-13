const cars = document.querySelectorAll(".car");

const car1 = document.getElementById("swift");
car1.addEventListener("click", () =>{
    const c = document.getElementById("1");
    hide_car();
    c.classList.add("show");
})

const car2 = document.getElementById("baleno");
car2.addEventListener("click", () =>{
    const c = document.getElementById("2");
    hide_car();
    c.classList.add("show");
})

const car3 = document.getElementById("etios");
car3.addEventListener("click", () =>{
    const c = document.getElementById("3");
    hide_car();
    c.classList.add("show");
})

const car4 = document.getElementById("ertiga");
car4.addEventListener("click", () =>{
    const c = document.getElementById("4");
    hide_car();
    c.classList.add("show");
})

const car5 = document.getElementById("innova");
car5.addEventListener("click", () =>{
    const c = document.getElementById("5");
    hide_car();
    c.classList.add("show");
})

const car6 = document.getElementById("cruiser");
car6.addEventListener("click", () =>{
    const c = document.getElementById("6");
    hide_car();
    c.classList.add("show");
})

const car7 = document.getElementById("traveller");
car7.addEventListener("click", () =>{
    const c = document.getElementById("7");
    hide_car();
    c.classList.add("show");
})
const car8 = document.getElementById("bus");
car8.addEventListener("click", () =>{
    const c = document.getElementById("8");
    hide_car();
    c.classList.add("show");
})

function hide_car(){
    cars.forEach(car =>{
        car.classList.remove("show");
    })
}