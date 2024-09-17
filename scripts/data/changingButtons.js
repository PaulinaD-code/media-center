export const selectionButtons = [
  {
    id: 'film',
    name: 'Film',
    icon: '../media/media--nav-btn/icons8-movie-24.png',
    attribute: false
  },
  {
    id:'serial',
    name: 'Seriale',
    icon: '../media/media--nav-btn/series.png',
    attribute: false
  },
  {
    id:'document',
    name: 'Dokument',
    icon: '../media/media--nav-btn/document.png',
    attribute: false
  },
  {
    id:'forKids',
    name: 'Dla dzieci',
    icon: '../media/media--nav-btn/group.png',
    attribute: false
  },
  {
    id:'interactive',
    name: 'Ineraktywne',
    icon: '../img/media/media--nav-btn/interactive.png',
    attribute: false
  },
  {
    id:'realityTV',
    name: 'Reality TV',
    icon: '..media/media--nav-btn/camera.png', 
    attribute: false
  },
  {
    id:'game',
    name: 'Gra',
    icon: '../media/media--nav-btn/game.png',
    attribute: false
  },
  {
    id:'standUP',
    name: 'Stand-up',
    icon: '../media/media--nav-btn/icons8-microphone-50.png',
    attribute: false
  },
]

export function findMatchingId(proposedId){
  let matchingObject;
  selectionButtons.forEach((element)=>{
    if(element.id === proposedId){
      matchingObject = element;
    }
  });
  return matchingObject
}





