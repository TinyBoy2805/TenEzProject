const text = "An apple a day keep doctor away!!";

let index = 0;


function showText()
{
    document.body.innerText = text.slice(0, index);
     index++;

     if(index>text.length-1)
        {
            index=0;
        }

}


    setInterval(showText, 150);

