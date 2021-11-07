// For Live Projects
window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded")  
  });


// nav bar********************************

const show_mobile_nav_btn = document.querySelector('.mobile_nav_btn');
const hide_mobile_nav = document.querySelector('.close_mobile_nav');


// mobile nav bar
const main_div_for_mobile_nav = document.querySelector('.main_div_for_mobile_nav');

function hideElement(element) {
  element.style.visibility = 'hidden';
}

const showElement = (element)=>{
  element.style.visibility = 'visible';
}

show_mobile_nav_btn.onclick = () =>{
  showElement(main_div_for_mobile_nav);
}

hide_mobile_nav.onclick = () =>{
  hideElement(main_div_for_mobile_nav);
}


// collapsible faqs_and support section


var collapsible_buttons = document.querySelectorAll('.fq_sprt_1');

var  show_hidden_content = document.querySelectorAll('.faq_q_spprt_div_1');


var current_pos=0;

function show_content(element) {
  element.style.height = '120px';
  element.style.borderLeft = '1px solid #3381ff';
  element.style.borderRight = '1px solid #3381ff';
  element.style.borderBottom = '1px solid #3381ff';
  element.style.transition = '1s';
  element.classList.remove('hidden_faqs_btn');
  element.classList.add('visible_faqs_btn');
  setTimeout(function(){
    element.style.overflow = 'visible';
  }, 1000);
}

function  hide_content(element) {
  element.style.height = '40px';
  element.style.transition = '1s';
  element.style.overflow = 'hidden';
  element.classList.remove('visible_faqs_btn');
  element.classList.add('hidden_faqs_btn');
  setTimeout(function(){
    element.style.borderLeft = 'none';
    element.style.borderRight = 'none';
    element.style.borderBottom = 'none';
  }, 1000);
}


for (let i = 0; i<collapsible_buttons.length; i++) {
  collapsible_buttons[i].addEventListener('click', function() {
    // console.log(show_hidden_content[i].children[0
    if (collapsible_buttons[i] === show_hidden_content[i].children[0] && collapsible_buttons[i].parentElement.classList.contains('hidden_faqs_btn')) {
      show_content(collapsible_buttons[i].parentElement);
      for (let j=0; j<collapsible_buttons.length; j++) {
        if (collapsible_buttons[i] !== collapsible_buttons[j]) {
          hide_content(collapsible_buttons[j].parentElement);
        }
      }
      console.log(1);
    }else {
      hide_content(collapsible_buttons[i].parentElement);
      console.log(2);
    }

  });
}

// collapsible faqs_and support section ends



// login register
// const 
// ends login register
