'use client'
import React from 'react';
import useStore from '../app/store';
import styles from './styles.module.css';

export default function ToggleDarkMode() {
  const isChecked = useStore(state => state.isChecked);
  const toggleDarkMode = useStore(state => state.toggleDarkMode);

  const handleCheckboxChange = () => {
    toggleDarkMode();
  };

  return (
    <div className={styles.toggleLabel}>
      <label className={styles.toggle} >
        <input
          type='checkbox'
          className={`${styles.darkLightModeInput} ${styles.darkLightModeInput}`}
          onChange={handleCheckboxChange}
          checked={isChecked}
          id="darkLightCheckbox"
        />
        <span className="animatedBg" style={{ clipPath: `circle(${isChecked ? '70%' : '0%'} at 50% 50%)` }}></span>
        <i className={`${isChecked ? 'pi pi-sun' : 'pi pi-moon'} ${isChecked ? styles.moon : styles.sun}`}></i>
      </label>
    </div>
  );
}
