
window.addEventListener('load', function() {
    const div1 = document.getElementById('home-heading');
    const div2 = document.getElementById('home-input');
    // Set the width of div2 to match div1
    div2.style.width = getComputedStyle(div1).width;
});

window.addEventListener('resize', function() {
    const div1 = document.getElementById('home-heading');
    const div2 = document.getElementById('home-input');
    // Set the width of div2 to match div1
    div2.style.width = getComputedStyle(div1).width;
});