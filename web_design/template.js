
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
    //HTML
    document.getElementById("now_date").innerHTML = new Date().getFullYear();
    
    // CSS
    $("#now_date").css("color","red");
    const cssDate={
        "box-shadow":"1px 1px 3px 1px rgba(255,255,255,0.1)",
    }
    $("#now_date").css(cssDate);
}
now();