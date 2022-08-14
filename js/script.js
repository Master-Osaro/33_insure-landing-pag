let mobile_nav_icon = document.querySelector(".mobile-nav__toggle");
let nav_list_container = document.querySelector(".nav-list__wrapper");
let isOpen = false;

mobile_nav_icon.addEventListener('click',()=>{
    toggleMobileNav(isOpen);
    isOpen =!isOpen;})

function showNavigationList() {
    nav_list_container.style.display = "block";
}
function hideNavigationList() {
    nav_list_container.style.display = "none";
}

function openedMobileMenu() {
    showNavigationList();
    mobile_nav_icon.style.background ="url(../images/icon-close.svg)";
}
function closedMobileMenu() {
    hideNavigationList();
    mobile_nav_icon.style.background="url(../images/icon-hamburger.svg)";
}



function toggleMobileNav(isOpenParams) {
    if (document.body.clientWidth<772) {
        if (isOpenParams==false) {
            openedMobileMenu()    
        }
        else{
            closedMobileMenu()
        }
    }
}

function alwaysShowDesktopNav(isOpen) {
    if (document.body.clientWidth<772) {
        if (isOpen==false) {
            closedMobileMenu()    
        }
        else{
            openMobileMenu()
        }
    }
    else{
        showNavigationList()
    }
}


//on screen resize ensure isOpen is still preserved
//use document.body.clientWidth instead of screen.width
window.addEventListener("resize", function(event) {
    alwaysShowDesktopNav(isOpen);
})
