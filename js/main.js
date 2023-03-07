// capturer tous les éléments

var inputName = document.querySelector('.name');
var inputAvatar = document.querySelector('.avatar');
var bouton = document.querySelector('button')

var main = document.querySelector('main');
var boxPicture = document.querySelector('.picture');
var boxName = document.querySelector('.textUser');

var edit = document.querySelector('i');
var profile = document.querySelector('.profile');
var wrapper = document.querySelector('.wrapper')

// création d'une fontion pour réinjecter 

function injection() {
    boxPicture.innerHTML = 
    `<img src="${localStorage.getItem('photo')}" alt="">`;
   
    boxName.innerHTML = 
    `<p>Voici votre profil,<br> <strong>${localStorage.getItem('nom')}</strong></p>
    `;

}

// click + setItem+get+inner(value)

bouton.addEventListener('click', (e) => {
    localStorage.setItem('nom', inputName.value);
    localStorage.setItem('photo', inputAvatar.value);

    localStorage.getItem('nom');
    localStorage.getItem('photo');

    console.log(inputName.value);

    injection();

    profile.classList.toggle('active');

    wrapper.classList.toggle('active-wrapper')

});

// fonction en dehors du click pour avoir les datas quand je recharge ou ferme l'onglet

injection();

// click sur edit : je retire mes actives

edit.addEventListener('click', (e) => {
    profile.classList.toggle('active');
    wrapper.classList.toggle('active-wrapper'); 

    inputName.value = localStorage.getItem('nom')
    inputAvatar.value = localStorage.getItem('photo')
});

function load(){
    window.addEventListener('load', (e) => {
        var completedName = localStorage.getItem('nom');
        var completedAvatar = localStorage.getItem('photo');
        if(completedName && completedAvatar != ""){
            profile.classList.add('active')
            wrapper.classList.add('active-wrapper')
           
        } 
    });
}

load()


// valeurs des inputs précédents voir dans l'event edit : rechercher les valeurs des inputs









