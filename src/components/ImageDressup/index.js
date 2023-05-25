import React, { useState } from "react";
import icons from "../../icons";
import styles from "./styles";
import ImageCanvas from "./ImageCanvas";
import ImagePicker from "./imagePicker";
import ItemButtonGroup from "./ItemButtonGroup";

const Index = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [shapes, setShapes] = useState({});

  // Handle add juice click
  const handleJuiceButton = () => {
    setShapes({
      ...shapes,
      [`juice_${Math.round(Math.random() * 1000)}`]: {
        src: icons.juice,
        width: 50,
        height: 50,
        x: 195,
        y: 250,
      },
    });
  };

  // Handle add hat click
  const handleHatButton = () => {
    setShapes({
      ...shapes,
      [`hat_${Math.round(Math.random() * 1000)}`]: {
        src: icons.hat,
        width: 50,
        height: 50,
        x: 225,
        y: 74,
      },
    });
  };

  // Handle add guitar click
  const handleGuitarButton = () => {
    setShapes({
      ...shapes,
      [`guitar_${Math.round(Math.random() * 1000)}`]: {
        src: icons.guitar,
        width: 50,
        height: 50,
        x: 302,
        y: 351,
      },
    });
  };

  /**
   * Updates the shape with the given id
   *
   * @param {number} id The id of the shape in the shapes object
   * @param {object} shape The new shape to update
   * @return {void}
   */
  const updateShape = (id, shape) => {
    setShapes({
      ...shapes,
      [id]: shape,
    });
  };

  const inner =
    imageUrl === null ? (
      <ImagePicker onSelectImage={setImageUrl} />
    ) : (
      <div style={styles.imageContainer}>
        <ImageCanvas
          imageUrl={imageUrl}
          updateShape={updateShape}
          shapes={shapes}
        />
        <ItemButtonGroup
          handleJuiceButton={handleJuiceButton}
          handleHatButton={handleHatButton}
          handleGuitarButton={handleGuitarButton}
        />
      </div>
    );

  return <div style={styles.wrapper}>{inner}</div>;
};

export default Index;
