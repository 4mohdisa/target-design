const navbar = document.querySelector("nav");
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () =>{
    navbar.classList.toggle('nav-background');
    menu.classList.toggle('nav-toggle');
});

// menu


var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
});
// for mssg


function sendmail() {

    var name = $('#Name').val();
    var email = $('#Sender').val();
    var subject = $('#Subject').val();
    var message = $('#Message').val();

    // var body = $('#body').val();

    var Body = 'Name: ' + name + '<br>Email: ' + email + '<br>Subject: ' + subject + '<br>Message: ' + message;
    //console.log(name, phone, email, message);

    Email.send({
      SecureToken: "fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
      To: 'aamirtarget@gmail.com',
      From: "mohdisa233@gmail.com",
      Subject: "New message on contact from " + name,
      Body: Body
    }).then(
      message => {
        //console.log (message);
        if (message == 'OK') {
          alert('Your mail has been send. Thanks you for connecting.');
        }
        else {
          console.error(message);
          alert('There is error at sending message. ')

        }

      }
    );
  }
  
$(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
})