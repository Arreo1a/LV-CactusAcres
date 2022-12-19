import React,{} from "react"
import  { screen }  from  '@testing-library/react' ; //npm i @testing-library/react



function Alertwindows() {
    
  function updateLockButton() {
    const lockButton = document.getElementById("button");
    const newOrientation = getOppositeOrientation();
    lockButton.textContent = `Lock to ${newOrientation}`;
  }

  function getOppositeOrientation() {
    return screen.orientation.startsWith("portrait") ? "landscape" : "portrait";
  }

  async function rotate(lockButton) {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    }
    const newOrientation = getOppositeOrientation();
    await screen.orientation.lock(newOrientation);
    updateLockButton(lockButton);
  }

  
  screen.orientation.addEventListener("change", updateLockButton);

  window.addEventListener("load", updateLockButton);

  const unlock = () =>{
    screen.orientation.unlock()
  }

  const Lock = () =>{
    rotate(this)
  }


  return (
    <div>
      <button onclick={Lock} id="button">
        Lock to...
      </button>
      <button onclick={unlock}>Unlock</button>
    </div>
  );
}

export default Alertwindows;












