import './style.css';
import logoImg from './images/logo.png';

const root = document.querySelector('.root');
const header = document.createElement('header');

header.innerHTML = `<nav class="nav">
<img src="${logoImg}" alt="logo image">
<ul class="nav-list">
  <li>CockTails(0)</li>
  <li>Alcoholic</li>
  <li>Non-alcoholic</li>
</ul>
</nav>`;

root.appendChild(header);