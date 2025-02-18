// start burger menu
let headerMenu = document.querySelector('.header__menu')
let burger = document.querySelector('.burger__container')
let header = document.querySelector('.header')
burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  headerMenu.classList.toggle('active')
  header.classList.toggle('active')
})

let headerMenuItem = document.querySelectorAll('.header__menu li a')
for (let i of headerMenuItem) {
  i.addEventListener('click', () => {
    burger.classList.remove('active')
    headerMenu.classList.remove('active')
    header.classList.remove('active')
  })
}
// end burger menu

// start language menu
if (document.querySelector(".header__lang-menu")) {

  // add for look
  let langBlock = document.querySelector(".header__lang-menu");
  let iconBlock = document.querySelector(".header__language-arrow");
  document
    .querySelector(".header__current-language")
    .addEventListener("click", () => {
      langBlock.classList.toggle("active");
      iconBlock.classList.toggle("active");
    });
}
// end language menu

// start custom slect 
if (document.querySelector('.contact__form-select')) {
  let select = document.querySelector('.contact__form-select')
  let selectSvg = document.querySelector('.contact__svg')
  let selectSvg_ = document.querySelector('.contact__svg svg')
  let selectSvg__ = document.querySelector('.contact__svg path')
  let optionsCont = document.querySelector('.contact__select-options')


  //open select
  select.addEventListener('click', () => {
    optionsCont.classList.toggle('active')
    selectSvg.classList.toggle('active')
  })

  selectSvg.addEventListener('click', () => {
    optionsCont.classList.toggle('active')
    selectSvg.classList.toggle('active')
  })

  let option = document.querySelectorAll('.contact__select-option')
  for (let i of option) {
    i.addEventListener('click', e => {
      select.value = e.target.textContent
      optionsCont.classList.remove('active')
      selectSvg.classList.remove('active')
    })
  }
  document.addEventListener('click', e => {
    let target = e.target
    if (!target.classList.contains('contact__select-option') &&
      !target.classList.contains('contact__form-select') &&
      !target.classList.contains('contact__svg') &&
      target != selectSvg_ &&
      target != selectSvg__) {
      optionsCont.classList.remove('active')
      selectSvg.classList.remove('active')
    }
  })

}
// end custom slect 

// start move tooltipe
if (document.querySelector('.tooltipLink')) {
  $('.tooltipLink').hover(function () {
    var title = $(this).attr('data-tooltip');
    $(this).data('tipText', title);
    if (title == '') { }
    else {
      $('<p class="tooltip"></p>').fadeIn(200).text(title).appendTo('body');
    }
  }, function () {
    $(this).attr('data-tooltip', $(this).data('tipText'));
    $('.tooltip').fadeOut(200);
  }).mousemove(function (e) {
    var mousex = e.pageX;
    var mousey = e.pageY;
    $('.tooltip').css({
      top: mousey,
      left: mousex,
      dispaly: 'flex'
    })
  });
}
// end move tooltipe

// start more text about us
if (document.querySelector('.two-block__about-more')) {
  let moreBtn = document.querySelector('.two-block__about-more')
  let textHidden = document.querySelectorAll('.two-block__about-text-hidden')
  moreBtn.addEventListener('click', () => {
    moreBtn.classList.add('hidden')
    for (let i of textHidden) {
      i.classList.remove('hidden')
    }
  })
}
// end more text about us

// start config range
// if (document.querySelector('.contact__range')) {
//   let rangePriceOutput = document.querySelector('.contact__range-price-js')
//   let range = document.querySelector('.contact__range')
//   let rangeMin = document.querySelector('.contact_range-min')
//   let rangeMax = document.querySelector('.contact_range-max')
//   let rangeValue = document.querySelector('.contact_range-value')
//   range.min = rangeMin.textContent
//   range.max = rangeMax.textContent
//   range.value = rangeValue.textContent
//   rangePriceOutput.textContent = range.value
//   // for desktop
//   document.addEventListener('mousemove', () => {
//     rangePriceOutput.textContent = range.value
//   })
//   //for mobiel
//   document.addEventListener('change', () => {
//     rangePriceOutput.textContent = range.value
//   })
// }
// end config range

// start view more items in about page
if (document.querySelector('.about-scroll__skill-more')) {
  const skillBlock = document.querySelectorAll('.about-scroll__skill-block')
  for (let containerItem of skillBlock) {
    let skillItem = containerItem.querySelectorAll('.about-scroll__skill')

    for (let item of skillItem) {
      item.classList.add('hidden')
    }
    for (let i = 0; i < 4; i++) {
      skillItem[i].classList.remove('hidden')
    }

    // view more items on click
    let btnViewMore = containerItem.querySelector('.about-scroll__skill-more')

    if(skillItem.length < 5){
      btnViewMore.classList.add('hidden')
    }

    btnViewMore.addEventListener('click', () => {
      btnViewMore.classList.add('hidden')
      let skillItem = containerItem.querySelectorAll('.about-scroll__skill')
      for (let item of skillItem) {
        if (item.classList.remove('hidden')) {
          item.classList.contains('hidden')
        }
      }
    })

  }

}
// end view more items in about page

// start prevent default function menu lang
let headCurrentLang = document.querySelectorAll('.header__current-language li a') 
for(let i of headCurrentLang)
i.addEventListener('click', (e) => {
  e.preventDefault();
  })
// end prevent default function menu lang

// start add readonly fo select input
if (document.querySelector(".contact__select-options")) {
  document
    .querySelector(".contact__form-select")
    .setAttribute("readonly", "readonly");
}
// end add readonly fo select input

