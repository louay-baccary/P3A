"use client";

import React, { useRef, useEffect } from "react";

function GenratedImage() {
    const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = 300;
    canvas.height = 150;

    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Set text styles
    context.font = "24px Arial";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.textBaseline = "middle";

    // Draw text on the canvas
    context.fillText("hello", canvas.width / 2, canvas.height / 2);
  }, []);
  const convertToImage = () => {
    const canvas = canvasRef.current;
    const image = new Image();

    image.src = canvas.toDataURL("image/png");
    // Do something with the image, such as displaying it or saving it
  };

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      <button onClick={convertToImage}>Convert to Image</button>
    </div>
  );
}

export default GenratedImage;
