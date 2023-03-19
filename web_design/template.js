
// Dark mode 
function dark_light() {
    let darkData = document.body.classList.toggle("dark_mode_css")
}

//Search search_id
$(function(){
    const searchData=["Adana","Bursa","Diyarbakir","Elazığ","Giresun","Kastamonu","Malatya","Niğde","Van"];
   $("#search_id").autocomplete({
    source:searchData
   });
})


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



//now date 
let now = () => {
    document.getElementById("now_date").innerHTML = new Date().getFullYear();
}
now();