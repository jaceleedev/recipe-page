import Image from 'next/image';
import styles from './index.module.css';

const ingredientsData = [
  '2-3 large eggs',
  'Salt, to taste',
  'Pepper, to taste',
  '1 tablespoon of butter or oil',
  'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
];

function Ingredients() {
  return (
    <div className={styles.ingredients}>
      <h2 className={styles.heading}>Ingredients</h2>
      <ul className={styles.list}>
        {ingredientsData.map((item) => (
          <li className={styles.item} key={item}>
            <div className={styles.ellipse}>
              <Image
                src={'/assets/images/ellipse.svg'}
                alt={'ellipse'}
                width={4}
                height={4}
                priority
              />
            </div>
            <p className={styles.content}>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ingredients;
