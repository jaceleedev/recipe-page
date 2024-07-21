import Image from 'next/image';
import styles from './index.module.css';

const preparationData = [
  { label: 'Total:', content: 'Approximately 10 minutes' },
  { label: 'Preparation:', content: '5 minutes' },
  { label: 'Cooking:', content: '5 minutes' },
];

function PreparationTime() {
  return (
    <div className={styles.preparationTime}>
      <h2 className={styles.heading}>Preparation time</h2>
      <ul className={styles.list}>
        {preparationData.map((item) => (
          <li key={item.label} className={styles.item}>
            <div className={styles.ellipse}>
              <Image
                src={'/assets/images/ellipse.svg'}
                alt={'ellipse'}
                width={4}
                height={4}
                priority
              />
            </div>
            <p className={styles.content}>
              <span className={styles.label}>{item.label}</span> {item.content}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PreparationTime;
