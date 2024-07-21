import Divider from './Divider';
import styles from './index.module.css';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import Nutrition from './Nutrition';
import PreparationTime from './PreparationTime';
import RecipeHeader from './RecipeHeader';

function RecipeContent() {
  return (
    <div className={styles['recipe-content']}>
      <RecipeHeader />
      <PreparationTime />
      <Ingredients />
      <Divider />
      <Instructions />
      <Divider />
      <Nutrition />
    </div>
  );
}

export default RecipeContent;
