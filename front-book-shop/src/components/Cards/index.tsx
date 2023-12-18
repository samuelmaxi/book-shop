import Image from "next/image";
import styled from "styled-components"
import image from "../../../public/img/Codigo_Limpo-scaled.webp"

const CardImageStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    min-width: 150px;
    width: 200px;
    background-color: green;
`;

const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: flex-start;
    min-width: 150px;
    width: 200px;
    background-color: red;
    padding: 10px;
    border-radius: 10px;
    background-color: white;
    font-family: sans-serif;
    background: red;
    box-shadow: 0 0 10px rgba(0,0,0,0.);
`

const CardParagraphStyled = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 1.2rem;
    max-height: 5rem;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`

const Card = () => {

  return (
    <CardStyled>

      <CardImageStyled>
        <div>
          <Image src={image} alt="foto da capa do livro codigo limpo" width={147} height={156} />
        </div>
      </CardImageStyled>
      <div>
        <h2>Card</h2>
      </div>
      <CardParagraphStyled>
        asdasLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </CardParagraphStyled>

    </CardStyled>
  )
}


export default Card