import React from "react";
import icons from "../../icons";
import styles from "./styles";

const ItemButtonGroup = ({
  handleJuiceButton,
  handleHatButton,
  handleGuitarButton,
}) => {
  return (
    <div style={styles.buttonContainer}>
      <br />
      <button onClick={handleJuiceButton} style={styles.AddItemButton}>
        <img src={icons.juice} alt="juice" width={50} height={50} />
      </button>
      <button onClick={handleHatButton} style={styles.AddItemButton}>
        <img src={icons.hat} alt="hat" width={50} height={50} />
      </button>
      <button onClick={handleGuitarButton} style={styles.AddItemButton}>
        <img src={icons.guitar} alt="guitar" width={50} height={50} />
      </button>
    </div>
  );
};

export default ItemButtonGroup;
