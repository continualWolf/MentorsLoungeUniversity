$(document).ready(function(){
    $('.main-content').hide();
    $('#homePage').show();

    
    $('.mentor-card').on('click', function(){
        $('.main-content').hide();
        $('#profilePage').show();
    });

    $('.joinSessionButton').on('click', function(){
       $('#sessionPage').append(joinSessionConfirmationPopUp()); 
       $('.clockIcon').attr('src', 'wwwroot/icons/clock-regular.svg');
       attachClosePopUpEvent()
    });

   
});

function attachClosePopUpEvent(){
    $('.close-pop-up').off('click').on('click', function(){
        $(this).closest('.pop-up-overlay').remove();
    });
}

const joinSessionConfirmationPopUp = () => {
    return `
        <div class="pop-up-overlay">
            <div class="pop-up">
                <div class="pop-up-controls">
                    <div class="close-pop-up">X</div>
                </div>
                <div class="pop-up-body">
                    <h2 style="text-align: center; font-weight: 500;">Do you want to join the session now?</h2>
                    <p style="display: flex; flex-direction: row; justify-content: center; align-items: center; gap:10px" > <img class="clockIcon" />1 min more  </p>
                    <div style="display:flex;flex-flow:column;gap:25px;width: 100%; justify-content: center; align-items: center; margin-top: 40px;">
                        <button class="block-btn w-150">Join Now</button>
                        <button class="update-profile-btn w-150">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

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
  
