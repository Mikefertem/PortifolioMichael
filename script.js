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
document.querySelectorAll(".btn-whatsapp").forEach((btn) => {
  btn.addEventListener("click", () => {
    const telefone = "5599999999999"; // 🔧 Substitua pelo seu número com DDI (ex: 55 + DDD + número)
    const mensagem = encodeURIComponent("Olá! Gostaria de solicitar um orçamento 😄");
    window.open(`https://wa.me/${telefone}?text=${mensagem}`, "_blank");
  });
});
