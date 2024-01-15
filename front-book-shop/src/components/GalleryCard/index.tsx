import Card from "../Card";
import img from "../../../public/img/1.png"
import img2 from "../../../public/img/2.png"

const GalleryCard = () => {
  const cardImage = {
    imgData: img,
    width: 100,
    height: 100,
  }
  const cardImage2 = {
    imgData: img2,
    width: 100,
    height: 100,
  }
  return (
    <main>
      <Card image={cardImage} paragraph='asdasdasd' title='Books leaf' />
      <Card image={cardImage2} paragraph='asdasdasd' title='Books on the table' />
    </main>
  );
}

export default GalleryCard