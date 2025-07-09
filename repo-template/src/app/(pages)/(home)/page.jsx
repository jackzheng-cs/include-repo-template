import Card from "components/Card/Card.jsx";
import styles from "./page.module.scss";
import Image from "next/image";

const items = [
  {
    id: 1,
    term: "WINTER/SPRING 2023",
    image: "/home/iELC.png",
    title: "IELC Tutoring",
    description:
      "Website and brand identity project for the Interactive Elementary Learning Center to boost credibility and increase participation in their free 7-week summer program.",
    link: "https://www.ielctutoring.com/",
  },
  {
    id: 2,
    term: "FALL/WINTER 2023",
    image: "/home/B&V.png",
    title: "Bloom and Vine",
    description:
      "Website project for Bloom and Vine a boutique floral design studio located in Northern California. Bloom and Vine strives to make every event unforgettable.",
    link: "https://www.bloomandvine.net/",
  },
  {
    id: 3,
    term: "WINTER/SPRING 2022",
    image: "/home/VSI.png",
    title: "New Vietnam Studies Initiative",
    description:
      "We developed the website for NVSI, promoting research and collaboration in fields related to contemporary Vietnam's economic, political, and cultural development.",
    link: "https://newvietnam.ucdavis.edu/",
  },
  {
    id: 4,
    term: "FALL/WINTER 2021",
    image: "/home/NELOOP.png",
    title: "ONELOOP",
    description:
      "Oneloop is a team of graduate and undergraduate students at UCD. They design and build a Hyperloop pod to compete in SpaceX's annual Hyperloop competition.",
    link: "https://example.com",
  },
];

export default function assignment1() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src="/home/pen.png"
          width="80"
          height="80"
          alt="Pen Image"
          className={styles.image}
        />

        <div className={styles.title}>
          <h1>Recent Work</h1>
        </div>

        <div className={styles.description}>
          <h2>
            Transforming ideas into incredible realities is what we do best.
          </h2>
        </div>
      </div>

      <div className={styles.content}>
        {items.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>

      <div className={styles.more}>
        <h3>AND MORE...</h3>
      </div>
    </div>
  );
}
