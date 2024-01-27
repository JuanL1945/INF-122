// ButtonsComponent.jsx
"use client"
import React from 'react';
import styles from "./port.module.css";


const ButtonsComponent = () => {
    const handleDownload = () => {
        alert("Downloading Document");
    };

    return (
        <div className={styles.buttons}>
            <button className={styles['btn-primary']} onClick={handleDownload}>
                <div className={styles['btn-content']}>
                    <p>Download CV</p>
                    <img src="https://img.icons8.com/?size=50&id=366&format=png" alt="arrow" className={styles['btn-primary-img']} />
                </div>
            </button>
            <a className={styles['btn-secondary']} href="mailto:laquis48@gmail.com">
                <div className={styles['btn-content']}>
                    <p>Contact me</p>
                </div>
            </a>
        </div>
    );
};

export default ButtonsComponent;
