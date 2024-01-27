import React from 'react';
import styles from './port.module.css';

const ProfileComponent = () => {
    return (
        <div className={styles.profile}>
            <figure className={styles['profile-img']}>
                <img src="/juan.jpg" alt="Profile" />
            </figure>

            <div className={styles['profile-info']}>
                <h1>Juan Laquis</h1>
                <p>Informatic student
                </p>
                <div className={styles['profile-social']}>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/?size=48&id=AZOZNnY73haj&format=png" alt="github" className={styles['profile-social-img']} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/?size=50&id=437&format=png" alt="twitter" className={styles['profile-social-img']} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/?size=50&id=8808&format=png" alt="linkedin" className={styles['profile-social-img']} />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/?size=50&id=25461&format=png" alt="youtube" className={styles['profile-social-img']} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProfileComponent;
