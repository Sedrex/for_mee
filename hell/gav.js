const data = [
    {
      "name": "УСРС1",
      "img": "image/usr1.png",
      "img2": "image/usrs1.jpg",
    },
    {
      "name": "УСРС2",
      "img": "image/usr2.jpg",
      "img2": "image/usrs2.jpg",
      
    },
    {
      "name": "УСРС4",
      "img": "image/usr4.jpg",
      "img2": "image/usrs4.jpg",
      "img3": "image/usrs4_2.jpg",
    },
    {
      "name": "УСРС6",
      "img": "image/usr6.jpg",
      "img2": "image/usrs6.jpg",
      "img3": "image/usrs6_2.jpg",
      "img4": "image/usrs6_3.jpg",
      "img5": "image/usrs6_4.jpg",
      "img6": "image/usrs6_5.jpg",
      "img7": "image/usrs6_6.jpg",
      "img8": "image/usrs6_7.jpg",
      "img9": "image/usrs6_8.jpg",
      "img10": "image/usrs6_9.jpg",
      "img11": "image/usrs6_10.jpg",
      "img12": "image/usrs6_11.jpg",
      "img13": "image/usrs6_12.jpg",
    },
    {
      "name": "УСРС7",
      "img": "image/usr7.jpg",
      "img2": "image/usrs7.jpg",
      "img3": "image/usrs7_2.jpg",
      "img4": "image/usrs7_3.jpg",
      "img5": "image/usrs7_4.jpg",
    },
    {
      "name": "УСРС8",
      "img": "image/usr8.jpg",
      "img2": "image/usrs8.jpg",
      "img3": "image/usrs8_1.jpg",
    },
    {
      "name": "УСРС3",
      "img": "image/usr3.jpg",
      "img2": "image/usrs3.jpg",
      "img3": "image/usrs3_2.jpg",
    },
    {
      "name": "Схема",
      "img":   "image/chema.jpg",
      "img2": "image/chema.jpg",
      "img3": "image/chema1.jpg",
    }
  ]


//burger

const container = document.querySelector('.container');
const burger = document.querySelector('.burger');
const shadow = document.querySelector('.shadow');
const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const menu_body = document.querySelector('.menu_body');
const menu_text = document.querySelector('.l_text');

function toggleMenu() {
    burger.classList.toggle('_active');
    shadow.classList.toggle('_active');
    body.classList.toggle('_active');
    logo.classList.toggle('_active');
    menu_body.classList.toggle('_active');

};

if(container.clientWidth <741){
burger.addEventListener('click', toggleMenu);
menu_body.addEventListener('click', toggleMenu);
shadow.addEventListener('click', toggleMenu);
}





// slider
const nextArrow = document.querySelector('.btn_2');
var slide = 0,
   slides = document.querySelectorAll('.firts_slider'),
   numSlides = slides.length;

let dataA = [[], [], []];
let random = Math.floor(data.length * Math.random());
for (let i = 0; i < 3; i++) {
   for (let k = 0; k < 3; k++) {
      random = Math.floor(data.length * Math.random());
      if (i === 0) {
         while (dataA[i].indexOf(random) !== -1) {
            random = Math.floor(data.length * Math.random());
         }
      } else {
         while (dataA[i].indexOf(random) !== -1 || dataA[0].indexOf(random) !== -1) {
            random = Math.floor(data.length * Math.random());
         }
      }
      dataA[i].push(random)
   }
}

var itemToShow = Math.abs(slide % numSlides);

//Functions!!
let currentSlide = function () {
   itemToShow = Math.abs(slide % numSlides);
   [].forEach.call(slides, function (el) {
      el.classList.remove('Active')
   });
   slides[itemToShow].classList.add('Active');

   
},
   next = function () {
      changeSlide('next', (itemToShow === 0) ? 2 : (itemToShow - 1))
      changeData((itemToShow === 2) ? 0 : (itemToShow + 1));
      slide++;
      currentSlide();
   },
   prev = function () {
      changeSlide('prev', (itemToShow === 2) ? 0 : (itemToShow + 1))
      changeData((itemToShow === 0) ? 2 : (itemToShow - 1));
      slide--;
      currentSlide(2);
   },
   changeSlide = function (direct, item) {
      if (direct === 'next') {
         for (let i = 0; i < 3; i++) {
            random = Math.floor(data.length * Math.random());
            while ((dataA[item].indexOf(random) !== -1) || dataA[item === 0 ? 2 : item - 1].indexOf(random) !== -1) {
               random = Math.floor(data.length * Math.random());
            }
            dataA[item][i] = random;
         }
      }
      if (direct === 'prev') {
         for (let i = 0; i < 3; i++) {
            random = Math.floor(data.length * Math.random());
            while ((dataA[item].indexOf(random) !== -1) || dataA[item === 2 ? 0 : item + 1].indexOf(random) !== -1) {
               random = Math.floor(data.length * Math.random());
            }
            dataA[item][i] = random;
         }
      }
   },
   changeData = function (itemChange) {
      slides[itemChange].querySelectorAll('.card_pets').forEach((item, index) => {
         item.querySelector('img').src = data[dataA[itemChange][index]].img;
         item.querySelector('p').innerHTML = data[dataA[itemChange][index]].name;
      })
   }


//Buttons

document.querySelector('#hello').addEventListener('click', function () {
   next();
}, false);
document.querySelector('#hello2').addEventListener('click', function () {
   prev();
}, false);

changeData(0)





let btnRight = document.querySelector("#hello4");
let btnLeft = document.querySelector("#hello3");


// popup



const shadowpopup = document.querySelector('.shadow_pop');
const btnPop = document.querySelector('.btn_p');
const closes = document.querySelector('.btn_close');
const popup = document.querySelector('.popup');
let sliders =  document.querySelector('.image_pop');

