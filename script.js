$(document).ready(function(){
    $(window).scroll(function(){
        // sticky menu on scroll script
        if(this.scrollY > 20){
            $('.menu').addClass("sticky");
        }else{
            $('.menu').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }

    });    
});