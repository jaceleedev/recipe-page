import styles from './index.module.css';
import Ingredients from './Ingredients';
import PreparationTime from './PreparationTime';
import RecipeHeader from './RecipeHeader';

function RecipeContent() {
  return (
    <div className={styles['recipe-content']}>
      <RecipeHeader />
      <PreparationTime />
      <Ingredients />
    </div>
  );
}

export default RecipeContent;
