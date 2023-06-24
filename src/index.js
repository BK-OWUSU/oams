import './styles/index.css';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App/>,document.querySelector('#root'));

//Nav Bar change color on Scroll
window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('nav-scroll', window.scrollY > 1000);
});
  
//automatic slider
let message_1 = "Welcome to our school where the education of your ward is our number one prioprity!!! Its another Day to learn new things as you move closer to your dreams.";
let message_2 = "We are ready for you! We hope you are ready for us! Let us begin with partnering our way through new discoveries in education";
let message_3 = "We want you to know that we are here to help you persue your dreams. Bring on your Best."; 
let message_4 = "We are so glad that you are here. Let us move forward with a mission to achieve a new thought process that helps you emerge brand new"; 



let counter = 1;

setInterval(function(){
    var header_info = document.querySelector('.header_info'); 
    document.getElementById('radio' + counter).checked = true; 
    counter++;
        
     switch (counter) {
      case 1:
              if (header_info.classList.contains('unfade')) {
                    header_info.classList.remove('unfade');
                  } else {
                    header_info.classList.add('unfade');
                    header_info.innerHTML = message_1; 
                  }
        break;
      case 2:
              if (header_info.classList.contains('unfade')) {
                    header_info.classList.remove('unfade');
                  } else {
                    header_info.classList.add('unfade');
                    header_info.innerHTML = message_2; 
                  } 
        break;
      case 3:
              if (header_info.classList.contains('unfade')) {
                    header_info.classList.remove('unfade');
                  } else {
                    header_info.classList.add('unfade');
                    header_info.innerHTML = message_3; 
                  }
        break;
        case 4:
              if (header_info.classList.contains('unfade')) {
                    header_info.classList.remove('unfade');
                  } else {
                  header_info.classList.add('unfade');
                  header_info.innerHTML = message_4; 
                  }
          
    }
    
    if (counter > 4) {
      counter =1;
   }

},12000);
//End

//Intersection Observer
const all_sectionTowHeaders = document.querySelectorAll("h2");
const all_sectionOneHeaders = document.querySelectorAll("h1");
const all_Ptags = document.querySelectorAll('p');
const all_articles = document.querySelectorAll('article');
const all_divs = document.querySelectorAll('div');

const fadersObserver = new IntersectionObserver((entries,fadersObserver)=>{
  entries.forEach((entry) =>{
      if (!entry.isIntersecting){
        entry.target.classList.remove('appear');
      } else {
       entry.target.classList.add('appear');
       console.log(entry.target);
      }
  });
},
{
  threshold: 0,
  rootMargin:'0px 0px -220px 0px',
});

all_sectionTowHeaders.forEach((header_two)=>{
  fadersObserver.observe(header_two);
});

all_sectionOneHeaders.forEach((header_one)=>{
  fadersObserver.observe(header_one);
});

all_Ptags.forEach((P_tag)=>{
  fadersObserver.observe(P_tag);
});

all_articles.forEach((all_article)=>{
  fadersObserver.observe(all_article);
});

all_divs.forEach((all_div)=>{
  fadersObserver.observe(all_div);
});

//End
