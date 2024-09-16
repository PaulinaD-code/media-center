const resourcesButton = document.getElementById('res-nav-el')
let anchorContainerResource = document.querySelector('.js-resources--container');

resourcesButton.addEventListener('click', ()=>{

  if(anchorContainerResource.className === "resources--container js-resources--container"){
    anchorContainerResource.className = "resources--container js-resources--container resources--container-active"
  }else if(anchorContainerResource.className === "resources--container js-resources--container resources--container-active") {
    anchorContainerResource.className = "resources--container js-resources--container"
  }
})


