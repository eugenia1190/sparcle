const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
    	behavior: 'smooth',
    	block: 'start'
    })
  });
}



const locationBtn = document.getElementById('location-btn');

locationBtn.addEventListener('mouseover', function (event) {
    const locationIcon = document.getElementById('location-icon');
    locationIcon.setAttribute('src', 'img/location-icon-active.png');
    this.addEventListener('mouseout', function (event) {
        locationIcon.setAttribute('src', 'img/location-icon.png');
    });

})
