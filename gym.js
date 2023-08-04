// Cardiovascular equipment: Treadmills, stationary bikes, elliptical machines, and other cardio equipment are essential for a gym.

// Strength training equipment: Barbells, dumbbells, weight machines, and other strength training equipment are also important to help individuals build and tone their muscles.

// Group fitness classes: Many gyms offer group fitness classes such as yoga, Pilates, spin classes, and aerobics.

// Personal training: Some individuals may prefer one-on-one training sessions with a personal trainer who can help them achieve their fitness goals.

// Locker rooms and showers: Locker rooms equipped with lockers, showers, and other amenities are also necessary for individuals who need to shower and change after a workout.

// Nutritional counseling: Some gyms may offer nutritional counseling to help individuals develop healthy eating habits.

// Physical therapy: Gyms may also have physical therapists who can help individuals recover from injuries or surgeries.

// Childcare: For parents, gyms that offer childcare services can be a big help in allowing them to exercise while their children are being cared for.

// These are just some of the services that a good gym may offer. It's important to choose a gym that offers the services that are most important to you and your fitness goals.
// $(function(){

// 	$("#menu-icon").click(() =>{
// 		$('.media-nav').slideToggle(1000)
// 	})
// })
window.onscroll = function(){scrollFunc()}

function scrollFunc(){
	var sideNav = document.querySelector('.side-nav')
	var nav = document.querySelector('.nav')
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
		sideNav.classList.add('ch')
		nav.classList.add('ch')
	}else if(document.body.scrollTop < 5 || document.documentElement.scrollTop < 5){
		sideNav.classList.remove('ch')
		nav.classList.remove('ch')
	}
}
