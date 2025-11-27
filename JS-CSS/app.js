// Scroll to contact
document.getElementById("hireBtn").addEventListener("click", ()=>window.location.href="#contact");

// Tilt effect for 3D cards
const tiltCards = document.querySelectorAll('.tilt');
tiltCards.forEach(card=>{
    card.addEventListener('mousemove', e=>{
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width/2;
        const centerY = rect.height/2;
        const rotateX = ((y-centerY)/centerY)*12;
        const rotateY = ((x-centerX)/centerX)*-12;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    card.addEventListener('mouseleave', ()=> card.style.transform = 'rotateX(0) rotateY(0) scale(1)');
});

// Fade-in sections
const fadeSections = document.querySelectorAll('.fade-section');
function reveal(){ fadeSections.forEach(sec=>{ if(sec.getBoundingClientRect().top < window.innerHeight-100) sec.classList.add('show'); }) }
window.addEventListener('scroll',reveal); reveal();

// Dark/Light toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode');
    themeBtn.innerHTML = document.body.classList.contains('dark-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});
