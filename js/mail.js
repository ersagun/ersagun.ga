/**
 * Created by Ersagun on 17/11/16.
 */

    (function(){
        emailjs.init("user_pqx3r91pJywI5RFDtKj2t");
    })();

$(document).ready(function(){
    $("#sendMail").click(function(){
        var message= 'Email: '+ $("#email").val()+'\n Phone: '+  $("#phone") .val()+'\n'+$("#message").val();
        emailjs.send("gmail","template_PyzJ1KuM",{name: $("#name").val(), notes: message});
    });
});