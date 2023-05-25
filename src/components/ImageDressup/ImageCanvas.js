import React, { useEffect, useRef } from "react";
import styles from "./styles";

const ImageCanvas = ({ imageUrl, shapes, updateShape }) => {
  const canvasRef = useRef(null);
  const lastClickData = useRef(null);

  // redraw canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const image = new Image();

    image.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      Object.values(shapes).forEach(({ src, width, height, x, y }) => {
        const img = new Image();
        img.onload = () => {
          context.drawImage(img, x, y, width, height);
        };
        img.src = src;
      });
    };

    image.src = imageUrl;
  }, [imageUrl, shapes, updateShape]);

  // canvas events
  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.onmousedown = (e) => {
      // TODO: fill in
    };

    canvas.onmouseup = (e) => {
      lastClickData.current = null;
      canvasRef.current.style.cursor = "pointer";
    };

    canvas.onmousemove = (e) => {
      // TODO: fill in
    };
  }, [shapes, updateShape]);

  return (
    <div style={styles.imageCanvas}>
      <canvas id="canvas" ref={canvasRef} width="500" height="500"></canvas>
    </div>
  );
};

export default ImageCanvas;
