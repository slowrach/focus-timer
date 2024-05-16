import state from "./state.js";

export function running() {
   state.isRunning = document.documentElement.classList.toggle('run')
}

export function timer() {

}

export function stop() {
   state.isRunning = false
   document.documentElement.classList.remove('run')
}

export function song() {
   state.isMute = document.documentElement.classList.toggle('sound-on')
}