// start function blog arrow
if (document.querySelector(".blog")) {
  // start replace button click blog pagination
  document
    .querySelector(".blog__pag-arrow-next")
    .addEventListener("click", () => {
      document.querySelector(".next.page-numbers").click();
    });
  if (document.querySelector(".prev.page-numbers")) {
    document
      .querySelector(".blog__pag-arrow-prev")
      .addEventListener("click", () => {
        document.querySelector(".prev.page-numbers").click();
      });
  }
  // end replace button click blog pagination

  // start replace button click blog search
  document.querySelector(".blog__search-icon").addEventListener("click", () => {
    document.querySelector(".hidden_search_btn").click();
  });
  // end replace button click blog search
}
// end function blog arrow

// start config range
if (document.querySelector(".contact__range")) {
  let rangePriceOutput = document.querySelector(".contact__range-price-js");
  let range = document.querySelector(".contact__range");
  let rangeMin = document.querySelector(".contact_range-min");
  let rangeMax = document.querySelector(".contact_range-max");
  let rangeValue = document.querySelector(".contact_range-value");
  let textRange = document.querySelector(".contact__text-range");
  // marketing item
  let textMarketing = document.querySelector(".contact__text-range-marketing");
  let rangeMarketing = document.querySelector(".contact__range-marketing");

  let rangePriceOutputMarket = document.querySelector(
    ".contact__text-range-marketing .contact__range-price-js"
  );
  let rangeMarket = document.querySelector(".contact__range-marketing");

  // first opt
  let rangeMinFirstOpt = 2000;
  let rangeMaxFirstOpt = 15000;
  let rangeValueFirstOpt = 8000;
  // two opt
  let rangeMinTwoOpt = 2000;
  let rangeMaxTwoOpt = 15000;
  let rangeValueTwoOpt = 8000;
  // three opt
  let rangeMinThreeOpt = 500;
  let rangeMaxThreeOpt = 5000;
  let rangeValueThreeOpt = 1000;
  // four opt
  let rangeMinFourOpt = 2000;
  let rangeMaxFourOpt = 15000;
  let rangeValueFourOpt = 8000;
  // marketing opt
  let rangeMinMarket = 500;
  let rangeMaxMarket = 5000;
  let rangeValueMarket = 1000;

  let optionsDiferentPrice = document.querySelectorAll(
    ".contact__select-option"
  );
  optionsDiferentPrice[0].addEventListener("click", () => {
    range.min = rangeMinFirstOpt;
    range.max = rangeMaxFirstOpt;
    range.value = rangeValueFirstOpt;
    rangePriceOutput.textContent = range.value;
    textRange.classList.remove("hidden");
    range.classList.remove("hidden");
    textMarketing.classList.add("hidden");
    rangeMarketing.classList.add("hidden");
  });
  optionsDiferentPrice[1].addEventListener("click", () => {
    range.min = rangeMinTwoOpt;
    range.max = rangeMaxTwoOpt;
    range.value = rangeValueTwoOpt;
    rangePriceOutput.textContent = range.value;
    textRange.classList.remove("hidden");
    range.classList.remove("hidden");
    textMarketing.classList.add("hidden");
    rangeMarketing.classList.add("hidden");
  });
  optionsDiferentPrice[2].addEventListener("click", () => {

    rangeMarket.min = rangeMinMarket;
    rangeMarket.max = rangeMaxMarket;
    rangeMarket.value = rangeValueMarket;
    rangePriceOutputMarket.textContent = rangeMarket.value;

    textRange.classList.add("hidden");
    range.classList.add("hidden");
    textMarketing.classList.remove("hidden");
    rangeMarketing.classList.remove("hidden");
  });
  optionsDiferentPrice[3].addEventListener("click", () => {
    textRange.classList.remove("hidden");
    range.classList.remove("hidden");
    textMarketing.classList.remove("hidden");
    rangeMarketing.classList.remove("hidden");
    range.min = rangeMinFourOpt;
    range.max = rangeMaxFourOpt;
    range.value = rangeValueFourOpt;
    rangePriceOutput.textContent = range.value;

    rangeMarket.min = rangeMinMarket;
    rangeMarket.max = rangeMaxMarket;
    rangeMarket.value = rangeValueMarket;
    rangePriceOutputMarket.textContent = rangeMarket.value;
  });

  let rangeOutputCf7 = document.querySelector(".rangeOutputJs");
  let rangeOutputCf7_two = document.querySelector(".rangeOutputJs-two");
  console.log(rangeOutputCf7_two);
  range.min = rangeMin.textContent;
  range.max = rangeMax.textContent;
  range.value = rangeValue.textContent;
  rangePriceOutput.textContent = range.value;
  // for desktop
  document.addEventListener("mousemove", () => {
    rangePriceOutput.textContent = range.value;
    rangePriceOutputMarket.textContent = rangeMarket.value;
    rangeOutputCf7.value = range.value;
    rangeOutputCf7_two.value =  rangeMarket.value;
  });
  //for mobile
  document.addEventListener("change", () => {
    rangePriceOutput.textContent = range.value;
    rangePriceOutputMarket.textContent = rangeMarket.value;
    rangeOutputCf7.value = range.value;
    rangeOutputCf7_two.value =  rangeMarket.value;
  });
}
// end config range


// start add scroll animation
$(document).ready(function () {
  $("a").on("click", function (event) {
    console.log(this);
    if(this.classList.contains('our-concept__btns-left')){
      console.log('1');
      return
    }
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        3800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
// end add scroll animation
