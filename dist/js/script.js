'use strict'
// Sidebar button 
var buttonOnNavbar = document.getElementById('navbar-hamburger');
var buttonSidebar = document.getElementById('sidebar-hamburger');
var sidebar = document.getElementById('sidebar');
var content = document.getElementById('content');
// Function Sidebar Hidden 
buttonSidebar.onclick = function () {
    sidebar.classList.add('sidebar-hidden');
    content.classList.add('content-fullwidth');
};
// Function Sidebar Show
buttonOnNavbar.onclick = function () {
    sidebar.classList.remove('sidebar-hidden');
    content.classList.remove('content-fullwidth');
}
// Function Mobile Sidebar Hidden
function MobileSidebar() {
    var deviceWidth = screen.width;

    if (deviceWidth > 767) {
        sidebar.classList.remove('sidebar-hidden');
        content.classList.remove('content-fullwidth');
    } else {
        sidebar.classList.add('sidebar-hidden');
        content.classList.add('content-fullwidth');
    }
};
MobileSidebar();

// Popup  
function PopUp() {

    var popupLoginBtn = document.getElementById('login-btn');
    var popupLogin = document.getElementById('popup-login');
    var popupMessengerBtn = document.getElementById('messenger-btn');
    var popupMessenger = document.getElementById('popup-messenger');
    var closeMessenger = document.getElementById('close-messenger');
    var popupQuitBtn = document.getElementById('quit-btn');
    var popupQuit = document.getElementById('popup-quit');

    popupMessengerBtn.onclick = function () {
        popupMessenger.classList.add('show');
    };
    popupLoginBtn.onclick = function () {
        popupLogin.style.display = 'block';
    };
    popupQuitBtn.onclick = function () {
        popupQuit.style.display = 'block';
    };
    closeMessenger.onclick = function () {
        popupMessenger.classList.remove('show');
    };
    window.onclick = function (event) {
        if (event.target === popupMessenger) {
            popupMessenger.classList.remove('show');
        } else if (event.target === popupLogin) {
            popupLogin.style.display = "none";
        } else if (event.target === popupQuit) {
            popupQuit.style.display = "none";
        }
    }
};
PopUp();