function tap (evt) {
    if (evt.target.textContent === 'Просмотр') {
       let itemPopup = data.filter(item => {
          return item.name === evt.target.parentNode.querySelector('p').innerHTML
       })
 
        popup.querySelector('.popup-conten_name').textContent = itemPopup[0].name;
        popup.querySelector('.slide1').src = itemPopup[0].img2;
        popup.querySelector('.slide2').src = itemPopup[0].img3;
        popup.querySelector('.slide3').src = itemPopup[0].img4;
        popup.querySelector('.slide4').src = itemPopup[0].img5;
        popup.querySelector('.slide5').src = itemPopup[0].img6;
        popup.querySelector('.slide6').src = itemPopup[0].img7;
        popup.querySelector('.slide7').src = itemPopup[0].img8;
        popup.querySelector('.slide8').src = itemPopup[0].img9;
        popup.querySelector('.slide9').src = itemPopup[0].img10;
        popup.querySelector('.slide10').src = itemPopup[0].img11;
        popup.querySelector('.slide11').src = itemPopup[0].img12;
        popup.querySelector('.slide12').src = itemPopup[0].img13;
       
      
        if(  popup.querySelector('.popup-conten_name').textContent == 'УСРС1' || popup.querySelector('.popup-conten_name').textContent == 'УСРС2' ){

         
     btnLeft.classList.add("none");
     btnRight.classList.add("none");
       }else{
         btnLeft.classList.remove("none");
         btnRight.classList.remove("none");

       }

       if( popup.querySelector('.popup-conten_name').textContent == 'УСРС3' || popup.querySelector('.popup-conten_name').textContent == 'УСРС4' || popup.querySelector('.popup-conten_name').textContent == 'УСРС8' || popup.querySelector('.popup-conten_name').textContent == 'Схема' ){

        popup.querySelector('.slide3').src = itemPopup[0].img2;
        popup.querySelector('.slide4').src = itemPopup[0].img3;
        popup.querySelector('.slide5').src = itemPopup[0].img2;
        popup.querySelector('.slide6').src  = itemPopup[0].img3;
        popup.querySelector('.slide7').src  = itemPopup[0].img2;
        popup.querySelector('.slide8').src  = itemPopup[0].img3;
        popup.querySelector('.slide9').src  = itemPopup[0].img2;
        popup.querySelector('.slide10').src = itemPopup[0].img3;
        popup.querySelector('.slide11').src = itemPopup[0].img2;
        popup.querySelector('.slide12').src = itemPopup[0].img3;
       }
       if( popup.querySelector('.popup-conten_name').textContent == 'УСРС7'  ){

        popup.querySelector('.slide5').src = itemPopup[0].img2;
        popup.querySelector('.slide6').src  = itemPopup[0].img3;
        popup.querySelector('.slide7').src  = itemPopup[0].img4;
        popup.querySelector('.slide8').src  = itemPopup[0].img5;
        popup.querySelector('.slide9').src  = itemPopup[0].img2;
        popup.querySelector('.slide10').src = itemPopup[0].img3;
        popup.querySelector('.slide11').src = itemPopup[0].img4;
        popup.querySelector('.slide12').src = itemPopup[0].img5;
       }

       
        
        

        popup.classList.toggle('_active');
        shadowpopup.classList.toggle('_active');
        body.classList.toggle('_active');
       
      
    }
 }




document.addEventListener('click', tap);

closes.addEventListener('click', function(e){
    popup.classList.remove('_active');
    shadowpopup.classList.remove('_active');
    body.classList.remove('_active');
})

shadowpopup.addEventListener('click', function(e){
    popup.classList.remove('_active');
    shadowpopup.classList.remove('_active');
    body.classList.remove('_active');
})







// Берём кнопку вперёд
// Берём слайды
let slides_popaup = document.querySelectorAll(".images_pop_slide");
// Объявляем переменную i 
let i = 0;
 
// Объявляем событие нажатия на кнопку вперёд
btnRight.addEventListener("click", function () {
    // Увеличиваем переменную i
    ++i
    // Условие если переменная i больше или равна количеству слайдов
    if (i >= slides_popaup .length) {
        // Удаляем класс block предыдущему слайду
        slides_popaup[i-1].classList.remove("block");
        slides_popaup[i-1].classList.add("none");
        // Присваиваем переменной i ноль
        i = 0;
        // Добавляем класс block следующему слайду
        slides_popaup [i].classList.add("block");
    } else { // Иначе
        // Удаляем класс block предыдущему слайду
        slides_popaup[i-1].classList.remove("block");
        slides_popaup[i-1].classList.add("none");
        // Добавляем класс block следующему слайду
        slides_popaup[i].classList.add("block");
    }
})





btnLeft.addEventListener("click", function () {
   // Увеличиваем переменную i
   --i

   // i = slides_popaup .length-1
   // Условие если переменная i больше или равна количеству слайдов
     // Условие, если номер слайда больше нуля
     

     if (slides_popaup.length >= i & i!=-1) { // Если верно то
      // Уменьшаем номер слайда
      slides_popaup[i+1].classList.remove("block");
      slides_popaup[i+1].classList.add("none");
      
      // Добавляем класс block следующему слайду
      slides_popaup[i].classList.add("block");
  } else { // Иначе
      // Номер слайда равен четырём
      slides_popaup[i+1].classList.remove("block");
      slides_popaup[i+1].classList.add("none");
      // Присваиваем переменной i ноль
   
      // Добавляем класс block следующему слайду
      slides_popaup [i = slides_popaup .length-1].classList.add("block");
  }
})
