import styles from './Cart.module.css';

export default function Cart() {
  return (
    <section className={styles.CartWrapper}>
      <div className={styles.title}>SHOPPING BAG</div>
      <div className={styles.content}>
        <div>YOU HAVE NO ITEMS IN YOUR SHOPPING BAG.</div>
        <div>FREE SHIPPING IN US FOR ORDERS OVER $200 USD</div>
      </div>
      <div className={styles.buttonBox}>
        <button>CONTINUE SHOPPING</button>
      </div>
    </section>
  );
}
