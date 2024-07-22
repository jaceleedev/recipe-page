import Image from 'next/image';

interface RecipeImageProps {
  src: string;
  alt: string;
}

function RecipeImage({ src, alt }: Readonly<RecipeImageProps>) {
  return (
    <figure className="relative w-full h-[300px] rounded-xl overflow-hidden mobile:h-[171px]">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="tablet:object-cover"
      />
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}

export default RecipeImage;
