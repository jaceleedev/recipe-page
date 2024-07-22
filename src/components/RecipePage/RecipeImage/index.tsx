import Image from 'next/image';
import styles from './index.module.css';

interface RecipeImageProps {
  src: string;
  alt: string;
}

function RecipeImage({ src, alt }: RecipeImageProps) {
  return (
    <div className={styles['recipe-image']}>
      <Image src={src} alt={alt} fill priority className={styles.img} />
    </div>
  );
}

export default RecipeImage;
