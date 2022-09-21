import React from "react";
import Image from "next/image";
import Styles from '../styles/SliderAudio.module.css'

export default function Vinyle() {
  return (
    <>
      <div>
        <div className={Styles.test}>
          <div>
            {/* <Image className={Styles.vinyle} src="/assets/Images/vinyle.png" alt="vinyle" width={200} height={200}></Image> */}
            <img className={Styles.vinyle} src="/assets/Images/vinyle.png" alt="vinyle" width={200} height={200}/>
          </div>
        </div>
      </div>
    </>
  );
}
