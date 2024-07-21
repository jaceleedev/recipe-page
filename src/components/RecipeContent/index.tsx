import styles from './index.module.css';
import RecipeHeader from './RecipeHeader';

function RecipeContent() {
  return (
    <div className={styles['recipe-content']}>
      <RecipeHeader />
    </div>
  );
}

export default RecipeContent;
