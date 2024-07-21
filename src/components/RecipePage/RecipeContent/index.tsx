import styles from './index.module.css';
import PreparationTime from './PreparationTime';
import RecipeHeader from './RecipeHeader';

function RecipeContent() {
  return (
    <div className={styles['recipe-content']}>
      <RecipeHeader />
      <PreparationTime />
    </div>
  );
}

export default RecipeContent;
