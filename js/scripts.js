// ===== MENU RESPONSIVO =====
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav ul");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuBtn.classList.toggle("open");
  });
}

// ===== ANIMAÇÃO DE SCROLL =====
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
});

// ===== BOTÃO WHATSAPP =====
document.querySelectorAll(".btn-whatsapp, .whatsapp-float, .cta-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // default placeholder: replace '5598999999999' with your number (55+DDD+number)
    const telefone = '5598999999999';
    const mensagem = encodeURIComponent('Olá! Gostaria de solicitar um orçamento 😄');
    const url = `https://wa.me/${telefone}?text=${mensagem}`;
    // let links proceed if they have href; otherwise open new
    if (!btn.getAttribute('href')) {
      window.open(url, '_blank');
    }
  });
});