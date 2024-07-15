import { controls } from './controls.js';
import * as actions from './actions.js'
import * as elements from './controls.js'
import state from './state.js'
import { updateTime } from './timer.js'

export function registerControls() {
   controls.addEventListener('click', (event) => {
      const action = event.target.dataset.action
      if (typeof actions[action] != "function") {
         return
      }

      actions[action]()
   })
}

export function setMinutes() {
   elements.minutes.onkeypress = (event) => /\d/.test(event.key)

   elements.minutes.addEventListener('blur', (event) => {
      let minute = event.currentTarget.textContent
      minute = minute > 60 ? 60 : minute

      state.minutes = minute

      updateTime()
      elements.minutes.removeAttribute('contenteditable')
   })
}

export function setSeconds() {
   elements.seconds.onkeypress = (event) => /\d/.test(event.key)

   elements.seconds.addEventListener('blur', (event) => {
      let second = event.currentTarget.textContent
      second = second > 60 ? 59 : second

      state.seconds = second

      updateTime()
      elements.seconds.removeAttribute('contenteditable')
   })
}