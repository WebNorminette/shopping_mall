import React from "react";
import styles from "./ProductItem.module.css";

export default function ProductItem({ product }: any) {
  return (
    <li key={product.id} className={styles.wrapper}>
      <div className={styles.img} />
      <div>
        <article>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </article>
      </div>
    </li>
  );
}
