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

var open = false;
let openSideBar = () => {

    if (!open) {
        open = true;
        document.getElementById("sidebar").classList.add("active");
        document.getElementById("navbarSupportedContent").remove("show");
    } else {
        open = false;
        document.getElementById("sidebar").classList.remove("active");
    }
    var cust_nav = document.getElementById("cust-nav");

    // if (window.screen.width < 990) {
    //     cust_nav.style.display = "block";
    // } else {
    //     cust_nav.style.display = "none";
    // }

}

let changeAvatar = (e) => {
    let all = document.getElementsByClassName("selected");
    let activeAvatar = document.getElementById("active-avatar");
    for (let i = 0; i <= all.length; i++) {
        if (all[i].classList.contains("active")) {
            all[i].classList.remove("active");
            e.target.classList.add("active");
            activeAvatar.src = e.target.src;
        } else {
            continue;
        }
    }
}

let removeActive = (e) => {
    let all = document.getElementsByClassName("dropdown-item");
    for (let i = 0; i <= all.length; i++) {
        if (all[i].classList.contains("active")) {
            all[i].classList.remove("active");
            e.target.classList.add("active");
            e.target.classList.toggle("active");
        } else {
            continue;
        }
    }
}

let closeSideBar = () => {
    open = false;
    document.getElementById("sidebar").classList.remove("active");
}


function initMap() {
    // The location of Uluru
    const uluru = { lat: 51.165691, lng: 10.451526 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}