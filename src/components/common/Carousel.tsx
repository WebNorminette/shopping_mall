import { TouchEventHandler, useEffect, useRef, useState } from "react";

import styles from "./Carousel.module.css";

interface Props {
  carouselList: string[];
}

let touchStartX: number;
let touchEndX: number;

const Carousel = ({ carouselList }: Props) => {
  const slideRef = useRef<HTMLUListElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currIndex, setCurrIndex] = useState(0);

  const barWidth = (1 / carouselList?.length) * 100;
  console.log(currIndex * barWidth);
  useEffect(() => {
    if (slideRef.current !== null) {
      slideRef.current.style.transition = "all 0.7s ease-in-out";
      slideRef.current.style.transform = `translateX(-${currIndex * 100}%)`;
    }
    if (scrollRef.current !== null) {
      scrollRef.current.style.transition = "all 0.7s ease-in-out";
      scrollRef.current.style.margin = `0 0 0 ${currIndex * barWidth}%`;
    }
  }, [currIndex]);

  const moveToNextSlide = () => {
    if (currIndex === carouselList?.length - 1) return;
    setCurrIndex(currIndex + 1);
  };

  const moveToPrevSlide = () => {
    if (currIndex === 0) return;
    setCurrIndex(currIndex - 1);
  };

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    touchStartX = e.nativeEvent.touches[0].clientX;
  };

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = (e) => {
    touchEndX = e.nativeEvent.changedTouches[0].clientX;
    if (touchStartX >= touchEndX) {
      moveToNextSlide();
    } else {
      moveToPrevSlide();
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.carouselWrapper}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <ul className={styles.carousel} ref={slideRef}>
          {carouselList?.map((image, idx) => {
            const key = `carousel-${image}-${idx}`;

            return (
              <li key={key} className={styles.carouselItem}>
                <img src={image} className={styles.img} alt="carousel-img" />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.scrollTrack}>
        <div
          ref={scrollRef}
          style={{
            width: `${barWidth}%`,
            height: "5px",
            borderRadius: "5px",
            backgroundColor: "#ddd",
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;
