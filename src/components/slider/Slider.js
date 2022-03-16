import React from "react";
import styles from "./slider.module.css";

const Slider = (props) => {
  const [ativo, setAtivo] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const refPosition = React.useRef();

  React.useEffect(() => {
    const { width } = refPosition.current.getBoundingClientRect();
    setPosition(-(ativo * width));
  }, [ativo]);

  function slidePrev() {
    if (ativo > 0) {
      setAtivo(ativo - 1);
    }
  }

  function slideNext() {
    if (ativo < props.sliders.length - 1) {
      setAtivo(ativo + 1);
    }
  }
  return (
    <section>
      <div className={styles.container}>
        <div
          className={styles.content}
          style={{ transform: `translateX(${position}px)` }}
          ref={refPosition}
        >
          {props.sliders.map((slider) => (
            <div key={slider.id} className={styles.item}>
              <p>{slider.texto}</p>
            </div>
          ))}
        </div>
        <nav className={styles.button}>
          <button onClick={slidePrev}>Prev</button>
          <button onClick={slideNext}>Next</button>
        </nav>
      </div>
    </section>
  );
};

export default Slider;
