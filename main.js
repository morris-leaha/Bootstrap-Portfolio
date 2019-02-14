$(".fa-envelope").on("click", function (){
    var emailDiv = $("<span class='email'>");
    emailDiv.html(": morris.leaha@gmail.com");
    $("#email").append(emailDiv);
})

$(".fa-phone-square").on("click", function (){
    var phoneDiv = $("<span class='phone'>");
    phoneDiv.html(": (937)-658-0651");
    $("#phone").append(phoneDiv);
})