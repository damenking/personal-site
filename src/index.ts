import './style.css';
import Photo from '../assets/images/professional_photo.jpg';
import printMe from './print';


function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = 'Hello webpack!!?';
  element.classList.add('hello');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  const myPhoto = new Image();
  myPhoto.src = Photo;

  element.appendChild(myPhoto);

  return element;
}

document.body.appendChild(component());