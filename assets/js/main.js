// import 
// import
/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header")

function toggleSkills(){
    // console.log(this)
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'        
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el)=>{
    // console.log(el)
    el.addEventListener("click",toggleSkills)
})

/*==================== SERVICES MODAL  ====================*/
const modalView = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalView[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtns,i)=>{
    modalBtns.addEventListener('click',() =>{
        modal(i)
    })
})

modalClose.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modalView.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTAFOLIO MODAL ====================*/
const modalViewP = document.querySelectorAll('.portafolio__modal'),
    modalBtnsP = document.querySelectorAll('.portafolio__button'),
    modalCloseP = document.querySelectorAll('.portafolio__modal-close')

let modalP = function(modalClick){
    console.log(modalClick);
    document.getElementById(modalClick).classList.add('active-modal')
    // modalViewP[modalClick].classList.add('active-modal')
}

modalBtnsP.forEach((modalBtnsP,i)=>{
    console.log(modalBtnsP.dataset.id)
    modalBtnsP.addEventListener('click',() =>{
        modalP(modalBtnsP.dataset.id)
    })
})

modalCloseP.forEach((modalCloseP)=>{
    modalCloseP.addEventListener('click',()=>{
        modalViewP.forEach((modalViewP)=>{
            // console.log(modalViewP)
            modalViewP.classList.remove('active-modal')
        })
    })
})

/*==================== SWIPER DISCOVER ====================*/
var swiper = new Swiper(".portafolio__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 20,
        // stretch: 0,
        // depth: 100,
        // modifier: 1,
        // slideShadows: true,
    },
    // pagination: {
    //     el: ".swiper-pagination",
    // },
});



/*==================== CONTACTO  ====================*/
const Formulario = document.getElementById("contact-form")
const formBtn = document.getElementById("form-btn")
const mailBtn = document.getElementById("btn-mail")

formBtn.addEventListener('click', handleSubmit)

function handleSubmit(event){
    // event.preventDefault();
    for (const el of Formulario.querySelectorAll("[required]")) {
        if (!el.reportValidity()) {
          return;
        }
    }

    const form = new FormData(document.getElementById("contact-form"))
    console.log(form.get("name"))
    mailBtn.setAttribute('href',`mailto:eduardojmz.dev@gmail.com?subject=Contacto Portafolio&body=
    Nombre:${form.get('name')} 
    Email:${form.get('email')}
    Mensaje:${form.get('message')}`)
    mailBtn.click()
}


/*==================== IDIOMA ====================*/
// const check  = document.querySelector(".footer__link")
// check.addEventListener('click', idioma)

function idioma(){
    let id = check.checked
    if (id==true) {
        location.href="index.html"
    }else{
        location.href="es/index.html"
    }
}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')

    if (this.scrollY >= 80) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/ 


const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 500,
    reset: true
});

sr.reveal(`.home__img, .home__social, .home__data, .about, .qualification, .skills, .services, .portfolio, .contact`, { delay: 150 });


// ===================== THREEE JS ======================
const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set( 0, 0, 10);
// camera.lookAt( 0, 0, 1 );s

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(200,370);
// renderer.setDisplay('inline');


document.getElementById("home__back").appendChild( renderer.domElement );
// renderer.domElement.classList.add('three__canvas');
renderer.domElement.style.display= 'inline';

const geometry_hex = new THREE.CircleGeometry(2,6,90* (Math.PI/180));

const matfoto = new THREE.MeshBasicMaterial( {map:THREE.ImageUtils.loadTexture('assets/img/logo_fondo.jpg')} );
const matcolor = new THREE.MeshBasicMaterial( { color: 0xff6524 } );
const matcolor2 = new THREE.MeshBasicMaterial( { color: 0x060504 } );

const cube = new THREE.Mesh( geometry_hex, matfoto );
const cube2 = new THREE.Mesh( geometry_hex, matfoto );

const geometry_plane = new THREE.PlaneGeometry( 10, 15 );
const plane = new THREE.Mesh( geometry_plane, matcolor2 );
plane.position.z = -4;
scene.add( plane );

scene.add( cube );
cube2.rotation.y = 180 * (Math.PI/180);
scene.add( cube2 );


const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
// light.position.set(0, 0, 10000000);
// Specify the light's position
light.position.set(1, 1, 1000);
scene.add(light);



function animate() {
    requestAnimationFrame( animate );

    cube.rotation.y += 0.01;
    cube2.rotation.y += 0.01;


    renderer.render( scene, camera );
    
};
animate();


// OVERLAY

TweenMax.to(".overlay__tag", 1.5, {
    delay: .1,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.to(".first, .second, .third, .four", 1.5, {
    delay: .3,
    // left: "100%",
    width: "0%",
    ease: Expo.easeInOut
});

TweenMax.to(".overlay__separator", 1.5, {
    delay: 1,
    visibility:"hidden",
    ease: Expo.easeInOut
});
