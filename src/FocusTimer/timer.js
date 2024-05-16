import state from "./state.js"
import * as elements from "./controls.js"


export function updateTime(minutes, seconds) {
   minutes = minutes ?? state.minutes
   seconds = seconds ?? state.seconds

   elements.minutes.textContent = String(minutes).padStart(2, "0")
   elements.seconds.textContent = String(seconds).padStart(2, "0")
}


 /* "minutes = minutes ?? state.minutes": o minutes vai ser igual ao "minutes" (que eu definir) ou(- ??), se eu não definir, vai usar o valor do state.minutes*/