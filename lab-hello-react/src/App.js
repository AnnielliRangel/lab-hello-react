import "./App.css";
import logo from "./Images/ironlogo.png";
import menu from "./Images/menutop.png";
import card1 from "./Images/icon1.png";
import card2 from "./Images/icon2.png";
import card3 from "./Images/icon3.png";
import card4 from "./Images/icon4.png";

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
        <div className="card1">
          <img src={card1} alt="declarative icon" className="card-img" />
          <h1>Declarative</h1>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="card2">
          <img src={card2} alt="components icon" className="card-img"/>
          <h1>Components</h1>
          <p>Built encapsulated components that manege their state.</p>
        </div>
        <div className="card3">
          <img src={card3} alt="simple-way icon" className="card-img" />
          <h1>Single-way</h1>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="card4">
          <img src={card4} alt="JSX icon" className="card-img" />
          <h1>JSX</h1>
          <p>Statically typed designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
