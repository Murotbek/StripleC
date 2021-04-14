window.addEventListener('DOMContentLoaded', () =>{
  let service_article = document.querySelectorAll(".service_article"),
  service_article__h = document.querySelectorAll(".service_article h3"),
  service_landing = document.querySelector(".service_landing"),
  service_store = document.querySelector(".service_store"),
  service_corporate = document.querySelector(".service_corporate"),
  servise_landing__slider = document.querySelector(".servise_landing__slider"),
  servise_store__slider = document.querySelector(".servise_store__slider"),
  servise_store2__slider = document.querySelector(".servise_store2__slider"),
  servise_corporate__slider = document.querySelector(".servise_corporate__slider"),
  burger_menu = document.querySelector(".burger_menu a"),
  popup = document.querySelector(".popup"),
  popup__close = document.querySelector(".popup__close"),
  popup__close_nav = document.querySelectorAll(".popup__navigation nav li "),
  partfolio_slide_1 = document.querySelector(".partfolio-slide-1"),
  partfolio_slide_2 = document.querySelector(".partfolio-slide-2"),
  partfolio_slide_3 = document.querySelector(".partfolio-slide-3"),
  partfolio_slide_4 = document.querySelector(".partfolio-slide-4"),
  partfolio_slide_5 = document.querySelector(".partfolio-slide-5"),
  prev = document.querySelector(".order__prev"),
  next = document.querySelector(".order__next"),
  progress_complete = document.querySelector(".progress-complete");
 
  next.addEventListener('click', () =>{
    form.classList.add('form__next');
    progress_complete.classList.add('progress-next')
  })
  prev.addEventListener('click', () =>{
    form.classList.remove('form__next');
    progress_complete.classList.remove('progress-next');
  })
  function hideContent(){
    service_article.forEach(item => {
      item.classList.remove('service_active');

    })
    service_article__h.forEach(item => {
      item.classList.remove('active_h'),
      item.classList.add('active_not');
    })
  }
  
  function showContent(i = 0){
    // service_article.forEach(item => {
    //   item.classList.add('service_active');

    // })
    // service_article__h.forEach(item => {
    //   item.classList.add('active_h'),
    //   item.classList.remove('active_not');
    // })
    service_article[i].classList.add("service_active");
    service_article__h[i].classList.add("active_h");
    service_article__h[i].classList.remove("active_not");
  }
  
  hideContent();
  showContent();


   service_article.forEach((item, i) =>{
     item.addEventListener('click', (event) =>{
         hideContent();
         showContent(i);
     })
   })

      // service_article.addEventListener('click', (event) =>{
      //   const target = event.target;
      //   service_article.forEach((item, i) =>{
      //     if (target == item) {
      //       hideContent();
      //       showContent(i);
            
      //     }
      //   })
      // })



  // service_article.addEventListener('click', (event) => {
  //   const target = event.target;

  //   if(target && target.classList.contains('service_article')){
  //     service_article.forEach(( item, i) =>{
  //       if (target == item) {
  //         hideContent();
  //         showContent(i);
          
  //       };
  //     });
  //   };
  // });
  service_landing.addEventListener('click',(event) =>{
    servise_landing__slider.classList.add('order-1');  
    servise_landing__slider.classList.remove('order-3');
    servise_landing__slider.classList.remove('order-4');
    servise_store__slider.classList.add('order-2');   
    servise_store2__slider.classList.add('order-3'); 
    servise_corporate__slider.classList.add('order-4');

   
    servise_landing__slider.classList.add('z-index-4');
    servise_landing__slider.classList.remove('z-index-2');
    servise_landing__slider.classList.remove('z-index-1');
    servise_store__slider.classList.add('z-index-3');
    servise_store__slider.classList.remove('z-index-4');   
    servise_store2__slider.classList.add('z-index-2');
    servise_store2__slider.classList.remove('z-index-3'); 
    servise_corporate__slider.classList.add('z-index-1');
    servise_corporate__slider.classList.add('z-index-1');
  })
  service_store.addEventListener('click',(event) =>{
    servise_landing__slider.classList.add('order-3');
    servise_landing__slider.classList.remove('order-1');
    servise_landing__slider.classList.remove('order-4');
    servise_store__slider.classList.add('order-1');
    servise_store__slider.classList.remove('order-2');
    servise_store2__slider.classList.add('order-2');
    servise_store2__slider.classList.remove('order-3');
    servise_corporate__slider.classList.add('order-4');

    servise_landing__slider.classList.add('z-index-2');
    servise_landing__slider.classList.remove('z-index-4');
    servise_landing__slider.classList.remove('z-index-1');
    servise_store__slider.classList.add('z-index-4');
    servise_store__slider.classList.remove('z-index-3');
    servise_store2__slider.classList.add('z-index-3');
    servise_store2__slider.classList.remove('z-index-2');
    servise_corporate__slider.classList.add('z-index-1') ;

  })
  service_corporate.addEventListener('click',(event) =>{
    servise_landing__slider.classList.add('order-4');
    servise_landing__slider.classList.remove('order-3');
    servise_landing__slider.classList.remove('order-1');
    servise_store__slider.classList.add('order-2');
    servise_store__slider.classList.remove('order-1');
    servise_store2__slider.classList.add('order-3');
    servise_store2__slider.classList.remove('order-2');
    servise_corporate__slider.classList.add('order-1');
    servise_corporate__slider.classList.remove('order-4');

    servise_landing__slider.classList.add('z-index-1') ;
    servise_landing__slider.classList.remove('z-index-2');
    servise_landing__slider.classList.remove('z-index-4');
    servise_store__slider.classList.add('z-index-3') ;
    servise_store__slider.classList.remove('z-index-4');
    servise_store2__slider.classList.add('z-index-2');
    servise_store2__slider.classList.remove('z-index-3');
    servise_corporate__slider.classList.add('z-index-4');
    servise_corporate__slider.classList.remove('z-index-1');

  })

  partfolio_slide_1.addEventListener('click',(event)=>{
    partfolio_slide_1.classList.add('partfolio_order-1'),
    partfolio_slide_1.classList.remove('partfolio_order-5'),
    partfolio_slide_1.classList.remove('partfolio_order-4'),
    partfolio_slide_1.classList.remove('partfolio_order-3'),
    partfolio_slide_1.classList.remove('partfolio_order-2'),
    partfolio_slide_2.classList.add('partfolio_order-2'),
    partfolio_slide_2.classList.remove('partfolio_order-1'),
    partfolio_slide_2.classList.remove('partfolio_order-3'),
    partfolio_slide_2.classList.remove('partfolio_order-4'),
    partfolio_slide_2.classList.remove('partfolio_order-5'),
    partfolio_slide_3.classList.add('partfolio_order-3'),
    partfolio_slide_3.classList.remove('partfolio_order-5'),
    partfolio_slide_3.classList.remove('partfolio_order-4'),
    partfolio_slide_3.classList.remove('partfolio_order-2'),
    partfolio_slide_3.classList.remove('partfolio_order-1'),
    partfolio_slide_4.classList.add('partfolio_order-4'),
    partfolio_slide_4.classList.remove('partfolio_order-5'),
    partfolio_slide_4.classList.remove('partfolio_order-3'),
    partfolio_slide_4.classList.remove('partfolio_order-2'),
    partfolio_slide_4.classList.remove('partfolio_order-1'),
    partfolio_slide_5.classList.add('partfolio_order-5'),
    partfolio_slide_5.classList.remove('partfolio_order-1'),
    partfolio_slide_5.classList.remove('partfolio_order-2'),
    partfolio_slide_5.classList.remove('partfolio_order-3'),
    partfolio_slide_5.classList.remove('partfolio_order-4');
  });
  partfolio_slide_2.addEventListener('click',(event)=>{
    partfolio_slide_1.classList.add('partfolio_order-5'),
    partfolio_slide_1.classList.remove('partfolio_order-4'),
    partfolio_slide_1.classList.remove('partfolio_order-3'),
    partfolio_slide_1.classList.remove('partfolio_order-1'),
    partfolio_slide_1.classList.remove('partfolio_order-2'),
    partfolio_slide_2.classList.add('partfolio_order-1'),
    partfolio_slide_2.classList.remove('partfolio_order-2'),
    partfolio_slide_2.classList.remove('partfolio_order-3'),
    partfolio_slide_2.classList.remove('partfolio_order-4'),
    partfolio_slide_2.classList.remove('partfolio_order-5'),
    partfolio_slide_3.classList.add('partfolio_order-2'),
    partfolio_slide_3.classList.remove('partfolio_order-3'),
    partfolio_slide_3.classList.remove('partfolio_order-4'),
    partfolio_slide_3.classList.remove('partfolio_order-5'),
    partfolio_slide_3.classList.remove('partfolio_order-1'),
    partfolio_slide_4.classList.add('partfolio_order-3'),
    partfolio_slide_4.classList.remove('partfolio_order-5'),
    partfolio_slide_4.classList.remove('partfolio_order-4'),
    partfolio_slide_4.classList.remove('partfolio_order-2'),
    partfolio_slide_4.classList.remove('partfolio_order-1'),
    partfolio_slide_5.classList.add('partfolio_order-4'),
    partfolio_slide_5.classList.remove('partfolio_order-1'),
    partfolio_slide_5.classList.remove('partfolio_order-2'),
    partfolio_slide_5.classList.remove('partfolio_order-3'),
    partfolio_slide_5.classList.remove('partfolio_order-5');
  });
  partfolio_slide_3.addEventListener('click',(event)=>{
    partfolio_slide_1.classList.add('partfolio_order-4'),
    partfolio_slide_1.classList.remove('partfolio_order-1'),
    partfolio_slide_1.classList.remove('partfolio_order-2'),
    partfolio_slide_1.classList.remove('partfolio_order-3'),
    partfolio_slide_1.classList.remove('partfolio_order-5'),
    partfolio_slide_2.classList.add('partfolio_order-5'),
    partfolio_slide_2.classList.remove('partfolio_order-4'),
    partfolio_slide_2.classList.remove('partfolio_order-3'),
    partfolio_slide_2.classList.remove('partfolio_order-2'),
    partfolio_slide_2.classList.remove('partfolio_order-1'),
    partfolio_slide_3.classList.add('partfolio_order-1'),
    partfolio_slide_3.classList.remove('partfolio_order-5'),
    partfolio_slide_3.classList.remove('partfolio_order-4'),
    partfolio_slide_3.classList.remove('partfolio_order-3'),
    partfolio_slide_3.classList.remove('partfolio_order-2'),
    partfolio_slide_4.classList.add('partfolio_order-2'),
    partfolio_slide_4.classList.remove('partfolio_order-5'),
    partfolio_slide_4.classList.remove('partfolio_order-4'),
    partfolio_slide_4.classList.remove('partfolio_order-3'),
    partfolio_slide_4.classList.remove('partfolio_order-1'),
    partfolio_slide_5.classList.add('partfolio_order-3'),
    partfolio_slide_5.classList.remove('partfolio_order-5'),
    partfolio_slide_5.classList.remove('partfolio_order-4'),
    partfolio_slide_5.classList.remove('partfolio_order-2'),
    partfolio_slide_5.classList.remove('partfolio_order-1');
  });
  partfolio_slide_4.addEventListener('click',(event)=>{
    partfolio_slide_1.classList.add('partfolio_order-3'),
    partfolio_slide_1.classList.remove('partfolio_order-1'),
    partfolio_slide_1.classList.remove('partfolio_order-2'),
    partfolio_slide_1.classList.remove('partfolio_order-4'),
    partfolio_slide_1.classList.remove('partfolio_order-5'),
    partfolio_slide_2.classList.add('partfolio_order-4'),
    partfolio_slide_2.classList.remove('partfolio_order-3'),
    partfolio_slide_2.classList.remove('partfolio_order-2'),
    partfolio_slide_2.classList.remove('partfolio_order-1'),
    partfolio_slide_2.classList.remove('partfolio_order-5'),
    partfolio_slide_3.classList.add('partfolio_order-5'),
    partfolio_slide_3.classList.remove('partfolio_order-4'),
    partfolio_slide_3.classList.remove('partfolio_order-3'),
    partfolio_slide_3.classList.remove('partfolio_order-1'),
    partfolio_slide_3.classList.remove('partfolio_order-2'),
    partfolio_slide_4.classList.add('partfolio_order-1'),
    partfolio_slide_4.classList.remove('partfolio_order-4'),
    partfolio_slide_4.classList.remove('partfolio_order-5'),
    partfolio_slide_4.classList.remove('partfolio_order-2'),
    partfolio_slide_4.classList.remove('partfolio_order-3'),
    partfolio_slide_5.classList.add('partfolio_order-2'),
    partfolio_slide_5.classList.remove('partfolio_order-5'),
    partfolio_slide_5.classList.remove('partfolio_order-1'),
    partfolio_slide_5.classList.remove('partfolio_order-3'),
    partfolio_slide_5.classList.remove('partfolio_order-4');
  });
  partfolio_slide_5.addEventListener('click',(event)=>{
    partfolio_slide_1.classList.add('partfolio_order-2'),
    partfolio_slide_1.classList.remove('partfolio_order-1'),
    partfolio_slide_1.classList.remove('partfolio_order-3'),
    partfolio_slide_1.classList.remove('partfolio_order-4'),
    partfolio_slide_1.classList.remove('partfolio_order-5'),
    partfolio_slide_2.classList.add('partfolio_order-3'),
    partfolio_slide_2.classList.remove('partfolio_order-1'),
    partfolio_slide_2.classList.remove('partfolio_order-2'),
    partfolio_slide_2.classList.remove('partfolio_order-4'),
    partfolio_slide_2.classList.remove('partfolio_order-5'),
    partfolio_slide_3.classList.add('partfolio_order-4'),
    partfolio_slide_3.classList.remove('partfolio_order-1'),
    partfolio_slide_3.classList.remove('partfolio_order-2'),
    partfolio_slide_3.classList.remove('partfolio_order-3'),
    partfolio_slide_3.classList.remove('partfolio_order-5'),
    partfolio_slide_4.classList.add('partfolio_order-5'),
    partfolio_slide_4.classList.remove('partfolio_order-4'),
    partfolio_slide_4.classList.remove('partfolio_order-1'),
    partfolio_slide_4.classList.remove('partfolio_order-2'),
    partfolio_slide_4.classList.remove('partfolio_order-3'),
    partfolio_slide_5.classList.add('partfolio_order-1'),
    partfolio_slide_5.classList.remove('partfolio_order-5'),
    partfolio_slide_5.classList.remove('partfolio_order-2'),
    partfolio_slide_5.classList.remove('partfolio_order-3'),
    partfolio_slide_5.classList.remove('partfolio_order-4');
  });
  burger_menu.addEventListener("click",(event)=>{
    popup.style.transform ="translate(0,-110%)";
    popup.classList.add("open");  
    // burger_menu.style.display = "none"
    // burger_menu.style.zIndex = "none"
    setTimeout( () => popup.style.transform ="translate(0,0)",100)
    event.preventDefault();
  })
  popup__close.addEventListener("click", (event) =>{
    popup.style.transform ="translate(0,-110%)";
   
   
    setTimeout( () => popup.classList.remove("open"),1000)
    // setTimeout( () => burger_menu.style.display = "block",700)
    // popup.classList.remove("open");  
    event.preventDefault();
  });

  popup__close_nav.forEach(item =>{
    item.addEventListener("click", (event) =>{
      popup.style.transform ="translate(0,-110%)";
     
     
      setTimeout( () => popup.classList.remove("open"),800)
      // setTimeout( () => burger_menu.style.display = "block",700)
      // popup.classList.remove("open");  
      // event.preventDefault();
    });

  
  })











  // Form
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);
    async function formSend(e) {
      e.preventDefault();
      let error = formValidate(form);
      let formData = new FormData(form);

      if (error === 0) {
        form.classList.add('_sending');

        let response = await fetch('sendmail.php',{
          method:'POST',
          body: formData
        });

        if (response.ok) {
          let result = await response.json();
          alert(result.message);
          form.reset();
          form.classList.remove('_sending');
        }else{
          alert("Ошибка");
          form.classList.remove('_sending');
        }

      }else{
        alert('Oshibka')
      }
    }

    function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll('._req');
      for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);
        if(input.classList.contains('_email')){
          if (emailTest(input)) {
            formAddError(input);
            error++;
            }
          }else{
            if (input.value === '') {
              formAddError(input);
              error++;
            }
        }
      }
      return error;
    }

    function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
    };
    function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
    };

    function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }









});

window.addEventListener('load',  () => {
  const preloaders = document.getElementById('preloader');
setTimeout(function(){preloaders.classList.add('hide')},1000)
setTimeout(function(){preloaders.style.display = "none"},1500)
});




