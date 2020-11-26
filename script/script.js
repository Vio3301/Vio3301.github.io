$(document).ready(function () {
    $(".slide").owlCarousel({
        items: 1,
        center: true,
        autoplay: true,
        autoplayTimeout: 7000,
        loop: true,
        dots: false,
        animateOut: 'fadeOut',
        mouseDrag: false,
        touchDrag: false
    });

    $('.owlImage').owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        mouseDrag: false,
        touchDrag: false

    })

});

function openModal() {
    $('#myModal').css("display", "block");
    $('body').css("overflow", "hidden");
}

function closeModal() {
    $('#myModal').css("display", "none");
    $('body').css("overflow", "auto");

}

function caruselClick(id) {
    let active = document.querySelectorAll('.owl-item')
    let div = document.querySelectorAll('.item-img')
    let toIndex = 0;
    $(".owl-carousel").trigger("to.owl.carousel", [toIndex, 0, true]);
    if (window.matchMedia('(max-width: 767px)').matches) {
        switch (id) {
            case "p-1":
                for (i = 0; i < 4; i++) {


                    div[i].style.backgroundImage = `url('./img/swipe${i+1}.jpg')`;
                }
                break;
            case "p-2":
                for (i = 0; i < 4; i++) {
                    div[i].style.backgroundImage = `url('./img/swipe1-${i+1}.jpg')`;

                }
                break;
            case "p-3":
                for (i = 0; i < 4; i++) {
                    div[i].style.backgroundImage = `url('./img/swipe2-${i+1}.jpg')`;
                }
                break;
            case "p-4":
                for (i = 0; i < 4; i++) {
                    div[i].style.backgroundImage = `url('./img/swipe3-${i+1}.jpg')`;
                }
                break;
            case "p-5":
                for (i = 0; i < 4; i++) {
                    div[i].style.backgroundImage = `url('./img/swipe4-${i+1}.jpg')`;
                }
                break;
        }
    } else {

        if (id == "p-4") {
            for (i = 0; i < 4; i++) {

                div[i].style.backgroundImage = `url('./img/swipe3-${i+1}.jpg')`;
            }
        } else {
            switch (id) {
                case "p-1":
                    for (i = 0; i < 4; i++) {

                        div[i].style.backgroundImage = `url('./img/swipe${i+1}.jpg')`;
                    }
                    break;
                case "p-2":
                    for (i = 0; i < 4; i++) {
                        div[i].style.backgroundImage = `url('./img/swipe1-${i+1}.jpg')`;
                    }
                    break;
                case "p-3":
                    for (i = 0; i < 4; i++) {
                        div[i].style.backgroundImage = `url('./img/swipe2-${i+1}.jpg')`;
                    }
                    break;
                case "p-5":
                    for (i = 0; i < 4; i++) {
                        div[i].style.backgroundImage = `url('./img/swipe4-${i+1}.jpg')`;
                    }
                    break;
            }
        }
    }

}
function emailV(email){
    const mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return mailformat.test(email)
}

function valid_sendDate(e) {
    let name, email, messages, text, 
        parent_form, div, span, i, p, em ;
    name = document.getElementById("name").value
    email = document.getElementById('email').value
    messages = document.getElementById("messaggio").value
    text = document.getElementById("alert-text")
    //  ----------------------------------
    span = document.createElement("SPAN")
    i = document.createElement("I")
    p = document.createElement("P")
    div = document.createElement("DIV")
    div.setAttribute('class', 'messages')
    span.setAttribute('class', 'mes')
    i.setAttribute('class', 'fas fa-check')
    p.innerText = "Il tuo messaggio è stato inviato!"
    p.setAttribute('class', 'text')
    parent_form = document.getElementById("form")
    // -----------------> Validation
    em = emailV(email)
    if (name == "" || name == null) {
        text.style.display = "inline-block"
    }else if (messages == "" || messages == null){
        text.style.display = "inline-block"
    }else if(em == false){
        text.style.display = "inline-block"
     }
     else {
            text.style.display = "none"
            // -------------> send
            let xhr = new XMLHttpRequest();
            let url = "http://a0476818.xsph.ru/server.php";
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    div.style.animation = 'fadeIn 1s'
                    span.appendChild(i)
                    div.appendChild(span)
                    div.appendChild(p)
                    parent_form.appendChild(div)
                    setTimeout(function () {
                        div.style.animation = 'fadeOut 1s';
                        setTimeout(function () {
                            div.remove()
                            setTimeout(function () {
                                document.getElementById("name").value = " "
                                document.getElementById('email').value = " "
                                document.getElementById("messaggio").value = " "
                            }, 500)
                        }, 1000)
                    }, 3000)
                }
            }
            let data = JSON.stringify({
                "name": name,
                "email": email,
                "messages": messages
            });
            xhr.send(data);
        
    }

}

function scroll() {
    const anchors = document.querySelectorAll('a[href^="#"]')
    for (let anchor of anchors) {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const blockID = anchor.getAttribute('href')
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    }
}
scroll()
