import styles from './index.module.css';

function RecipeHeader() {
  return (
    <div className={styles['recipe-header']}>
      <h1 className={styles['recipe-header__heading']}>
        Simple Omelette Recipe
      </h1>
      <p className={styles['recipe-header__paragraph']}>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
    </div>
  );
}

export default RecipeHeader;
