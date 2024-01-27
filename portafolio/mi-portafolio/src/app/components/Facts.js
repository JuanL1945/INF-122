

import React from 'react';
import styles from "./port.module.css";

const FactsComponent = () => {
    return (
        <div className={styles.facts}>
            <div className={styles['fact-item']}>
                <h2>1</h2>
                <p>Years of work experience</p>
            </div>
            <div className={styles['fact-item']}>
                <h2>2+</h2>
                <p>Completed projects</p>
            </div>
            <div className={styles['fact-item']}>
                <h2>1+</h2>
                <p>Satisfied customers</p>
            </div>
        </div>
    );
};

export default FactsComponent;

