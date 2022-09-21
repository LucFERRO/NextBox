import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
          <span >
            Développé par Luc by{" "}
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />{" "}
         explore by Luc 
             <wbr />   
          </span>
          <Link className="about" href="about"> About </Link>
      </footer>
    </>
  );
}
