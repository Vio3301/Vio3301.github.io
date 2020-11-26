var li = document.querySelector('.lines'); // Assumes element with id='button'
var li2 = document.querySelector('.lines-one'); // Assumes element with id='button'


li.onclick = function () {
    var ul = document.querySelector('#drop');
    if (ul.style.display !== 'block') {
        ul.style.display = 'block';
    } else {
        ul.style.display = 'none';
    }
};


li2.onclick = function () {
    var ul = document.querySelector('.drop-one');
    if (ul.style.display !== 'block') {
        ul.style.display = 'block';
    } else {
        ul.style.display = 'none';
    }
};
$(document).ready(function () {

            $(".owl-carousel").owlCarousel({
                navText: '',
                items: 1,
                loop: true,
                 nav: true,
                 dots: false,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
            })




   $('input[name="calendar"]').daterangepicker({
       singleDatePicker: true,
       maxYear: 2019,
           

ranges: {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
}
   });

});