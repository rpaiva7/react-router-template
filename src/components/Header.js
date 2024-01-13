import { StyledHeader, StyledButton } from "../style";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack, goToHome, goToProfile } from "../Router1/coordinator";

const Imagem = styled.img`
height: 50px;
width: 50px;
`

function Header() {

  const navigate = useNavigate(); //Como eu não consigo chamar um hook fora de uma função, preciso importar as funções que estão no meu coordinator pra cá e passar essa variável navigate, que é o meu hook, por (parâmetro) para as funções do coordinator e para o JSX abaixo


  return (
    <StyledHeader>
      <StyledButton onClick={() => goToHome(navigate)}>
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={() => goToProfile(navigate)}>
        Ir para página de perfil
      </StyledButton>
      <div onClick={() => goBack(navigate)}>
        <Imagem src="https://cdn-icons-png.flaticon.com/512/93/93634.png"/>
      </div>
    </StyledHeader>
  );
}

export default Header;
