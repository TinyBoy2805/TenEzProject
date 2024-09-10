const btn = document.getElementById("btn");
const show = document.getElementById("show");

btn.addEventListener("click", ()=>
{
    show.innerText = changeBackground();
    document.body.style.background = changeBackground();
});



function changeBackground()
{
    return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
}