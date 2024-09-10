const sounds = ['cow', 'wow', 'pedro', 'tada', 'ugotthat'];

sounds.forEach((sound) =>
    {
        const btn = document.createElement('button');
        btn.classList.add("btn");
        btn.innerText = sound;

        btn.addEventListener("click", ()=>
        {
            stopPlaying();
            document.getElementById(sound).play();
        })

        document.body.appendChild(btn);
    }
)

function stopPlaying()
{
    sounds.forEach((sound)=>
    {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}