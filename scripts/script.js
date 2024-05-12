const d = new Date();
const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
const formattedDate = d.toLocaleDateString(undefined, options);
document.getElementById("day").innerHTML = formattedDate;

// owl-careousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        center: true,
        nav:true,
        autoplay:true, 
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1020:{
                items:4,
            }
        }
    })
})