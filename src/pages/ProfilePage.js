import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { goToPersonPage } from "../Router1/coordinator";
import { MainContainer } from "../style";

export const pessoas = [{
    id:1,
    nome:"kakarotto",
    imagem:"https://i.pinimg.com/originals/e5/49/3e/e5493e7d320bdb658d46053814c7d930.gif"
  }, {
    id:2,
    nome:"Raditz",
    imagem:"https://64.media.tumblr.com/85abc28c1398599e0277117c376c7721/caf7dc38378945d2-24/s540x810/3926065d0bf7b88fe4d5c7ba887b876ef0c431be.gif"
  }, {
    id:3,
    nome:"bardock",
    imagem:"https://pa1.aminoapps.com/6243/cc8b0cd485d7c4f421246e6adefa2625eba0c21a_hq.gif"
  }];

function ProfilePage(){

  const navigate = useNavigate()

  return (
    <MainContainer>
      <Header />
      <h1>Página de Perfil</h1>
      {pessoas.map((pessoa)=>{
        return(
          <p 
          onClick={()=>goToPersonPage(navigate,pessoa.nome)}
          >{pessoa.nome} </p>
        )
      })}
    </MainContainer>
  );
}

export default ProfilePage;

//Aqui eu quero ir pra página de cada pessoa através de variáveis pela minha URL, e não por props ou várias props.