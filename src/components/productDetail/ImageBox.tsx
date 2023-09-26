import { useEffect, useState } from "react";
import styles from "./ImageBox.module.css";
import Carousel from "../common/Carousel";
import { DetailData } from "../../types/products";

interface ImageBoxProps {
  data: undefined | DetailData;
}

export default function ImageBox({ data }: ImageBoxProps) {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", resizeListener);
  });

  const images = [
    "https://kr.stussy.com/cdn/shop/products/1924944P_BLAC_1_70947e5c-fbf5-4b62-82eb-111b1b998106.jpg?v=1694080260&width=480",
    "https://kr.stussy.com/cdn/shop/products/1924944P_BLAC_1_70947e5c-fbf5-4b62-82eb-111b1b998106.jpg?v=1694080260&width=480",
    "https://kr.stussy.com/cdn/shop/products/1924944P_BLAC_1_70947e5c-fbf5-4b62-82eb-111b1b998106.jpg?v=1694080260&width=480",
    "https://kr.stussy.com/cdn/shop/products/1924944P_BLAC_1_70947e5c-fbf5-4b62-82eb-111b1b998106.jpg?v=1694080260&width=480",
    "https://kr.stussy.com/cdn/shop/products/1924944P_BLAC_1_70947e5c-fbf5-4b62-82eb-111b1b998106.jpg?v=1694080260&width=480",
  ];
  if (innerWidth >= 1000) {
    return (
      <div className={styles.wrapper}>
        {images.map((item) => (
          <img src={item} alt="" className={styles.imgItem} />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <Carousel carouselList={images} />
      </div>
    );
  }
}
