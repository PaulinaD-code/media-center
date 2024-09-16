import { augustMovies } from "./data/dataMoviesJS/august23.js";
import { septemberMovies } from "./data/dataMoviesJS/septemberMovies24.js";
import { monthGroup } from "./dateJS.js";
import { findIndex } from "./dateJS.js";
import { checkContentVariety } from "./renderButtons.js";

let countLeft; 

export function takeCountLeft(array, number){
  return countLeft = array.length - number
}

export function renderMovies(movies){
  let html = ''

  movies.forEach((movie)=>{
    html += `
    <div class="example">
        <a href=${movie.anchorLink} target="_blank">
          <img src=${movie.movieImg}
          class="movie--img" alt="" /> 
          <div class="explanation">${movie.premiere}</div>
        </a>
    </div> 
    `
    document.querySelector('.js-movies--container').innerHTML = html;
  })
}

renderFirst20Movies(septemberMovies);

export function renderFirst20Movies(array){
  let copiedArray = array;
  const first20Movies = copiedArray.slice(0, 20);
  renderMovies(first20Movies);
}

const show_more_content_btn = document.querySelector('.js-show-more-btn');

export function renderCountLeft(array){
  let searchingMonth = findIndex(array);
  let nextMonth = searchingMonth + 1;
  let nextTag = monthGroup[nextMonth]
  
  if(array.length <= 20){
    countLeft = array.length;
    show_more_content_btn.innerHTML = `Show ${nextTag.name} titles`;
    
    show_more_content_btn.addEventListener('click', ()=>{
      document.querySelector('.js-selected-month-name').innerHTML = monthGroup[nextMonth].name;
      renderMovies(monthGroup[nextMonth].array);
      checkContentVariety(monthGroup[nextMonth].array);
      });

  }else if(array.length > 20){
    countLeft = takeCountLeft(array, 20);
    show_more_content_btn.innerHTML = `Show ${countLeft} more`;
    
    show_more_content_btn.addEventListener('click', ()=>{
      renderMovies(array);
      show_more_content_btn.innerHTML = `Show ${nextTag.name} titles`;
      show_more_content_btn.addEventListener('click', ()=>{
        document.querySelector('.js-selected-month-name').innerHTML = monthGroup[nextMonth].name;
        checkContentVariety(nextTag.array);
        renderCountLeft(nextTag.array);
        renderFirst20Movies(nextTag.array)        
      })
      });
  }
}

