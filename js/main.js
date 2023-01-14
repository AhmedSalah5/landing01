$(document).ready(function(){
    $(window).scroll(function(){
        console.log($(this).scrollTop());
        if($(this).scrollTop() > 70){
            $('.top-nav').addClass('sticky-nav')
        }else{
            $('.top-nav').removeClass('sticky-nav')
        }

    })
})