$(document).ready(function(){
    $('.main-content').hide();
    $('#homePage').show();

    
    $('.mentor-card').on('click', function(){
        $('.main-content').hide();
        $('#profilePage').show();
    });
});

function toggleNotifications() {
    const panel = document.getElementById('notificationPanel');
    panel.classList.toggle('active');
}

function openBlankPage() {
    window.open('about:blank', '_self');
}

function openHomePage(){
    $('.main-content').hide();
        $('#homePage').show();
}

function openSettingsPage(){
    $('.main-content').hide();
        $('#settingsPage').show();
}

function handlePageLinkClick(button, page) {
    $('.navItem').removeClass('active');
  
    $(button).addClass('active');
  
    $('.main-content').hide();
  
    $('#' + page).show();
  }
  