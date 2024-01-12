let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let h2 = document.querySelector("h2");
    let randomColorGen = randomColor();
    h2.innerText = randomColorGen;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColorGen


    console.log("updated Color");
})


function randomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`
    return color;
}
