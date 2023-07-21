//preloader
const preloader = document.getElementById("preloader");
window.addEventListener("load", function loading(){
    preloader.style.display = "none";
})

// Setting the profile photo and name + changing style of input when changed.
const u_name = document.getElementById("name");
const pName = document.getElementById("profile-name");
const userQuote = document.getElementById("user-quote");
u_name.addEventListener("change", ()=>{
    if(u_name.value !== ""){
        u_name.style.backgroundColor = 'rgb(5, 5, 19)';
        u_name.style.border = 'none';
     }
     pName.innerText = u_name.value ;
     localStorage.setItem("userName", u_name.value); // store the username 
})
pName.innerText = localStorage.getItem("userName"); // display the
u_name.value  = localStorage.getItem("userName");   // username in the home page and profile

userQuote.addEventListener("change", ()=>{
     localStorage.setItem("userQuote", userQuote.value); // store the userQuote 
})
userQuote.value  = localStorage.getItem("userQuote");

// Cheking the input(empty or not) to change background
window.addEventListener("load", ()=>{
    if(u_name.value !== ""){
        u_name.style.backgroundColor = 'rgb(5, 5, 19)';
        u_name.style.border = 'none';
     } 
} )

//profile photo
const profileImg = document.getElementById("profile-img");
function setProfile(image){
    profileImg.src= image.src;
    localStorage.setItem("profilePhotoUrl", image.src) //store the profile image
}
profileImg.src = localStorage.getItem("profilePhotoUrl"); //display the image in the profile


//Checking answers
function checkAnswer1(){
    if (document.getElementById("pulsating").checked || document.getElementById("steady-state").checked || document.getElementById("big-bang").checked) {
        document.getElementById("pulsating-text").style.color = "rgb(214, 67, 92)";
        document.getElementById("steady-state-text").style.color = "rgb(214, 67, 92)";
        document.getElementById("big-bang-text").style.color = "rgb(119, 230, 230,0.8)";
    }
    if (document.getElementById("big-bang").checked){
        document.getElementById("true-false0").innerText = "Your answer is right!!";
    }
    if (document.getElementById("pulsating").checked || document.getElementById("steady-state").checked){
        document.getElementById("true-false0").innerText = "Your answer is False :( .";
    }
} 


function checkAnswer2(){
    if (document.getElementById("radiation-matter").checked || document.getElementById("light-atomic").checked || document.getElementById("light-matter").checked){
        document.getElementById("radiation-matter-text").style.color = "rgb(119, 230, 230,0.8)";
        document.getElementById("light-atomic-text").style.color = "rgb(214, 67, 92)";
        document.getElementById("light-matter-text").style.color = "rgb(214, 67, 92)";
    }
    if (document.getElementById("radiation-matter").checked){
        document.getElementById("true-false").innerText = "Your answer is right!!";
    }
    if (document.getElementById("light-atomic").checked || document.getElementById("light-matter").checked){
        document.getElementById("true-false").innerText = "Your answer is False :( .";
    }
}

// Display the eras
function displayRadiationInfo() {
    var accordionElement1 = document.getElementById("accordionPanelsStayOpenExample");
    accordionElement1.style.display = "inline";

}
function displayMatterInfo(){
    var accordionElement2 = document.getElementById("accordion2");
    accordionElement2.style.display = "inline";
}