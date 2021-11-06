const imgs = document.querySelectorAll('.cont-slides a');
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
const cercles = document.querySelectorAll('.cercles button');
let index = 0;

suivant.addEventListener('click', slideSuivante);

function slideSuivante(){

    if(index < imgs.length-1){
        console.log(index);
        imgs[index].classList.remove('active');
        imgs[index].classList.add('disable');
        cercles[index].classList.remove('active-circle')
        index++;
        imgs[index].classList.add('active','disable');
        imgs[index].classList.remove('disable');
        cercles[index].classList.add('active-circle')
        console.log(cercles[index]);
    }
    else if (index === imgs.length-1) {

        imgs[index].classList.remove('active');
        imgs[index].classList.add('disable');
        cercles[index].classList.remove('active-circle')
        index = 0;
        imgs[index].classList.add('active','disable');
        imgs[index].classList.remove('disable');
        cercles[index].classList.add('active-circle')

    }

    for(i = 0; i < cercles.length; i++){

        if(cercles[i].getAttribute('data-clic') - 1 === index){
            cercles[i].classList.add('active-cercle');
        } else {
            cercles[i].classList.remove('active-cercle');
        }

    }

}


precedent.addEventListener('click', slidePrecedente);

function slidePrecedente(){

    if(index > 0){

        imgs[index].classList.remove('active');
        imgs[index].classList.add('disable');
        cercles[index].classList.remove('active-circle')
        index--;
        imgs[index].classList.add('active');
        imgs[index].classList.remove('disable');
        cercles[index].classList.add('active-circle');

    }
    else if (index === 0) {

        imgs[index].classList.remove('active');
        imgs[index].classList.add('disable');
        cercles[index].classList.remove('active-circle')
        index = imgs.length-1;
        imgs[index].classList.add('active');
        imgs[index].classList.remove('disable');
        cercles[index].classList.add('active-circle')

    }
    for(i = 0; i < cercles.length; i++){

        if(cercles[i].getAttribute('data-clic') - 1 === index){
            cercles[i].classList.add('active-cercle');
        } else {
            cercles[i].classList.remove('active-cercle');
        }

    }
}
