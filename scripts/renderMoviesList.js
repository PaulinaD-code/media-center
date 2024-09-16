import { augustMovies } from "./data/dataMoviesJS/august23.js";
import { monthGroup } from "./dateJS.js";

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


