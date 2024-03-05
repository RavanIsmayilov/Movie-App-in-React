import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import "./card.css"


const Card = ({data , onClick}) => {
    const handleClick = () => {
        onClick(data)
    }


return(

    <div className="card" onClick={handleClick}>
        <img className="card-img" src={SMALL_IMG_COVER_BASE_URL + data.poster_path} alt={data.title} />
        <div className="card-info">
            <span>{data.title}</span>
            <p>{data.release_date}</p>
        </div>
    </div>
)}

export default Card
