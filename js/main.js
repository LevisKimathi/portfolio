// Dynamic footer with date
let date = new Date();
let year = date.getFullYear();
let footer_content = '<p><a href="https://github.com/LevisKimathi"><i class="fab fa-github"></i></a> <a href="https://www.linkedin.com/in/leviskimathi/"><i class="fab fa-linkedin"></i></a></p>' +
    '<br>' +
    '<p>Copyright © '+year+' Levis Kimathi | All rights reserved</p>';
$('#footer_content').html(footer_content);
// Add particles
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});