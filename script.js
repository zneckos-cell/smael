document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

const form = document.querySelector('#project-form');
if (form) {
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const message = document.querySelector('#message');
    const status = document.querySelector('#form-status');
    if (!message.value.trim()) {
      status.textContent = 'Skriv en kort beskrivning först.';
      message.focus();
      return;
    }
    const text = `${document.querySelector('#topic').value}\n\n${message.value.trim()}`;
    try {
      await navigator.clipboard.writeText(text);
      status.textContent = 'Kopierat! Klistra in beskrivningen i ett sms eller mejl.';
    } catch {
      message.focus();
      message.select();
      status.textContent = 'Automatisk kopiering är inte tillgänglig. Texten är markerad – kopiera den själv.';
    }
  });
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('visible'));
}
