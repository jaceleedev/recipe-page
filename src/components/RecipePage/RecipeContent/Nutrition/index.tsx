import React from 'react';
import Divider from '../Divider';

const nutritionData = [
  { label: 'Calories', value: '277kcal' },
  { label: 'Carbs', value: '0g' },
  { label: 'Protein', value: '20g' },
  { label: 'Fat', value: '22g' },
];

function Nutrition() {
  return (
    <section className="flex flex-col items-start gap-300">
      <h2 className="text-preset-2 text-brown-800">Nutrition</h2>
      <p className="text-preset-4 text-stone-600">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className="flex flex-col items-start self-stretch gap-150">
        {nutritionData.map((nutrition, index) => (
          <React.Fragment key={nutrition.label}>
            <div className="flex items-center self-stretch gap-200 px-400">
              <span className="w-full text-preset-4 text-stone-600">
                {nutrition.label}
              </span>
              <span className="w-full text-preset-4-bold text-brown-800">
                {nutrition.value}
              </span>
            </div>
            {index < nutritionData.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Nutrition;
