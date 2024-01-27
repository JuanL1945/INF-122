// ProjectContainer.jsx

import React from 'react';
import styles from "./port.module.css";
import Image from 'next/image';


const ProjectContainer = () => {
    return (
        <div className={styles['project-container']}>
            <div className={styles['content-card-img']}>
                <img className={styles.image} src="https://media.licdn.com/dms/image/D4D12AQE-1ltJBSdtCw/article-cover_image-shrink_600_2000/0/1660295327521?e=2147483647&v=beta&t=pFEqbusNrt9Dlyr_h7yg0JqwpkFy2mK8v-_-kVlJuZM" alt="Project 1" />
                <div className={styles['content-card-img-overlay']}></div>
                <div className={styles['content-card-img-detail']}>


                </div>
            </div>
            <div className={styles['content-card-img']}>
                <img className={styles.image} src="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png" alt="Project 2" />
                <div className={styles['content-card-img-overlay']}></div>
            </div>
            <div className={styles['content-card-img']}>
                <img className={styles.image} src="https://www.tecleayteclea.com/wp-content/uploads/sites/5/2020/06/332006-PB306E-838.jpeg" alt="Project 3" />
                <div className={styles['content-card-img-overlay']}></div>
            </div>
            <div className={styles['content-card-img']}>
                <img className={styles.image} src="https://thedigitalmike.com/wp-content/uploads/2021/12/Capture.jpg" alt="Project 4" />
                <div className={styles['content-card-img-overlay']}></div>
            </div>
            <div className={styles['content-card-img']}>
                <img className={styles.image} src="https://www.marketing-branding.com/wp-content/uploads/2020/04/juego-del-gato-google-doodle.png" alt="Project 5" />
                <div className={styles['content-card-img-overlay']}></div>
            </div>
            <div className={styles['content-card-img']}>
                <img className={styles.image} src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/332524066/original/4bc070763707beb3d9f2a89bfd2989ede1876696/create-next-js-react-tailwind-and-typescript-websites.png" alt="Project 6" />
                <div className={styles['content-card-img-overlay']}></div>
            </div>
        </div>
    );
};

export default ProjectContainer;
