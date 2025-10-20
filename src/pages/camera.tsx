import React, { useState, useEffect } from "react";
import Post from "../components/blogmaker";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { images, CustomImage } from "../components/images.ts";

const slides = images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

const Camera = (props) => {
  const [index, setIndex] = useState(-1);
  const [rowHeight, setRowHeight] = useState(180);

  const handleClick = (index: number, item: CustomImage) => setIndex(index);

  useEffect(() => {
    const updateRowHeight = () => {
      if (window.innerWidth < 500) {
        setRowHeight(65);
      } else {
        setRowHeight(180);
      }
    };

    updateRowHeight();
    window.addEventListener("resize", updateRowHeight);

    return () => {
      window.removeEventListener("resize", updateRowHeight);
    };
  }, []);

  return (
    <div>
      <Post path={"/markdowns/camera.md"} name={"camera"} />
      <div className="camera-gallery-wrapper">
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
          rowHeight={rowHeight}
        />
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
    </div>
  );
};

export default Camera;
