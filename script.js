$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Java Developer", "Software Engineer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Java Developer", "Software Engineer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

});

document.getElementById('sendEmailButton').addEventListener('click', function () {
    // Get the recipient's email address
    var recipientEmail = 'erajtanweer2@gmail.com'; // Replace with the actual email address
    
    // Get the subject and body from the elements or variables
    // var subject = 'Your Subject'; // Replace with the subject you want
    var subject = document.getElementById('subject').textContent;
    var body = document.getElementById('body').textContent; // Extract text from the <p> element

    // Encode subject and body for the mailto link
    subject = encodeURIComponent(subject);
    body = encodeURIComponent(body);

    // Build the mailto link and open it
    var mailtoLink = 'mailto:' + recipientEmail + '?subject=' + subject + '&body=' + body;
    window.location.href = mailtoLink;
});