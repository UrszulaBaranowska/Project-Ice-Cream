var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName('mySlides ');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none ';
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = 'block ';
  setTimeout(carousel, 10000); // Change image every 20 seconds
}

var slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('demo');
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {}
  x[slideIndex - 1].style.display = 'block';
}
