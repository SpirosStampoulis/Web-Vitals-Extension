import {getTTFB, getLCP, getFID, getCLS, getFCP} from 'web-vitals';

const infoDiv = document.createElement('div');
infoDiv.style.position = 'fixed';
infoDiv.style.left = '0';
infoDiv.style.top = '0';
infoDiv.style.zIndex = '0';
infoDiv.style.backgroundColor = 'black';
infoDiv.style.position = 'white';
infoDiv.style.position = '1rem';
infoDiv.style.fontFamily = 'Arial';
document.body.appendChild(infoDiv);

getTTFB(console.log);
getLCP(console.log);
getFID(console.log);
getFCP(console.log);
getCLS(console.log);
