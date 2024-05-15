import { controls } from './controls.js';

export function registerControls() {
   controls.addEventListener('click', (event) => {
      console.log(event.target)
   })
}