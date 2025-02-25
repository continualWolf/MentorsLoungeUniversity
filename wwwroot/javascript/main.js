$(document).ready(function(){
    $('.main-content').hide();
    $('#homePage').show();

    $('#menteeLogInBtn').on('click', function(){
        $('#loginpage').css('display', 'none');
        $('#mainPages').css('display', 'flex');
    });

    $('#mentorLogInBtn').on('click', function(){
        alert('UNDER CONSTRUCTION...')
    });
    
    $('.mentor-card').on('click', function(){
        $('.main-content').hide();
        $('#profilePage').show();
    });

    $('.joinSessionButton').on('click', function(){
       $('#sessionPage').append(joinSessionConfirmationPopUp()); 
       $('.clockIcon').attr('src', 'wwwroot/icons/clock-regular.svg');
       attachClosePopUpEvent()
    });

   $('.js-typeOption').on('click', function(){
        $('.js-typeOption').removeClass("active-option");
        $(this).addClass("active-option");
   });

    $('.js-timeSpanOption').on('click', function(){
        $('.js-timeSpanOption').removeClass("active-option");
        $(this).addClass("active-option");
    });

    $('.js-timeOption').on('click', function(){
        $('.js-timeOption').removeClass("active-option");
        $(this).addClass("active-option");
    });

    $('#bookSessionBtn').on('click', function(){
        $('#profilePage').append(bookSessionPopUp());
        attachClosePopUpEvent();
        attachPopUpPaymentScreenEvent();
        attachBookSessionPopUpEvent();
    });
});

function attachClosePopUpEvent(){
    $('.close-pop-up').off('click').on('click', function(){
        $(this).closest('.pop-up-overlay').remove();
    });
}

function attachPopUpPaymentScreenEvent(){
    $('#continueToSessionPaymentPopUpBtn').on('click', function(){
        $('.js-sessionbody').css('display', 'none');
        $('#payForSessionBody').css('display', 'flex');
    });
}

function attachBookSessionPopUpEvent(){
    $('#bookSessionBtn').on('click', function(){
        $('.js-sessionbody').css('display', 'none');
        $('#paymentCompleteBody').css('display', 'flex');
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

const  bookSessionPopUp = () => {
    return `
        <div class="pop-up-overlay">
            <div class="pop-up" style="width: 500px; height: 400px;">
                <div class="pop-up-controls">
                    <div class="close-pop-up">X</div>
                </div>
                <div class="pop-up-body js-sessionbody" id="confirmSessionBody">
                    <h2 style="text-align: center; font-weight: 500;">Confirmation Details</h2>
                    <p>Please confirm the booking details bellow</p>
                    <p style="width: 100%;"><b>Mentor:</b> Benjamin Watt</p>
                    <p style="width: 100%;"><b>Method:</b> Video Call </p>
                    <p style="width: 100%;"><b>Date:</b> 16/11/25 </p>
                    <p style="width: 100%;"><b>Time:</b> 13:00 </p>
                    <p style="width: 100%;"><b>Cost:</b> £500 </p>
                    <div style="display:flex;flex-flow:row;width: 100%; justify-content: space-between; align-items: center;">
                        <button class="update-profile-btn w-150">Cancel</button>
                        <button class="block-btn w-150" id="continueToSessionPaymentPopUpBtn">Continue</button>
                    </div>
                </div>
                <div class="pop-up-body js-sessionbody" id="payForSessionBody" style="display: none">
                    <h2 style="text-align: center; font-weight: 500;">Payment Details</h2>
                    <p>...</p>
                    <div style="display:flex;flex-flow:row;gap:15px;width: 100%; justify-content: space-between; align-items: center;">
                        <button class="update-profile-btn w-150">Cancel</button>
                        <button class="block-btn w-150" id="bookSessionBtn">Book</button>
                    </div>
                </div>
                <div class="pop-up-body js-sessionbody" id="paymentCompleteBody" style="display: none">
                    <h2 style="text-align: center; font-weight: 500;">Payment Complete</h2>
                    <p>A confirmation email has been sent, and the session has been added to your sessions page.</p>
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
  
