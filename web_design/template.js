
// Dark mode 
function dark_light() {
    let darkData = document.body.classList.toggle("dark_mode_css")
}

//now date 
let now = () => {
    document.getElementById("now_date").innerHTML = new Date().getFullYear();
}
now();

//BackToTop 
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $("#back_top").fadeIn('slow');
    } else {
        $("#back_top").fadeOut('slow');
    }
});
$("#back_top").click(function(){
    $('html,body').animate({scrollTop:0},100,'easeInOutExpo');
    return false;
});
