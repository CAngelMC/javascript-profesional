import MediaPlayer from "@angel_cast/platzimediaplayer";
import AutoPlay from "@angel_cast/platzimediaplayer/lib/plugins/AutoPlay";
import AutoPause from "@angel_cast/platzimediaplayer/lib/plugins/AutoPause";
import Ads from "@angel_cast/platzimediaplayer/src/plugins/Ads";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

const button: HTMLElement = document.querySelector("button");
const buttonUnmute: HTMLElement = document.getElementById("mute");
button.onclick = () => player.togglePlay();

buttonUnmute.onclick = () => player.handleMute();


if("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch(error => {
    console.log(error)
  }) 
}