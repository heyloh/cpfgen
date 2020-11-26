import GenerateCPF from './modules/GenerateCPF';

import './assets/css/style.css';

document.addEventListener('click', (e) => {
  const el = e.target;

  if (!el.classList.contains('generate')) return;
  
  const generate = new GenerateCPF();
  const generatedCPF = document.querySelector('.generated-cpf');

  generatedCPF.innerHTML = generate.generateNewCPF();
});