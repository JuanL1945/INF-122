// TabsComponent.jsx

import React from 'react';
import styles from "./port.module.css"
const TabsComponent = () => {
    return (
        <div className={styles.tabs}>
            <button className={`${styles['tabs-background-item']} ${styles.active}`}>
                <p className={styles['tabs-background-item-text']}>Portfolio</p>
            </button>
            <button className={styles['tabs-background-item']}>
                <p className={styles['tabs-background-item-text']}>Skills</p>
            </button>
        </div >
    );
};

export default TabsComponent;
