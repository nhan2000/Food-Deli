var searchForm =document.querySelector(".search-form-container");
var cart = document.querySelector(".shopping-cart-container");
var loginForm=document.querySelector(".login-form-container");
var navbar =document.querySelector(".header .navbar");
// var home=document.querySelector("#home");

document.querySelector("#search-btn").onclick = ()=> {
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector("#cart-btn").onclick = ()=> {
    searchForm.classList.remove('active');
    cart.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#login-btn').onclick = () =>{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    // home.classList.toggle('hidden');
}

