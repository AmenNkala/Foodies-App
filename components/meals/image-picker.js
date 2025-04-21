"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";

export default function ImgaePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef(null);
  function handlePickClick() {
    if (imageInput.current) {
      imageInput.current.click();
    }
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPickedImage(reader.result);
    };

    reader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image selected yet.</p>}
          {pickedImage && <Image src={pickedImage} alt='Picked Image' fill />}
        </div>
        <input
          ref={imageInput}
          className={classes.input}
          type='file'
          id={name}
          name={name}
          accept='image/png image/jpeg'
          required
          onChange={handleImageChange}
        />
        <button
          type='button'
          className={classes.button}
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
