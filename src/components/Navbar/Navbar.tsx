import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { ReactComponent as MenuIcon } from '../../assets/svg/menu.svg';
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg';
import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg';
import { ReactComponent as CancelIcon } from '../../assets/svg/cancel.svg';
import AccordionMenu from '../AccordionMenu/AccordionMenu';
import Cart from '../Cart/Cart';
import Modal from '../Modal/Modal';

const LOGO_SIZE = 56;

export default function Navbar() {
  const [isAccordionMenuOpen, setIsAccordionMenuOpen] =
    useState<boolean>(false);

  const [isSearch, setIsSearch] = useState<boolean>(false);

  const showAccordionModal = () => {
    if (!isAccordionMenuOpen) {
      document.body.style.overflow = 'hidden';
    }
    if (isAccordionMenuOpen) {
      document.body.style.overflow = 'unset';
    }
    setIsAccordionMenuOpen((prev) => !prev);
  };

  const showSearchModal = () => {
    setIsSearch((prev) => !prev);
  };

  const allModalClose = () => {
    setIsSearch(false);
    setIsAccordionMenuOpen(false);
  };
  return (
    <>
      <header className={styles.headerWrapper}>
        <Link to="/">
          <LogoIcon width={LOGO_SIZE} />
        </Link>

        <section className={styles.buttonContainer}>
          <button className={styles.navButton} onClick={showSearchModal}>
            {isSearch ? <CancelIcon /> : <SearchIcon />}
          </button>
          <Modal>
            <Cart />
          </Modal>
          <button className={styles.navButton} onClick={showAccordionModal}>
            {isAccordionMenuOpen ? <CancelIcon /> : <MenuIcon />}
          </button>
        </section>
      </header>
      <div className={styles.spacer}></div>

      <nav className={`${styles.searchModal} ${isSearch && styles.active}`}>
        <SearchIcon />
        <input
          className={styles.searchModalInput}
          placeholder="SEARCH FOR KEYWORDS"
        />
      </nav>

      <nav
        className={`${styles.accordionModal} ${
          isAccordionMenuOpen && styles.active
        }`}
      >
        <AccordionMenu />
      </nav>

      <div
        className={`${styles.backdrop} ${isSearch && styles.active}`}
        onClick={allModalClose}
      ></div>
    </>
  );
}
