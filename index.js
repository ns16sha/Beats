window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound")
    const pads = document.querySelectorAll(".pads div")
    const visual = document.querySelector('.visual');
    const colors = [
        "#bb86fc",
        "#FF6E40",
        "#9FA8DA",
        "#FFF59D",
        "#F48FB1",
        "#81D4FA"
    ]

    // SOunds here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
                sounds[index].play();
createBubble(index);
        })
    })
    //bubble
    const createBubble= (index)=>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = 'jump 1s ease'
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })
    }
})
