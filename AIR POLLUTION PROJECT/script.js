document.addEventListener("DOMContentLoaded", function() {
    const signupButton = document.querySelector(".cta-button[href='#popup']");
    const popup = document.getElementById("popup");
    const closePopupButton = document.getElementById("closePopup");

    signupButton.addEventListener("click", function(event) {
        event.preventDefault();
        popup.style.display = "block";
    });

    closePopupButton.addEventListener("click", function() {
        popup.style.display = "none";
    });
});
 