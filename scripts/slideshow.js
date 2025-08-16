


const container_name = "slide_show";
const content  = [
"Comprehensive Patient Care",
"Advanced Medical Technology",
"Trusted Health Professionals",
"Preventive Care & Screenings",
"Managing Chronic Conditions",
"Personalized Treatment Plans"];

const container = document.getElementById(container_name);
let index = 0;
let slides = []
let direction = -1;

for(let i = 0; i < 5 ;i++){
    slides[i] = document.createElement("div")
    slides[i].classList.add("slide")

    
    let text = document.createElement("h2");
    text.innerHTML = content[i]

    let cover = document.createElement("div");
    cover.appendChild(text);
    slides[i].appendChild(cover);

    slides[i].style.backgroundImage = `url(./images/slide${i+1}.jpg)`

    container.appendChild(slides[i])

    
}


const slideshow = setInterval(()=>{
    container.style.transform = `translateX(${-400*index}px)`;
    if(index == 4 | index == 0){
        direction = -1*direction
    }
    index = (index + direction)%5;


},3000)
