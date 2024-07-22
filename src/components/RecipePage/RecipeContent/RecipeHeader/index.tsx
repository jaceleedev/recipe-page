function RecipeHeader() {
  return (
    <header className="flex flex-col items-start gap-300">
      <h1 className="self-stretch text-preset-1 text-stone-900">
        Simple Omelette Recipe
      </h1>
      <p className="text-preset-4 text-stone-600">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
    </header>
  );
}

export default RecipeHeader;
