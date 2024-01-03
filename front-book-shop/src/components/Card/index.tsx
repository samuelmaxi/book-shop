import Image from "next/image"
import styles from "./styles.module.css"
import img from "../../../public/img/1.png"

export async function getServerSideProps() {
  const res = await fetch("https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=220")
  const images = await res.json

  return { props: { images } }
}

const Card = () => {

  return (
    <section className={styles.container}>
      <section className={styles.image}>
        <Image src={img} width={100} height={100} alt="imagem de capa de livro~" />
      </section>
      <section className={styles.sectionText}>
        <section className={styles.sectionTextTitle}>
          <h1>Book Name</h1>
        </section>
        <section className={styles.sectionTextParagraph}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis vel, amet repellat aspernatur, cumque ipsa natus atque quisquam, blanditiis dignissimos praesentium! Laborum ullam saepe hic similique, ipsam corporis! Similique, incidunt.</p>
        </section>
      </section>

    </section>
  )
}

export default Card