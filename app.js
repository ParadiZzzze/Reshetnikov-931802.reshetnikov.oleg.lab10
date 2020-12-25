document.addEventListener('DOMContentLoaded', () => {
	var curtain = document.getElementById('main');
	var lamp = document.getElementById('lamp');
	var light = document.getElementById('light');
	var girl = document.getElementById('girl');
	var hat = document.getElementById('hat');
	var animal = document.getElementById('animal');
	var isOn = false;
	var isRabbit = true;
    var turn = document.getElementById('turn');

	curtain.onclick = function() {
		this.style.transition = '.5s';
		this.style.backgroundPositionY = '-1600px';
		setTimeout(() => lamp.style.display = 'block', turn.style.display = 'block', 1000);
	}
    lamp.onmousedown = function(){
        turn.style.marginTop = '115px';
        if (!isOn){
			setTimeout(() => light.style.opacity = 0.5, 0, girl.style.opacity = 1, 0, hat.style.opacity = 1, 0, animal.style.opacity = 0.5, 0)
			isOn = true;
		}
		else{
			setTimeout(() => light.style.opacity = 0, 0.5, girl.style.opacity = 0, 1, hat.style.opacity = 0, 1, animal.style.opacity = 0, 1)
			isOn = false;
		}
	}
	light.onclick = function() {
		if (isRabbit){
			setTimeout("animal.src = 'animal2.png', animal.style.marginTop = '20px'", 1000);
			isRabbit = false;
		}
		else{
			setTimeout("animal.src = 'animal1.png', animal.style.marginTop = '20px'", 1000);
			isRabbit = true;
		}
		animal.style.marginTop = '150px';
		animal.style.transition = '0.5s';
    };
    lamp.onmouseup = function(){
        turn.style.marginTop = '100px';
    };
});
