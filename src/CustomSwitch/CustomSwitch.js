import React from 'react'
import './CustomSwitch.css'

const CustomSwitch = ({ isChecked, handleSwitch, onColor = 'rgba(41, 241, 195, 1)', offColor }) => {
    return (
        <div>
            <input
                className="switch-checkbox"
                id="switch-checkbox"
                checked={isChecked}
                onChange={handleSwitch}
                type="checkbox"
            />
            <label
                htmlFor='switch-checkbox'
                className="switch-label"
                onBgColor={onColor}
                offBgColor={offColor}
                style={{ backgroundColor: isChecked ? onColor : offColor }}
            >
                <span className="switch-button" />
            </label>
        </div>
    )
}

export default CustomSwitch



