"use client"
import Image, { StaticImageData } from "next/image"
import styles from "./styles.module.css"
import img from "../../../public/img/1.png"

type CardProps = {
  image: {
    imgData: StaticImageData | string,
    width: number | `${number}`,
    height: number | `${number}`,
  },
  title: string,
  paragraph: string,
}

const Card = ({ image, paragraph, title }: CardProps) => {

  function handlerCard() {

  }

  return (
    <section className={styles.container}>
      <section className={styles.image}>
        <Image src={image.imgData} width={image.width} height={image.height} alt="imagem de capa de livro~" />
      </section>
      <section className={styles.sectionText}>
        <section className={styles.sectionTextTitle}>
          <h1>{title}</h1>
        </section>
        <section className={styles.sectionTextParagraph}>
          <p>{paragraph}</p>
        </section>
      </section>
      <button onClick={handlerCard}>ADD</button>
    </section>
  )
}

export default Card