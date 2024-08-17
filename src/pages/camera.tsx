import React from "react";
import { useState } from "react";
import Post from "../components/blogmaker";
import {Gallery} from "react-grid-gallery";
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

  const handleClick = (index: number, item: CustomImage) => setIndex(index);

  return (
    <div>
      <Post path={"camera.md"} name={"camera"}/>
      <div>
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
        />
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
    </div>
  )
};

export default Camera;
