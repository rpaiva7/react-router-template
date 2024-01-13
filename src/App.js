
import { MainContainer } from "./style"
import Router from "./Router1/router"
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <MainContainer>
      <Router />
    </MainContainer>
  )
}

export default App;

//Quando começar um projeto do zero montar o router junto com as pastas primeiro, e depois começa a montar e estilizar as páginas. 

//O Route substitui o href e o switch case e permite trocar de página digitando o endereço da página diretamente na URL. O useNavigate permite essa troca de página, alteração de URL, ao clicar e interagir dentro do site.  

// O coordinator define qual será a URL, e a URL define qual será o componente chamado. Eu vou ter uma função que define qual será a URL, e à partir dessa URL ela vai definir qual será o componente. à partir do useNavigate a gente acessa a URL, mudando a URL a gente acessa o nosso componente.

/* Navegação com React Router 

# Rotas 

Rota é um termo utilizado para se referir a um conjunto de endereço e valor. Por exemplo:

"Vá até a Rua Nascimento Silva, 107, Ipanema. Você encontrará a casa do Tom Jobim."

Trazendo para o nosso contexto, pensando na URL:

"Acesse site.com.br/login. Você encontrará a página de login."

No começo do curso, com HTML + JS, nós mudávamos de página usando a tag `<a>` e passando um atributo `href` para ela. Esse atributo `href` correspondia a um arquivo HTML, e era possível trocar entre as páginas pela rota na barra de endereços do navegador.

No React, a solução que estávamos usando até agora para trocar de página era a renderização condicional, onde decidimos qual página renderizar com base em algum parâmetro do estado.

Mas gerenciar componentes com estado desta forma é chato e trabalhoso

=> Solução: React Router 🌟

# React Router

O React Router é uma Biblioteca para o React que simula comportamento de rotas na nossa aplicação. Ela fará o gerenciamento das rotas para a gente, mapeando cada rota para um componente

Exemplo: "/login" ⇒ LoginPage (/Login é o endereço e LoginPage é o valor)

Entre as vantagens de utilizar o React Router, estão:

- Gestão de múltiplas páginas simplificada, sem gerenciamento direto de estado;
- Possibilidade de acessar páginas específicas diretamente através da URL;
- Acesso ao histórico do navegador

Como o react router é uma biblioteca, precisamos instalá-la. Fazemos isso executando o seguinte comando na raiz do projeto:

npm install react-router-dom

# Componentes do Router

A biblioteca nos disponibiliza componentes para facilitar o uso da lógica de roteamento. Temos três componentes principais:

- BrowserRouter
- Routes
- Route

### BrowserRouter

BrowserRouter é um componente, responsável por "abrigar" e gerenciar todas as rotas. Ele funciona em conjunto com outros componentes react-router:

<BrowserRouter>

   {Aqui dentro vai tudo que for usar da biblioteca}

// </BrowserRouter>

/* ### Routes

É o componente responsável por permitir que apenas uma rota seja renderizada por vez. No Routes, todas as rotas ficam dentro deste componente. Seu comportamento é semelhante ao do switch/case.

### Route

Route é o componente responsável por definir uma rota em nossa aplicação. Uma Route deve estar dentro do Routes dentro de BrowserRouter. Uma Route recebe uma prop path, que tem a URL à qual aquela rota corresponde.

A Route recebe o componente através da props element, e o componente é renderizado quando o path coincidir com a URL.

Exemplo: */

/* <BrowserRouter>
  <Routes>
    <Route index element= (<Home />) />
    <Route path ="teams" element = {<Teams />} />
  </Routes>
</BrowserRouter> */


/* ## Juntando as peças

Tendo estes três componentes, temos a seguinte disposição:

- Cada <Route /> recebe como props element a página que deve aparecer;
- recebe também a props path, com a URL da página;
- <BrowserRouter> e <Routes> envolvem todas as rotas

# Hooks do React Router

As bibliotecas também podem ter seus próprios hooks.

Vamos ver hoje dois hooks do React Router:

- useNavigate
- useParams

## useNavigate

A função navigate, existente no react-router nos permite trocar a página atual. Infelizmente não temos acesso fácil a ela dentro da nossa página HomePage. Para facilitar, foi criado o hook useNavigate, que nos permite acessar o histórico dentro de qualquer componente funcional.

O exemplo abaixo está sendo usado no nosso componente HomePage

import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate()
    return <div> Home</div>
}

A função navigate pode receber alguns parâmetros:

- navigate("/rota"); ⇒ vai para página indicada;
- navigate(-1) ⇒ retorna para a última página;
- navigate("/rota", {replace:true}) ⇒ troca de página impedindo que o usuário volte

O exemplo abaixo usa a função navigate("/rota")

import ( useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  const goToAboutPage = () => {
    navigate("/sobre")
  }
return (
  <div>
  <p>Home</p>
  <button onClick={goToAboutPage}>Sobre</button>
  </div>
  )
}
  
  ## Path Params

Antes de vermos como o hook useParams() funciona, precisamos entender qual problema ele resolve.

Vocês já devem ter observado que em vários sites, a URL é utilizada para guardar informações sobre a página.

https://facebook.com/post/ID_DO_POST

A grande vantagem de termos dados "salvos" na URL é que se o usuário atualiza a página, a URL vai se manter a mesma então podemos usar essas infos.

Exemplo: se tivermos uma rota "/postDetails", perderemos o id ao atualizar

Se tivermos uma rota: "/postDetails/ID_DO_POST", o id permanecerá na URL mesmo que a página atualize.

Aliás, vocês já usaram Path Params antes sem saber! 👻

Lembrem das APIs no Postman. Muitas tinham uma parte da URL que vocês tinham que substituir por ":turma-nome-aluno". Os : indicam que é um pathParam

Ao substituir o nome na URL, você estão passando uma variável para o backend.

Utilizamos path params nas nossas rotas!

Lembrando, é no componente <Route> que definimos uma rota

<Route path="sobre/:linguagem" element={<AboutPage />} />

Com a rota alterada para receber path params, o próximo passo é alterar a lógica que fizemos mais cedo.

const navigate = useNavigate()

const goToAboutPage = () => {
  navigate("/sobre/portugues")
}

Agora, com as informações sendo passadas, podemos fazer o uso do hook useParams()

import { useParams } from "react-router-dom";

export const AboutPage = () => {
  const pathParams = useParams();

  return (
    <div>
    <p>Sobre</p>
    <p>Linguagem: {pathParams.linguagem}</p>
    </div>
  );
}

## Observação sobre o surge

Quando usamos o Router, para subir o site usando o surge, precisamos dar os 4 comandos abaixo:

npm run build
cd build
cp index.html 200.html
surge

# Boas práticas no Router

- Cada rota deve mapear para uma página
- Como não temos conceito de página em React, trataremos ele como um componente grandão que ocupa a tela inteira
- Esses componentes são nomeados de forma a deixar claro que são páginas: LoginPage, FeedPage
- Podemos ter um componente de Router próprio que contém a lógica de roteamento (componentes do React Router)
- Dessa forma, temos uma noção rápida de onde os dados vêm e como a nossa árvore de componentes está organizada

## router coordinator

Crie um um componente que coordene as mudanças de páginas, centralizando as funções:

export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToAboutPage = (navigate, language) => {
  navigate(`/about/${language}`);
};

export const goBack = (navigate) => {
  navigate(-1);
};

  */







