import React from "react";
import styles from "./slider.module.css";

const Slider = (props) => {
  return (
    <section>
      <div className={styles.container}>
        <div className="">
          {props.sliders.map((slider) => (
            <div key={slider.id}>
              <p>{slider.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
