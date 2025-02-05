import "./Button.css"

const Button = ({icon, switchFilm}) => {
    return <button onClick={switchFilm} className="btn">{icon}</button>;
};

export default Button;
