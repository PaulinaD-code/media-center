import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
/*import { julyMovies } from './data/dataMoviesJS/julyMovies.js';*/
import { augustMovies } from './data/dataMoviesJS/august23.js';
import { septemberMovies } from './data/dataMoviesJS/septemberMovies24.js';
import { octoberMovies } from './data/dataMoviesJS/octoberMovies24.js';
import { novemberMovies } from './data/dataMoviesJS/novemberMovies24.js';
import { 
  renderMovies,
 } from './renderMoviesList.js';
 import { 
  renderFirst20Movies,
  renderCountLeft
 } from './renderFirst20Movies.js';
import { selectButton } from './selectOffer.js';
import { checkContentVariety } from './renderButtons.js';
import { decemberMovies } from './data/dataMoviesJS/decemberMovies.js';

const today = dayjs();
const todaysMonth = today.format(' MMMM ');
const monthBefore = today.subtract(1, 'month').format('MMMM')
const inOneMonth = today.add(1, 'month').format('MMMM');
const inTwoMonths = today.add(2, 'month').format('MMMM');
const inThreeMonths = today.add(3, 'month').format('MMMM');

export let monthGroup = [
  {
    id: '0',
    name: monthBefore,
    array: augustMovies
  }, 
  {
    id: '1',
    name: todaysMonth,
    array: septemberMovies
  }, 
  {
    id: '2',
    name: inOneMonth,
    array: octoberMovies

  },
   {
    id: '3',
    name: inTwoMonths,
    array: novemberMovies
  }, 
  {
    id: '4',
    name: inThreeMonths,
    array: decemberMovies
  },
]

document.querySelector('.js-selected-month-name').innerHTML = todaysMonth;

function renderOffers(){
  let html = '';
  monthGroup.forEach((month)=>{
    html += `
      <div class="month-variety-subcontainer js-month-variety"
      data-month-id="${month.id}">
        <div class="checked-icon-container">
          <img src="/img/icons8-checked.svg" class="variety-invisible">
        </div>
        ${month.name}
      </div>
    `
    document.querySelector('.js--month-varieties').innerHTML = html;

    document.querySelectorAll('.js-month-variety')
      .forEach((monthVariety)=>{
        monthVariety.addEventListener('click', ()=>{
          const monthId = monthVariety.dataset.monthId;
          const matchingMonth =  findFilmId(monthId);
          checkContentVariety(matchingMonth.array);
          selectButton(matchingMonth.array)
          renderCountLeft(matchingMonth.array)
          document.querySelector('.js-selected-month-name').innerHTML = matchingMonth.name;
          document.querySelector('.js--month-varieties').innerHTML = '';
        })
      })
  })
}
renderCountLeft(septemberMovies);

function findFilmId(filmId){
  let matchingMonth;
  monthGroup.forEach((element)=>{
    if(element.id === filmId){
      matchingMonth = element;    
    }
  })
 return matchingMonth;
}

document.querySelector('.js-month-name').addEventListener('click', ()=>{
  renderOffers() 
})

export function findIndex(array){
  let matchingItem;
  let count = 0;
  for(let i = 0; i < monthGroup.length; i++){
    count++;
    let element = monthGroup[i];
    if(element.array === array){
      matchingItem = element;
      break;
    }
  }
  return count-1;
}

window.addEventListener('click', (event) => {
  if(event.target.className === "month--name js-month-name" ||
    event.target.className === "research--title-month js-research-month" ||
    event.target.className === "month--name js-month-name" ||
    event.target.className === "selected-month-name js-selected-month-name" ||
    event.target.className === "selected-arrow-icon"
  ){
    renderOffers()
  }else {
    document.querySelector('.js--month-varieties').innerHTML = ''
  }
})







