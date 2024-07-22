import Image from 'next/image';

const preparationData = [
  { label: 'Total:', content: 'Approximately 10 minutes' },
  { label: 'Preparation:', content: '5 minutes' },
  { label: 'Cooking:', content: '5 minutes' },
];

function PreparationTime() {
  return (
    <section className="flex flex-col items-start gap-200 p-300 rounded-xl bg-rose-50">
      <h2 className="text-preset-3 text-rose-800">Preparation time</h2>
      <ul className="flex flex-col items-start gap-100 w-full">
        {preparationData.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-200 pl-100 w-full"
          >
            <div className="flex items-center w-4 h-full">
              <Image
                src="/assets/images/ellipse.svg"
                alt=""
                width={4}
                height={4}
                priority
              />
            </div>
            <p className="text-preset-4">
              <span className="font-bold">{item.label}</span> {item.content}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PreparationTime;
