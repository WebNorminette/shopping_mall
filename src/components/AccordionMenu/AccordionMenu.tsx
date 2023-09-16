import { useState } from 'react';
import { menuData } from '../../constats';
import styles from './AccordionMenu.module.css';
import { Link, useNavigate } from 'react-router-dom';

interface ContentProps {
  id: string;
  title: string;
  subItems: string[] | undefined;
  selectedValue: string | null;
  handleCheckboxChange: (value: string) => void;
}

const Menu = ({
  id,
  title,
  subItems,
  selectedValue,
  handleCheckboxChange,
}: ContentProps) => {
  return (
    <>
      <input
        type="checkbox"
        name="accordion"
        id={id}
        checked={selectedValue === title}
        onChange={() => handleCheckboxChange(title)}
      />
      <label htmlFor={id} className={styles.menuList}>
        {title}
        <em className={styles.icon}></em>
      </label>
      <section className={`${styles.subItems} `}>
        {subItems && (
          <ul>
            {subItems.map((value, index) => (
              <li key={`subItem_${index}`} className={styles.linkList}>
                <Link to={`/collections/${value}`}>{value}</Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default function AccordionMenu() {
  const navigate = useNavigate();

  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const handleCheckboxChange = (value: string) => {
    setSelectedValue(value === selectedValue ? null : value);
  };
  return (
    <div className={styles.accordionWrapper}>
      {menuData.map((value, index) => {
        return value.subItems ? (
          <Menu
            id={`menu_${index}`}
            title={value.title}
            key={`accordionMenu_${index}`}
            subItems={value.subItems}
            selectedValue={selectedValue}
            handleCheckboxChange={handleCheckboxChange}
          ></Menu>
        ) : (
          <div
            className={styles.menuList}
            key={`accordionMenu_${index}`}
            onClick={() => navigate(`/${value.title}`)}
          >
            {value.title}
          </div>
        );
      })}
    </div>
  );
}
