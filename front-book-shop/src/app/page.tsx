import Card from '@/components/Card'
import styles from './page.module.css'
import GalleryCard from '@/components/GalleryCard'

export default function Home() {


  return (
    <main className={styles.main}>
      <h1>Hello word!</h1>
      <GalleryCard />

    </main>
  )
}
