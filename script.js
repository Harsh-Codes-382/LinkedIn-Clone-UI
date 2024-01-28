const profile_pic = document.querySelector('.nav-profile-img');
const menu = document.querySelector('.profile-menu-wrap');
const search_icon = document.querySelector('.search-icon');
const input = document.querySelector('.search-box input');

search_icon.addEventListener('click',()=>{
    
if(window.innerWidth<='600'){ 
    input.classList.toggle('input-width');
    if(input.classList.contains('input-width')){
       document.querySelector('.navbar-center ul').style.display = 'none';
    }
    else{
       document.querySelector('.navbar-center ul').style.display = 'flex';

    }
}
})
profile_pic.addEventListener('click',()=>{
    menu.classList.toggle('show');

})