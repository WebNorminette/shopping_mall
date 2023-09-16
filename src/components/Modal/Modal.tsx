import { ReactNode } from 'react';
import styles from './Modal.module.css';
import { ReactComponent as BagIcon } from '../../assets/svg/bag.svg';

interface ModalProps {
  children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return (
    <>
      <input type="checkbox" id="modal" className={styles.input}></input>
      <label htmlFor="modal" className={styles.openModalIcon}>
        <BagIcon />
      </label>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <label htmlFor="modal" className={styles.exitButton}></label>
          {children}
        </div>
        <label htmlFor="modal" className={styles.backdrop}></label>
      </div>
    </>
  );
}
