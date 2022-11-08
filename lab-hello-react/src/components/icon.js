function Icon(props) {
  return (
    <div>
      <img src={props.imagem} alt={props.legend} className="img-cards" />
      <h2 className="h-cards">{props.title}</h2>
      <p className="p-cards">{props.text}</p>
    </div>
  );
}

export default Icon;
