import Image from 'next/image';

const ingredientsData = [
  '2-3 large eggs',
  'Salt, to taste',
  'Pepper, to taste',
  '1 tablespoon of butter or oil',
  'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
];

function Ingredients() {
  return (
    <section className="flex flex-col items-start gap-300">
      <h2 className="self-stretch text-preset-2 text-brown-800">Ingredients</h2>
      <ul className="flex flex-col items-start gap-100 w-full">
        {ingredientsData.map((item) => (
          <li className="flex items-center gap-200 pl-100 w-full" key={item}>
            <div className="flex items-center w-4 h-full">
              <Image
                src="/assets/images/ellipse.svg"
                alt=""
                width={4}
                height={4}
                priority
              />
            </div>
            <p className="w-full text-preset-4 text-stone-600">{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Ingredients;
