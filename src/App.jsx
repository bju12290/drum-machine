import React from 'react'
import './App.css'
import VolumeSlider from './components/VolumeSlider.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './assets/images/drumpad_icon.png'

const drumSounds = {
  "Heater-1": { key: "Q", name: "Heater 1", link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
  "Heater-2": { key: "W", name: "Heater 2", link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
  "Heater-3": { key: "E", name: "Heater 3", link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
  "Heater-4_1": { key: "A", name: "Heater 4", link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
  "Heater-6": { key: "S", name: "Heater 6", link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
  "Dsc_Oh": { key: "D", name: "Dsc Oh", link: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
  "Kick_n_Hat": { key: "Z", name: "Kick n Hat", link: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
  "RP4_KICK_1": { key: "X", name: "RP4 Kick 1", link: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
  "Cev_H2": { key: "C", name: "Cev H2", link: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }
}

function App() {
  const [lastButtonClicked, setLastButtonClicked] = React.useState(``)
  const [volume, setVolume] = React.useState(.5)
  const soundsArray = Object.keys(drumSounds)
  const pressedKeys = soundsArray.map(sound => drumSounds[sound].key)

  function playSound(sound) {
    setLastButtonClicked(drumSounds[sound].name)
    const audioElement = document.getElementById(sound);
    console.log(audioElement)
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.volume = volume
      audioElement.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    } else {
      console.warn("Audio element not found for sound:", sound);
    }
  }

  const handleKeyPress = (event) => {
    console.log(event.key)
    const key = event.key.toUpperCase()
    const sound = Object.keys(drumSounds).find(
      (sound) => drumSounds[sound].key === key
    )
    console.log("Selected sound:", sound)
    playSound(sound)
  }

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
  }, [volume])

  const DrumPadElements = () => {
    const drumPads = soundsArray.map((sound, index) => (
      <div 
        key={sound}
        id={index}
        className="drum-pad btn btn-light d-flex justify-content-center align-items-center"
        onClick={() => playSound(sound)}>
          {pressedKeys[index]}
      </div>
    )) 
    return <div className="drumPads--container">{drumPads}</div>
  }

  return (
    <div id="drum-machine" className="soundpad--container">
      <div>
        <div className="display--container">
          <div className="logo d-flex align-items-center"><img src={logo} alt="DRUM 9-pad Logo"/>DRUM 9-pad</div>
          <div id="display" className="display d-flex justify-content-center align-items-center">{lastButtonClicked}</div>
          <VolumeSlider min={0} max={100} value={50} step={1} volume={volume} setVolume={setVolume}/>
        </div>
        <DrumPadElements />
      </div>
    </div>
  )
}

export default App
