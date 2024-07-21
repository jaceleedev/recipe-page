import React from 'react';
import Divider from '../Divider';
import styles from './index.module.css';

const nutritionData = [
  { label: 'Calories', value: '277kcal' },
  { label: 'Carbs', value: '0g' },
  { label: 'Protein', value: '20g' },
  { label: 'Fat', value: '22g' },
];

function Nutrition() {
  return (
    <div className={styles.nutrition}>
      <h2 className={styles.heading}>Nutrition</h2>
      <p className={styles.description}>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className={styles.info}>
        {nutritionData.map((nutrition, index) => (
          <React.Fragment key={nutrition.label}>
            <div className={styles.row}>
              <span className={styles.label}>{nutrition.label}</span>
              <span className={styles.value}>{nutrition.value}</span>
            </div>
            {index < nutritionData.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Nutrition;
