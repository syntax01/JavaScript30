// the e argument in playSound and removeTransition is confusing...
// i believe the way that it works is that because these functions are passed as
// an argument to another/calling function, THAT function is going to pass the 
// argument when it "calls back" this function (playSound/removeTransition)
// so addEventListener, internally, has a property of "event", and each time it
// executes, it then executes the callback function (playSound/removeTransition),
// and it passes that property as an argument to the callback function


function playSound(e) {
    
        const audio = document.querySelector(`audio[data-key="${e.code}"]`);
        const key = document.querySelector(`div[data-key="${e.code}"]`);
        if(!audio) return;
        
        // rewind to start
        audio.currentTime = 0;
        audio.play();
    
        key.classList.add('playing');
    
}

function removeTransition(e) {

    if(e.propertyName !== 'transform') return;
    // this = key div because addEventListener was called BY the key div (key.addEventLister)
    this.classList.remove('playing');

}

const keys = document.querySelectorAll('.key');
// Dont need the () because its 1 parm, dont need {} because its 1 line
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
