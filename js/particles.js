window.onload = function () {
	particlesJS('particles-js', {
		particles: {
			number: {value: 10, density: {enable: false, value_area: 100}},
			color: {value: '#ffffff'},
			shape: {
				type: 'image',
				stroke: {width: 0, color: '#000000'},
				polygon: {nb_sides: 20},
				image: {
					src: './resources/img/dot.png',
					width: 20,
					height: 20,
				},
			},
			opacity: {value: 0.3, random: true, anim: {enable: true, speed: 1, opacity_min: 0.1, sync: false}},
			size: {value: 20, random: true, anim: {enable: true, speed: 20, size_min: 10, sync: false}},
			line_linked: {enable: true, distance: 150, color: '#ffffff', opacity: 0.3, width: 1},
			move: {
				enable: true,
				speed: 2,
				direction: 'none',
				random: true,
				straight: false,
				out_mode: 'out',
				bounce: true,
				attract: {enable: false, rotateX: 2000, rotateY: 1000},
			},
		},
		interactivity: {
			detect_on: 'canvas',
			events: {onhover: {enable: true, mode: 'grab'}, onclick: {enable: false, mode: 'push'}, resize: true},
			modes: {
				grab: {distance: 400, line_linked: {opacity: 1}},
				bubble: {distance: 400, size: 40, duration: 2, opacity: 8, speed: 3},
				repulse: {distance: 200, duration: 0.4},
				push: {particles_nb: 4},
				remove: {particles_nb: 2},
			},
		},
		retina_detect: false,
	});
	var count_particles, stats, update;
	stats = new Stats();
	stats.setMode(0);
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.left = '0px';
	stats.domElement.style.top = '0px';
	document.body.appendChild(stats.domElement);
	count_particles = document.querySelector('.js-count-particles');
	update = function () {
		stats.begin();
		stats.end();
		if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
			count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
		}
		requestAnimationFrame(update);
	};
	requestAnimationFrame(update);
};
