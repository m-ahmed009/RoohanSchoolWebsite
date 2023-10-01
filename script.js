// Navbar
$(document).ready(function () {
  var $navbarNav = $("#navbarNav");
  var $navbarToggler = $(".navbar-toggler");
  var $closeNav = $("#closeNav");

  // Toggle the off-canvas menu when clicking the toggle button
  $navbarToggler.click(function (event) {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    $navbarNav.toggleClass("show");
  });


  // Close the menu when clicking anywhere outside of it
  $(document).click(function (event) {
    if (!$navbarNav.is(event.target) && $navbarNav.has(event.target).length === 0) {
      $navbarNav.removeClass("show");
    }
  });

  // Close the menu when clicking the close button
  $closeNav.click(function () {
  $navbarNav.removeClass("show");
  toggleCloseButtonVisibility();
  });

});

// Dropdown
$('.navbar-nav .dropdown').hover(function () {
  $(this).find('.dropdown-menu').first().stop(true, true).show();
}, function () {
  $(this).find('.dropdown-menu').first().stop(true, true).hide();
});
// Navbar


// Typing------Effects

// About-section
let title = document.querySelector('.school-text');
let name = "Roohan Public School"
let index = 1;

const typeWriter = () => {
  let new_title = name.slice(0, index);
  title.innerText = new_title;

  index > name.length ? index = 1 : index++;
  // index++;

  setTimeout(() => typeWriter(), 67)
}
typeWriter();
// About-section

// Features-section
let title1 = document.querySelector('.features-text');
let name1 = "Features"
let index1 = 1;

const typeWriter1 = () => {
  let new_title1 = name1.slice(0, index1);
  title1.innerText = new_title1;

  index1 > name1.length ? index1 = 1 : index1++;
  // index++;

  setTimeout(() => typeWriter1(), 140)
}
typeWriter1();
// Features-section

// classes-section
let title2 = document.querySelector('.classes-text');
let name2 = "CLASSES"
let index2 = 1;

const typeWriter2 = () => {
  let new_title2 = name2.slice(0, index2);
  title2.innerText = new_title2;

  index2 > name2.length ? index2 = 1 : index2++;
  // index++;

  setTimeout(() => typeWriter2(), 140)
}
typeWriter2();
// classes-section


// Gallery section
let title3 = document.querySelector('.gallery-text');
let name3 = "gallery"
let index3 = 1;

const typeWriter3 = () => {
  let new_title3 = name3.slice(0, index3);
  title3.innerText = new_title3;

  index3 > name3.length ? index3 = 1 : index3++;
  // index++;

  setTimeout(() => typeWriter3(), 140)
}
typeWriter3();
// Gallery section

// Prents-review
let title4 = document.querySelector('.reviews-text');
let name4 = "Reviews"
let index4 = 1;

const typeWriter4 = () => {
  let new_title4 = name4.slice(0, index4);
  title4.innerText = new_title4;

  index4 > name4.length ? index4 = 1 : index4++;
  // index++;

  setTimeout(() => typeWriter4(), 140)
}
typeWriter4();
// Prents-review



// Typing------Effects



// Counter-section
function animateValue(id, start, end, duration) {
  let current = start;
  const increment = (end - start) / duration;
  const element = document.getElementById(id);
  const timer = setInterval(function () {
    current += increment;
    element.textContent = Math.floor(current);
    if (current >= end) {
      element.textContent = end;
      clearInterval(timer);
    }
  }, 100);
}

// Set your target numbers and animation duration here
animateValue('studentsCount', 5, 300, 200);
animateValue('teachersCount', 8, 50, 200);
animateValue('coursesCount', 9, 20, 200);
// Counter-section


// gallery-overlay-section
lightbox.option({
  'resizeDuration': 500,
  'wrapAround': true
});
// gallery-overlay-section