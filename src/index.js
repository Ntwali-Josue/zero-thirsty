import './style.css';
import logo from './logo.PNG';

const root = document.querySelector('.root');
const header = document.createElement('header');

header.innerHTML = `<nav class="nav">
<img src="${logo}" alt="logo image">
<ul class="nav-list">
  <li>Restaurents(6)</li>
  <li>About</li>
  <li>Contacts</li>
</ul>
</nav>`;

root.appendChild(header);