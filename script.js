let rect = document.getElementById("rectangle");
let buton = document.getElementById("button");

let getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

let event1 = () => {
    console.log("click");
    rect.style.backgroundColor = getRandomColor();
};
let event2 = () => {
    console.log("mouseup");
    rect.classList.add("transition2");
};
let event3 = () => {
    console.log("mouseover");
    rect.classList.add("transition3");
};
let event4 = () => {
    console.log("mouseout");
    rect.classList.add("transition4");
};
let event5 = () => {
    console.log("mousemove");
    rect.classList.add("transition5");
};
let event6 = () => {
    console.log("mouseleave");
    rect.classList.add("transition6");
};

buton.addEventListener("click", event1);
buton.addEventListener("mouseup", event2);
rect.addEventListener("mouseover", event3);
rect.addEventListener("mouseout", event4);
rect.addEventListener("mousemove", event5);
rect.addEventListener("mouseleave", event6);
