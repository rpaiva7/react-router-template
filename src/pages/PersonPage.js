import Header from "../components/Header";
import { MainContainer } from "../style";
import styled from "styled-components"
import { useParams } from "react-router-dom";
import { pessoas } from "./ProfilePage";


const Imagem = styled.img` 
  height: 500px;
  width: 500px;
`

function PersonPage() {

    const params = useParams();

    const findPerson = pessoas.find((pessoa=> pessoa.nome === params.nome))

    console.log("findPerson",findPerson);
   
    return (
        <MainContainer>
            <Header />
            <h1>Pagina de Pessoa</h1>
            <div>
                <Imagem src={findPerson.imagem}/>
            </div>
        </MainContainer>
    );
}

export default PersonPage;


//O hook useParams nos permite passar informações de um elemento para outro através da URL, e não mais através de props

//Ex.1 Estou no site do ifood. Quando eu clico em um restaurante ele me mostra todos os produtos. Ex.2 Acessei o facebook. Clico na pessoa, da pessoa vou pro perfil da pessoa. A minha URL mostrará que estou no perfil da pessoa. Tudo isso acontece através do hook useParams