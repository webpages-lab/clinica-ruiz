const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
const photo=document.querySelector('.photo-frame img');let ticking=false;
function update(){if(!reduced.matches && window.innerWidth>720){const y=Math.min(window.scrollY,700);photo.style.transform=`translateY(${y*.045}px)`;}ticking=false;}
window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(update);ticking=true;}},{passive:true});
