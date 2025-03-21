document.addEventListener('DOMContentLoaded', function () {
    const marker = document.querySelector('#marker');
    const navLinks = document.querySelectorAll('nav a');

    // Initial placement of the marker (on page load)
    function setMarkerPosition(link) {
        marker.style.left = link.offsetLeft + 'px';
        marker.style.width = link.offsetWidth + 'px';
    }

    // Set the marker to the first nav item on page load
    setMarkerPosition(navLinks[0]);

    // Move the marker when clicking on a nav item
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            setMarkerPosition(e.target);
        });
    });
});
