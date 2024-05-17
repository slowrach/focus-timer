import state from "./state.js"
import * as elements from "./controls.js"
import { stop } from "./actions.js"
import { kichenTimer } from "./sound.js"

export function countdown() {
   clearTimeout(state.countdown)

   if(!state.isRunning) {
      return
   }

   let minutes = Number(elements.minutes.textContent)
   let seconds = Number(elements.seconds.textContent)

   seconds--

   if(seconds < 0) {
      seconds = 59
      minutes--
   }

   if(minutes < 0) {
      kichenTimer.play()
      stop()
      return
   }

   updateTime(minutes, seconds)
   state.countdown = setTimeout(() => countdown(), 1000)
}

export function updateTime(minutes, seconds) {
   minutes = minutes ?? state.minutes
   seconds = seconds ?? state.seconds

   elements.minutes.textContent = String(minutes).padStart(2, "0")
   elements.seconds.textContent = String(seconds).padStart(2, "0")
}


 /* "minutes = minutes ?? state.minutes": o minutes vai ser igual ao "minutes" (que eu definir) ou(- ??), se eu não definir, vai usar o valor do state.minutes*/