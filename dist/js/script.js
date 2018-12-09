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