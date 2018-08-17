var anim_time = 1;

window.onload = function() {
	var a = document.getElementsByClassName("logo")[0];
	var b = document.getElementsByClassName('background')[0];
	var b_cover = document.getElementsByClassName('background-cover')[0];
	console.log(a);
	a.onmousedown = function() {
		b.style.backgroundImage = 'url(bg.jpg)';
		b_cover.style.visibility = 'initial';

		var container = a.parentNode;
		var wrapper = document.getElementsByClassName('info-block')[0];
		wrapper.style.visibility = 'initial';
		container.replaceChild(wrapper, a);
		wrapper.appendChild(a);
		a.className = 'static-logo'
		
		var fade_out = setInterval(function() {
			if(anim_time < 0.01) {
				clearInterval(fade_out);
				b_cover.style.display = "none";
				return;
			}
			b_cover.style.backgroundColor = "rgba(0, 0, 0, " + anim_time + ")";
			anim_time *= 0.99;
		}, 10);
	}
}