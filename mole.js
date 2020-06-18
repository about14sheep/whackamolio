// Write your JS here.
window.addEventListener('DOMContentLoaded', _ => {
    let moleCount = 30;
    let playerScore = 0;
    const moleHeads = document.querySelectorAll('.wgs__mole-head');
    
    for(let moleHead of moleHeads){
        moleHead.addEventListener('click', _ => {
            playerScore++
            event.target.classList.add('wgs__mole-head--hidden');
            document.querySelector('.scoreBoard__score').innerHTML = `Score: ${playerScore}`
        });
    };

    setTimeout(_ => {
        popUpRandomMole();
    }, 0);

    const hideMole = index => {
        decrementMoleCount();
        const moleHeads = document.querySelectorAll('.wgs__mole-head');
        moleHeads[index].classList.add('wgs__mole-head--hidden');
        popUpRandomMole();
    };

    const decrementMoleCount = _ => {
        moleCount--;
        document.querySelector('.scoreBoard__molesLeft').innerHTML = `Moles: ${moleCount}`
    }

    const popUpRandomMole = _ => {
        const moleHeads = document.querySelectorAll('.wgs__mole-head');
        if(moleCount <= 0) {
            alert('You Scored: ' + playerScore)
            return;
        }
        const index = ramboBambo(moleHeads.length);
        moleHeads[index].classList.remove('wgs__mole-head--hidden');
        setTimeout(_ => {
            hideMole(index);
        }, (3100 - (playerScore * 200)));
    };

    const ramboBambo = num => Math.floor(Math.random() * Math.floor(num));
    

});

window.ondragstart = _ => false;