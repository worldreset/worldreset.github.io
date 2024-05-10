/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownClicked() {

  //document.getElementById("myDropdown").classList.toggle("show");
  myDropdown.classList.add('show');

  if (myDropdown.innerHTML === "EXTRAS ä"){
    document.getElementById("dropdownButton").innerHTML = "EXTRAS ã";
  }
  else {
    document.getElementById("dropdownButton").innerHTML = "EXTRAS ä";
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
      document.getElementById("dropdownButton").innerHTML = "EXTRAS ã";
    }
  }
}



function explode() {

  window.removeEventListener("click", explode);
  
  document.getElementById("clickToContinue").style.visibility = "hidden";

  setTimeout(function() {
    const image = document.getElementById('catAnimation');
    image.src = 'mainImages/introAnimation/9a.png';
  }, 0);

  setTimeout(function() {
    const image = document.getElementById('catAnimation');
    image.src = 'mainImages/introAnimation/10a.png';
  }, 300);

  setTimeout(function() {
    const image = document.getElementById('catAnimation');
    image.src = 'mainImages/explode.gif';
    /*document.getElementById("catAnimation").style.width = "15%";*/
  }, 400);

  setTimeout(function() {
    document.body.style.opacity = "0";
    document.body.style.visibility="visible"
    setTimeout(function() {
      document.body.style.opacity = "0.1";
    }, 50);
    setTimeout(function() {
      document.body.style.opacity = "0.2";
    }, 100);
    setTimeout(function() {
      document.body.style.opacity = "0.3";
    }, 150);
    setTimeout(function() {
      document.body.style.opacity = "0.4";
    }, 200);
    setTimeout(function() {
      document.body.style.opacity = "0.5";
    }, 250);
    setTimeout(function() {
      document.body.style.opacity = "0.6";
    }, 300);
    setTimeout(function() {
      document.body.style.opacity = "0.7";
    }, 350);
    setTimeout(function() {
      document.body.style.opacity = "0.8";
    }, 400);
    setTimeout(function() {
      document.body.style.opacity = "0.9";
    }, 450);
    setTimeout(function() {
      document.body.style.opacity = "1";
    }, 500);
  }, 2400);

  setTimeout(function() {
    document.getElementById("catAnimation").style.width = "0%";
    document.getElementById("catAnimation").style.visibility = "hidden";
    enableScroll();
  }, 2500);
  
}




function startAnimation() {

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant',
  });
  
  disableScroll();

  //everything starts off hidden already, except the cat imagebox.
  document.getElementById("catAnimation").style.visibility = "visible";

  //The animatic every 0.5 seconds
  setTimeout(function() {
    const image = document.getElementById('catAnimation');
    image.src = 'mainImages/introAnimation/2a.png';
  }, 500);

  setTimeout(function() {
    const image = document.getElementById('catAnimation');
    image.src = 'mainImages/introAnimation/3a.png';
  }, 1000);

  setTimeout(function() {
    const image = document.getElementById('catAnimation');
    image.src = 'mainImages/introAnimation/4a.png';
  }, 1500);

  setTimeout(function() {
    const image = document.getElementById('catAnimation');
    image.src = 'mainImages/introAnimation/5a.png';
  }, 2000);

  setTimeout(function() {
    const image = document.getElementById('catAnimation');
    image.src = 'mainImages/introAnimation/6a.png';
  }, 2500);

  setTimeout(function() {
    const image = document.getElementById('catAnimation');
    image.src = 'mainImages/introAnimation/7a.png';
  }, 3000);

  setTimeout(function() {
    const image = document.getElementById('catAnimation');
    image.src = 'mainImages/introAnimation/8a.png';
    document.getElementById("clickToContinue").style.visibility = "visible";
  }, 3500);

  setTimeout(function() {
    const image = document.getElementById('catAnimation');
    window.addEventListener("click", explode);
  }, 3650);
}





function disableScroll() {
  document.body.style.overflow = 'hidden'
  // Get the current page scroll position
  scrollTop =
      window.scrollX ||
      document.documentElement.scrollTop;
  scrollLeft =
      window.scrollX ||
      document.documentElement.scrollLeft,

      // if any scroll is attempted,
      // set this to the previous value
      window.onscroll = function () {
          window.scrollTo(scrollLeft, scrollTop);
      };
}

function enableScroll() {
  document.body.style.overflow = 'visible';
  window.onscroll = function () { };
}