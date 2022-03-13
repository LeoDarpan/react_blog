import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page requested does not exist.</p>
            <Link to="/">Go back to homepage...</Link>
        </div>
     );
}
 
export default NotFound;