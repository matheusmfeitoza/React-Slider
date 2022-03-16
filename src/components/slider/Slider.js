import React from "react";
import styles from "./slider.module.css";

const Slider = (props) => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          {props.sliders.map((slider) => (
            <div key={slider.id} className={styles.item}>
              <p>{slider.texto}</p>
            </div>
          ))}
        </div>
        <nav className={styles.button}>
          <button>Prev</button>
          <button>Next</button>
        </nav>
      </div>
    </section>
  );
};

export default Slider;
