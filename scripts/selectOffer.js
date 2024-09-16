import {augustMovies} from './data/dataMoviesJS/august23.js';
import { renderMovies } from "./renderMoviesList.js";
import { selectionButtons } from "./data/changingButtons.js";
import { renderFirst20Movies } from "./renderFirst20Movies.js";
import { renderCountLeft } from './renderFirst20Movies.js';
import { findIndex, monthGroup } from './dateJS.js';

let films = false;
let series = false;
let documentFilm = false;
let forKids = false;
let interactive = false;
let realityTv = false;
let game = false;
let standUp = false;

export function selectOffer(array){
  let renderedMovies = [];
  let uniqueContent = [];

  if(films){
    array.forEach((content)=>{
      if(content.contentType.film){
        renderedMovies.push(content);
      }
    })}

  if(series){
    array.forEach((content)=>{
      if(content.contentType.serial){
        renderedMovies.push(content);
      }
    })}

  if(documentFilm){
    array.forEach((content)=>{
      if(content.contentType.document){
        renderedMovies.push(content);
      }
    })}

  if(forKids){
    array.forEach((content)=>{
      if(content.contentType.forKids){
        renderedMovies.push(content);
      }
    })}

  if(interactive){
    array.forEach((content)=>{
      if(content.contentType.interactive){
        renderedMovies.push(content);
      }
    })}

  if(realityTv){
    array.forEach((content)=>{
      if(content.contentType.realityTv){
        renderedMovies.push(content);
      }
    })}

  if(game){
    array.forEach((content)=>{
      if(content.contentType.game){
        renderedMovies.push(content);
      }
    })}

    if(standUp){
      array.forEach((content)=>{
        if(content.contentType.standUp){
          renderedMovies.push(content);
        }
      })
    }

  uniqueContent = uniqueArray(renderedMovies);
  renderMovies(uniqueContent);
}
  
export function uniqueArray(array) {
  var result = Array.from(new Set(array));
  return result    
}

export function changeTrueToFalseAndRewerse(element, array){
  if(element === false){
    element = true;
  }else{
    element = false;
  }
  selectOffer(array);
  return element
}

export function selectButton(exposedArray){
  let renderedMovies = [];
  let uniqueContent = [];

  if(selectionButtons[0].attribute){
    exposedArray.forEach((content)=>{
      if(content.contentType.film){
        renderedMovies.push(content);
      }
    })}

  if(selectionButtons[1].attribute){
    exposedArray.forEach((content)=>{
      if(content.contentType.serial){
        renderedMovies.push(content);
      }
    })}

  if(selectionButtons[2].attribute){
    exposedArray.forEach((content)=>{
      if(content.contentType.document){
        renderedMovies.push(content);
      }
    })}

  if(selectionButtons[3].attribute){
    exposedArray.forEach((content)=>{
      if(content.contentType.forKids){
        renderedMovies.push(content);
      }
    })}

  if(selectionButtons[4].attribute){
    exposedArray.forEach((content)=>{
      if(content.contentType.interactive){
        renderedMovies.push(content);
      }
    })}

  if(selectionButtons[5].attribute){
    exposedArray.forEach((content)=>{
      if(content.contentType.realityTv){
        renderedMovies.push(content);
      }
    })}

  if(selectionButtons[6].attribute){
    exposedArray.forEach((content)=>{
      if(content.contentType.game){
        renderedMovies.push(content);
      }
    })}

  if(selectionButtons[7].attribute){
    exposedArray.forEach((content)=>{
      if(content.contentType.standUp){
        renderedMovies.push(content);
      }
    })}

  uniqueContent = uniqueArray(renderedMovies)
 
  if(selectionButtons[0].attribute === false &&
     selectionButtons[1].attribute === false &&
     selectionButtons[2].attribute === false &&
     selectionButtons[3].attribute === false &&
     selectionButtons[4].attribute === false &&
     selectionButtons[5].attribute === false &&
     selectionButtons[6].attribute === false &&
     selectionButtons[7].attribute === false){

      renderFirst20Movies(exposedArray);
      renderCountLeft(exposedArray);

     }else{
      renderMovies(uniqueContent);

      let searchingMonth = findIndex(exposedArray);
      let nextMonth = searchingMonth + 1;
      let nextTag = monthGroup[nextMonth];
      console.log(nextTag)
      console.log(nextTag.name)
      renderCountLeft(exposedArray);
      document.querySelector('.js-show-more-btn').innerHTML = `Show ${nextTag.name} titles`;
      document.querySelector('.js-show-more-btn').addEventListener('click', ()=>{
        selectButton(nextTag.array)
        renderCountLeft(nextTag.array)
      })
     }    
}
