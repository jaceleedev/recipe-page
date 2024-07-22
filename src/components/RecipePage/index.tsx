import RecipeContent from './RecipeContent';
import RecipeImage from './RecipeImage';

function RecipePage() {
  return (
    <article className="grid grid-cols-1 grid-rows-[auto_1fr] gap-500 max-w-[736px] w-full p-500 rounded-3xl bg-white tablet:max-w-[616px] mobile:p-0">
      <RecipeImage
        src={'/assets/images/image-omelette.jpeg'}
        alt={'Simple omelette'}
      />
      <RecipeContent />
    </article>
  );
}

export default RecipePage;
