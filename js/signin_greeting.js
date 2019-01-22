var welcome;
var date = new Date();
var hour = date.getHours();
if (hour < 12) {
    welcome = "good<br>morning";
    image_greeting='<img src="./assets/images/greeting_morning.png" style="height: 40vw;">';
}
else if (hour < 16) {
    welcome = "good<br>afternoon";
    image_greeting='<img src="./assets/images/greeting_afternoon.png" style="height: 40vw;">';
}
else {
    welcome = "good<br>evening";
    image_greeting='<img src="./assets/images/greeting_evening.png" style="height: 40vw;">';
}
$('.dhaaga_signin_image').html(image_greeting);
$('.dhaaga_signin_text').html(welcome);