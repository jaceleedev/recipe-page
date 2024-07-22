const instructionsData = [
  {
    title: 'Beat the eggs',
    description:
      'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
  },
  {
    title: 'Heat the pan',
    description:
      'Place a non-stick frying pan over medium heat and add butter or oil.',
  },
  {
    title: 'Cook the omelette',
    description:
      'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
  },
  {
    title: 'Add fillings (optional)',
    description:
      'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
  },
  {
    title: 'Fold and serve',
    description:
      'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
  },
  {
    title: 'Enjoy',
    description: 'Serve hot, with additional salt and pepper if needed.',
  },
];

function Instructions() {
  return (
    <section className="flex flex-col items-start gap-300">
      <h2 className="text-preset-2 text-brown-800">Instructions</h2>
      <ol className="flex flex-col items-start gap-100">
        {instructionsData.map((instruction, index) => (
          <li
            className="flex items-start gap-200 pl-100"
            key={instruction.title}
          >
            <span className="text-preset-4-bold text-brown-800 h-full">
              {index + 1}.
            </span>
            <p className="text-preset-4 text-stone-600">
              <span className="text-preset-4-bold text-stone-600">
                {instruction.title}:{' '}
              </span>
              {instruction.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Instructions;
