'use client'
import React, { useState } from 'react'
import styles from './styles.module.css';

export default function ToggleDarkMode() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange: () => void = () => {
        setIsChecked(!isChecked);
      };
      
  return (
    <div className='pr-8'>
         <label
    className={`${styles.toggle}`}
    style={{ background: isChecked ? "#2b2b2b" : "#f8f8f8" }}
  >
    <input
      type='checkbox'
      className={`darkLightModeInput ${styles.darkLightModeInput}`}
      onChange={handleCheckboxChange}
      checked={isChecked}
    />
    <span className="toggle"></span>
    <span className="animatedBg"  style={{
    clipPath: `circle(${isChecked ? '70%' : '0%'} at 50% 50%)`
  }}
  >
  </span>
    <i className={`${isChecked ? 'pi pi-moon' : 'pi pi-sun'} ${isChecked ? styles.moon : styles.sun}`}
    ></i>
  </label>
    </div>
  )
}
