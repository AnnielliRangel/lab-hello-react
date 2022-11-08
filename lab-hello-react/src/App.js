import "./App.css";
import logo from "./Images/ironlogo.png";
import menu from "./Images/menutop.png";
import card1 from "./Images/icon1.png";
import card2 from "./Images/icon2.png";
import card3 from "./Images/icon3.png";
import card4 from "./Images/icon4.png";
import Icon from "./components/icon";

function App() {
  return (
    <div className="App">
      <div className="main">
        <bar className="barra">
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt="logo da Ironhack em cores brancas" className="nav1"/>
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" alt="barra de menu de navegação" className="nav" />
        </bar>
        <div className="principal">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </p>
          <button className="botao">Awesome!</button>
        </div>
      </div>
      <div className="cards">
        <Icon imagem={card1} legend= "Declarative icon" title="Declarative" text= "React makes it painless to create interactive UIs." />
        <Icon imagem={card2} legend= "Components icon" title="Componets" text="Built encapsulated components that manege their state." />
        <Icon imagem={card3} legend= "Simple-Way icon" title="Single-Way" text= "A set of immutable values are passed to the component's." />
        <Icon imagem={card4} legend= "JSX icon" title="JSX" text="Statically typed designed to run on modern browsers." />
      </div>
    </div>
  );
}

export default App;
