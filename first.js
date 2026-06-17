const buttons =
document.querySelectorAll(".orderBtn");

buttons.forEach(function(button){

    button.addEventListener(
    "click",
    function(){

        alert(
        "Order Placed Successfully!"
        );

    });

});