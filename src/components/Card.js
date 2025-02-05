import './Card.css';
import Button from './Button';

const Card = ({ id, image, title, age, tags, description, category }) => {
    return (
        <div className='card'>
            <img src={image} alt={title}></img>
            <h2>{title}</h2>
            <p>{description}</p>
            <div>
                <Button className="btn"/>
                <Button className="btn"/>
            </div>
        </div>
    );
};

export default Card;
