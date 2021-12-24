document.addEventListener("scroll", () => {
    var logo = document.getElementById("logo");
    if (window.scrollY > 10 || window.screen.width < 600) {
        logo.src = "assets/images/logo-small.png"
        document.getElementById("navbar").style.background = "rgba(0,0,0,0.8)"

    } else {
        logo.src = "assets/images/white-logo-transparent-background.png";
        document.getElementById("navbar").style.background = "none"

    }
})

function privacy_policy_btn() {
    $(".privacy-policy-sec").css("display", "none");
}