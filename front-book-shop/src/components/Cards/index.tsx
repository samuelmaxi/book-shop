import Image from "next/image";
import styled from "styled-components"

const Wrapper = styled.p`
  background-color: red;
`;



const Card = () =>{
  return(
    <Wrapper>
      <div className="">
        <div>
          <Image src="" alt="foto da capa do livro codigo limpo" width={200} height={200}/>
        </div>
        <div>
          <h2></h2>
        </div>
        <div>
          <p>asdas</p>
        </div>

      </div>
    </Wrapper>
  )
}


export default Card