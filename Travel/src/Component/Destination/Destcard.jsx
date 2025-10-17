import { Link } from "react-router-dom";
import "./Destcard.css"
function Destcard(props){
    return(
        <>
        <div className="Destcard">
            <img src={props.image} alt="" />
            <h3>{props.Plsname}</h3>
            <p>{props.details}</p>
            <Link to="/Booking"><button>Book Now</button></Link>
        </div>
        </>
    );
}
export default Destcard