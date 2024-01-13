
export const goToProfile = (navigate) => {
    navigate("/profile");
}

export const goToHome = (navigate) => {
    navigate("/");
}

export const goBack = (navigate) => {
    navigate(-1);
}

//Aqui, além do navigate precisei passar um nome como parâmetro e precisei transformar o nome da minha URL em template string porque será uma variável. Após isso eu preciso chamar essa função goToPersonPage onde eu estou fazendo o map de cada nome, que nesse caso é no componente ProfilePage
export const goToPersonPage = (navigate,nome) =>{
    navigate(`/profile/${nome}`);
}




//No coordinator eu insiro todas as funções que usam o hook navigate. Uso o coordinator para exportar as funções para outras páginas. 
// Centralizando as funções aqui eu consigo reaproveitá-las em outras páginas do meu código, mas não consigo chamar o hook navigate aqui, pois todo hook só pode ser chamado dentro de uma função
// Ex. Se eu quiser chamar a função goBack na HomePage, na ProfilePage, na ErrorPage e em qualquer outra página eu saberei que essa e todos as outras funções estarão no meu coordinator, para reaproveitá-las em várias páginas e lugares do meu código, mas não consigo chamar o hook aqui dentro
//Pra não chamar o hook aqui dentro eu passo o elemento que estou criando o hook por parâmetro para essas funções, nesse caso o navigate