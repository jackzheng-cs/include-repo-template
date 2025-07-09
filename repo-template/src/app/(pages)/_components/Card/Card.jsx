import styles from "./Card.module.scss";
import Image from "next/image";

export default function Card({ data }) {
  const { term, image, title, description, link } = data;

  return (
    <div className={styles.card}>
      <p className={styles.term}>{term}</p>

      <Image
        src={image}
        width={523}
        height={330}
        alt={`${title} Picture`}
        className={styles.image}
      />

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>

      <a
        href={link}
        className={styles.button}
        target="_blank"
        rel="noopener noreferrer"
      >
        VISIT SITE
      </a>
    </div>
  );
}
