//открытие меню для телефонов:

function openNav() {
    document.getElementById("menu").style.width = "250px";
}

function closeNav() {
    document.getElementById("menu").style.width = "0";
}

// Добавим возможность закрыть меню, касаясь другой части экрана
document.addEventListener('click', function(e) {
    var sidebar = document.getElementById("menu");
    var openBtn = document.querySelector(".openbtn");
    if (!sidebar.contains(e.target) && !openBtn.contains(e.target)) {
        closeNav();
    }
});


//открытие меню свайпом для телефонов:

document.addEventListener('DOMContentLoaded', function() {
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
    });

    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].clientX;
        if (touchStartX < window.innerWidth * 0.2 && touchEndX > touchStartX) {
            openNav();
        }
    });
});

function openNav() {
    document.getElementById("menu").style.width = "250px";
}

function closeNav() {
    document.getElementById("menu").style.width = "0";
}

//при скролле плавное появление:

document.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.element-scroll-animation');
    
    elements.forEach(function(element) {
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight < 0) {
            element.style.opacity = 1;
        }
    });
});

//кнопка наверх

// Получаем кнопку
var mybutton = document.getElementById("scrollToTopBtn");

// Показываем кнопку после прокрутки на 20px от верха страницы
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }
}

// При нажатии на кнопку, прокрутить вверх
mybutton.addEventListener("click", function() {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
});