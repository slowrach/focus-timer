import state from "./state.js";
import * as timer from './timer.js'
import * as elements from './controls.js'
import * as sounds from './sound.js'

export function running() {
   state.isRunning = document.documentElement.classList.toggle('run')

   timer.countdown()
   sounds.buttonPress.play()
}

export function setTimer() {
   elements.minutes.setAttribute('contenteditable', true)
   elements.minutes.focus()
}

export function stop() {
   state.isRunning = false
   document.documentElement.classList.remove('run')
   timer.updateTime()
   sounds.buttonPress.play()
}

export function song() {
   state.isMute = document.documentElement.classList.toggle('sound-on')

   if(state.isMute) {
      sounds.bgAudio.play()
      return
   }

   sounds.bgAudio.pause()
}