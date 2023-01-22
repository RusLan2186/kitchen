// ................BURGER................................................

$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.header__burger').click(function (event) {
      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс) 
      $('.header__burger, .header__menu').toggleClass('open-menu');
      // при открытом бургере блокируем прокрутку страницы
      $('body').toggleClass('lock');
   });
});

// закрытие бургера, при нажатии на меню
const headerLinks = document.querySelectorAll('.header__menu')
headerLinks.forEach((el) => {
   el.addEventListener('click', () => {
      $('.header__burger,.header__menu').toggleClass('open-menu');
      $('body').toggleClass('lock');
   })
})

// ............................................................................................................

let wrapper = document.querySelector('.wrapper');

let pageSlider = new Swiper('.page', {

   // создаем свои классы слайдера
   wrapperClass: "page__wrapper",
   slideClass: "screen",

   // Вертикальный слайдер
   direction: 'vertical',


   // Количество слайдов для показа
   slidesPerView: 'auto',

   // Включаем параллакс
   parallax: true,

   // Управление кравиатурой
   keyboard: {
      // вкл/выкл
      enabled: true,

      // вкл/выкл только когда слайдер в пределах вьюпорта
      onlyInViewport: true,

      //  вкл/выкл  управление клавишами pageUp, pageDown
      pageUpDown: true,
   },

   // управление колесом мыши
   mousewheel: {
      // чувствительность колеса мыши
      sensitivity: 1,

      // класс объекта на кот. будет срабатывать прокрутка мышью
      // eventsTarget: ".image-slider"
   },


   // откл функционала если слайдер меньше чем нужно
   watchOverflow: true,

   // скорость
   speed: 800,

   // обновить свайпер при изменении элементов слайдера
   observer: true,

   // обновить свайпер при изменении родительских  элементов слайдера
   observeParents: true,

   // обновить свайпер при изменении дочерних элементов слайдера
   observeSlideChildren: true,

   // навигация
   pagination: {
      el: ' .page__pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: "page__bullet",
      bulletActiveClass: "page__bullet_active",
   },

   // скролл
   scrollbar: {
      el: ' .page__scroll',
      dragClass: "page__drag-scroll",
      // возможность перемотать скролл
      draggable: true,
   },
   // отключаем автоинициализацию
   init: false,


   // Событие
   on: {
      // событие инициализации
      init: function () {
         menuSlider();
         setScrollType();
         wrapper.classList.add('_loaded');
      },
      // событие смены слайда
      slideChange: function () {
         menuSliderRemove();
         menuLinks[pageSlider.realIndex].classList.add('_active');
      },
      resize: function () {
         setScrollType();
      }
   },
});

// добавление/удаление активной ссылки в зависимости от экрана
let menuLinks = document.querySelectorAll('.menu__link');
function menuSlider() {

   if (menuLinks.length > 0) {
      menuLinks[pageSlider.realIndex].classList.add('_active');
      for (let index = 0; index < menuLinks.length; index++) {
         const menuLink = menuLinks[index];
         menuLink.addEventListener("click", function (e) {
            menuSliderRemove();
            pageSlider.slideTo(index, 800);
            menuLink.classList.add('_active');
            e.preventDefault();
         });
      }
   }
}

function menuSliderRemove() {
   let menuLinkActive = document.querySelector('.menu__link._active');
   if (menuLinkActive) {
      menuLinkActive.classList.remove('_active');
   }
}
// отключение поэкранного скролла
function setScrollType() {
   if (wrapper.classList.contains('_free')) {
      wrapper.classList.remove('_free');
      pageSlider.params.freeMode.enabled = false;
   }
   for (let index = 0; index < pageSlider.slides.length; index++) {
      const pageSlide = pageSlider.slides[index];
      const pageSlideContent = pageSlide.querySelector('._content');
      if (pageSlideContent) {
         const pageSlideContentHeight = pageSlideContent.offsetHeight;
         if (pageSlideContentHeight > window.innerHeight) {
            wrapper.classList.add('_free');
            pageSlider.params.freeMode.enabled = true;
            // pageSlider.params.freeMode = true;
            break;
         }
      }
   }
}


// запуск слайдера
pageSlider.init();



// ТАБЫ

$(document).ready(function () {
   $('.menu__tabs_link').click(function (e) {
      e.preventDefault()

      // класс где лежать ссылки(табы)
      // 2класс - тело, где лежить контент
      $('.menu__tabs_link').removeClass('menu__tabs_link--activee');
      $('.tabs-block').removeClass('tabs-block--activee');

      $(this).addClass('menu__tabs_link--activee');
      $($(this).attr('href')).addClass('tabs-block--activee')

   });
   $('.menu__tabs_link:first').click();

});





