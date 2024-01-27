"use client"
import Image from "next/image";
import styles from "./foto.module.css"
import { useEffect, useState } from "react";
function foto() {
    const [perrito, setPerrito] = useState("/vercel.svg");
    const url = "https://dog.ceo/api/breeds/image/random";
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => { setPerrito(data.sprites) })
    }, []);
    return (
        <div className={styles.contenedor}>
            <Image src={perrito} height={500} width={500} />
        </div>
    );
}

export default foto;