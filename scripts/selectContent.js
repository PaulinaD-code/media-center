import { augustMovies } from "./data/dataMovies.js/august23.js";
import { renderMovies } from "./renderMoviesList.js";

//render films

const select_films_btn = document.querySelector('.js-movie-btn');

function renderSelectedContentFilms(){
  let selectedMovies = [];
  augustMovies.forEach((content)=>{
    if(content.contentType.film){
      selectedMovies.push(content);
    }
  })
  renderMovies(selectedMovies)
}

select_films_btn.addEventListener('click', renderSelectedContentFilms)

//render serial

const select_serial_btn = document.querySelector('.js-series-btn');

function renderSelectedContentSeries(){
  let selectedMovies = [];
  augustMovies.forEach((content)=>{
    if(content.contentType.serial){
      selectedMovies.push(content);
    }
  })
  renderMovies(selectedMovies)
}

select_serial_btn.addEventListener('click', renderSelectedContentSeries)

// render documents

function renderSelectedContentDocument(){
  let selectedMovies = [];

  augustMovies.forEach((content)=>{
    if(content.contentType.document){
      selectedMovies.push(content);
    }
  })

  renderMovies(selectedMovies)
}

const select_document_btn = document.querySelector('.js-document-btn');

select_document_btn.addEventListener('click',renderSelectedContentDocument )

// render for kids

function renderSelectedContentKids(){
  let selectedMovies = [];

  augustMovies.forEach((content)=>{
    if(content.contentType.forKids){
      selectedMovies.push(content);
    }
  })

  renderMovies(selectedMovies)
}

const select_kids_btn = document.querySelector('.js-kids-btn');

select_kids_btn.addEventListener('click',renderSelectedContentKids )

// render for interactive

function renderSelectedContentInteractive(){
  let selectedMovies = [];

  augustMovies.forEach((content)=>{
    if(content.contentType.interactive){
      selectedMovies.push(content);
    }
  })

  renderMovies(selectedMovies)
}

const select_interactive_btn = document.querySelector('.js-interactive-btn');

select_interactive_btn.addEventListener('click',renderSelectedContentInteractive )

// render for realityTv

function renderSelectedContentRealityTV(){
  let selectedMovies = [];

  augustMovies.forEach((content)=>{
    if(content.contentType.realityTv){
      selectedMovies.push(content);
    }
  })

  renderMovies(selectedMovies)
}

const select_realityTV_btn = document.querySelector('.js-realityTV-btn');

select_realityTV_btn.addEventListener('click',renderSelectedContentRealityTV);

//render Games

function renderSelectedContentGames(){
  let selectedMovies = [];

  augustMovies.forEach((content)=>{
    if(content.contentType.game){
      selectedMovies.push(content);
    }
  })

  renderMovies(selectedMovies);
}

const select_game_btn = document.querySelector('.js-game-btn');

select_game_btn.addEventListener('click',renderSelectedContentGames);



