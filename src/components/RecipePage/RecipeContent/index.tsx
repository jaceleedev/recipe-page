import Divider from './Divider';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import Nutrition from './Nutrition';
import PreparationTime from './PreparationTime';
import RecipeHeader from './RecipeHeader';

function RecipeContent() {
  return (
    <article className="grid grid-cols-1 grid-rows-[auto] gap-400 mobile:px-400 mobile:py-500">
      <RecipeHeader />
      <PreparationTime />
      <Ingredients />
      <Divider />
      <Instructions />
      <Divider />
      <Nutrition />
    </article>
  );
}

export default RecipeContent;
