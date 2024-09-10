const input = document.getElementById("check");

input.addEventListener('change', (e)=>
{
    document.body.classList.toggle("dark", e.target.checked);
})