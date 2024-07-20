import styles from './index.module.css';
import RecipeImage from './RecipeImage';

function RecipePage() {
  return (
    <div className={styles['recipe-page']}>
      <RecipeImage
        src={'/assets/images/image-omelette.jpeg'}
        alt={'simple omelette'}
      />
    </div>
  );
}

export default RecipePage;
