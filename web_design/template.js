

// Dark mode 
function dark_light() {
    let darkData = document.body.classList.toggle("dark_mode_css")
}


//now date 
let now=()=>{
document.getElementById("now_date").innerHTML=new Date().getFullYear();
}
now()