$(document).ready(function () {
  $("#carousel").owlCarousel({
    items: 1,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    loop: true,
    dots: true,
    animateOut: 'fadeOut',
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      995: {
        items: 1,

      },
    }
  })

  $('#carusel-two').owlCarousel({
    center: true,
    loop: false,
    items: 4,
    margin: 370,
    dots: false,
    stagePadding: 0,
    dots: true,
    responsive: {
      768: {
        items: 2,
        margin: 50,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        loop: true,
        dots: false,
      },
      1024: {
        items: 3,
        margin: 200,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        loop: true,
        dots: false,
      },
      1200: {
        center: true,
        loop: false,
        items: 4,
        margin: 370,
        dots: false,
        stagePadding: 0,
        dots: true,
      }

    }

  });

});

$(document).ready(function () {
  var show = true;
  $(window).on("scroll load resize", function () {
    if (!show) return false;
    var n = $(window).scrollTop();
    var m = $("#five").offset().top;

    var q_height = $(window).height();
    var w_height = $(document).height()
    var nomber = $("#five").outerHeight();
    if (n + 790 >= m || q_height + n == w_height || nomber + m < q_height) {
      $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
      show = false;
    }
  })

})


function openV() {
  var di = document.getElementById("shadow")
  di.style.display = "block"
  var sectionFour = document.querySelector(".four")

  var diV = document.createElement("div")

  diV.setAttribute('class', 'video')

  sectionFour.appendChild(diV)
  diV.style.display = "block"

  container1 = document.querySelector("#container")
  var e = document.querySelector(".four").insertBefore(diV, container1)
  diV.innerHTML = ' <a style="display: none;" onclick="closeX()" id="closeV" ><i class="fas fa-times"></i></a> <iframe class="frame" width="800" height="600" src="https://www.youtube.com/embed/x4UJVfnCBms" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  var a = document.getElementById("closeV")
  a.style.display = "block"
  shadow()
}

function closeX() {
  var di = document.getElementById("shadow")
  var diV = document.querySelector(".video")
  var a = document.getElementById("closeV")
  di.style.display = "none"
  diV.remove()

  a.style.display = "none"

}
// =========================== NUMBER >

function shadow() {
  var e = document.body.offsetHeight;
  var s = document.getElementById("shadow")
  console.log(e)
  if (s != e) {
    e = document.body.offsetHeight;
    s.style.height = `${e}px`


  }

}

function validation() {
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var subject = document.getElementById('subject');
  var messaje = document.getElementById('textarea');
  var pS = document.getElementById('success');
  var s = "0 0 0 0.1rem rgba(38, 255, 67, 0.562)";
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (name.value == null || name.value == "") {
    name.style.boxShadow = "0 0 0 0.2rem rgba(255, 38, 38, 0.562)";
  } else {
    name.style.boxShadow = "0 0 0 0.1rem rgba(38, 255, 67, 0.562)";
  }
  if (email.value.match(mailformat)) {
    email.style.boxShadow = "0 0 0 0.1rem rgba(38, 255, 67, 0.562)";
    console.log(email.value.match(mailformat)[0])
    console.log(email.value)
  } else {
    email.style.boxShadow = "0 0 0 0.2rem rgba(255, 38, 38, 0.562)";
  }
  if (subject.value == null || subject.value == "") {
    subject.style.boxShadow = "0 0 0 0.2rem rgba(255, 38, 38, 0.562)";
  } else {
    subject.style.boxShadow = "0 0 0 0.1rem rgba(38, 255, 67, 0.562)";
  }
  if (messaje.value == null || messaje.value == "") {
    messaje.style.boxShadow = "0 0 0 0.2rem rgba(255, 38, 38, 0.562)";
  } else {
    messaje.style.boxShadow = "0 0 0 0.1rem rgba(38, 255, 67, 0.562)";
  }
  if (name.value != "" & email.value.match(mailformat)[0] == email.value & subject.value != "" & messaje.value != "") {
    pS.classList.add("visible")
    setTimeout(function () {
      location.reload();
    }, 3000);

  }

}
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader")
  loader.className += "hidden"
})
// + 253