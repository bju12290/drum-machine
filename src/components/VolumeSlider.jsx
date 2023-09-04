import React from 'react'
import './VolumeSlider.css'

export default function VolumeControl({ min, max, value, step, volume, setVolume }) {
    const [sliderRange, setSliderRange] = React.useState(value);
    const [inputValue, setInputValue] = React.useState(value);
    const sliderRef = React.useRef(null);

    function handleSliderInput() {
        const range = max - min;
        const distance = sliderRef.current.value - min;
        const percentage = (distance / range) * 100;
        setSliderRange(percentage);
        setInputValue(sliderRef.current.value);
        setVolume(sliderRef.current.value/100)
    }

    function handleNumberInput(e) {
        const newValue = parseInt(e.target.value)

        if (newValue < min) {
            setInputValue(min)
            setSliderRange(0)
            setVolume(0)
        } else if (newValue > max) {
            setInputValue(max)
            setSliderRange(100)
            setVolume(1)
        } else {
            setInputValue(newValue)
            const range = max - min
            const distance = newValue - min
            const percentage = (distance / range) * 100
            setSliderRange(percentage)
            setVolume(newValue/100)
        }
    }

    React.useEffect(() => {
        handleSliderInput();
    }, [sliderRef]);

    return(
        <div className="range-slider">
            <div className="slider-values">
                <input 
                type="number" 
                onInput={handleNumberInput}
                value={inputValue}
                min={min} max={max}
                ref={sliderRef}
                step={step}
                className="number-input"
                />
            </div>
            <div className="slider-container">
                <input 
                type="range" 
                onInput={handleSliderInput}
                value={inputValue}
                className="slider"
                min={min} max={max}
                step={step}
                ref={sliderRef}/>
                <div 
                className="slider-thumb"
                style={{ left: `calc(${sliderRange}% - 0.5em)`}}
                ></div>
                <div className="progress--bar"
                style={{ width: `${sliderRange}%`}}></div>
            </div>
        </div>
    )
}