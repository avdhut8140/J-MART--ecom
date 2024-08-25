import { Link, useLocation } from "react-router-dom";

function Catagorybar() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/home'
    return <>
    <div className="category border w-100 d-flex gap-5 p-1 overflow-auto">

        <li>
          <Link className="a" to = {isLandingPage ? 'menpage' : '/menspage'}>Men</Link>
        </li>
        <li>
          <Link className="a" to='/womenspage'>Women</Link>
        </li>
        <li>
          <Link className="a" to='/mobilespage'>Mobiles</Link>
        </li>
        <li>
          <Link className="a" to='/tvpage'>Tv's</Link>
        </li>
        <li>
          <Link className="a" to='/acpage'>AC</Link>
        </li>
        <li>
          <Link className="a" to='/groceriespage'>Groceries</Link>
        </li>
        <li>
          <Link className="a" to='/computerspage'>Computers</Link>
        </li>
       
        <li>
          <Link className="a" to='/watchespage'>Watches</Link>
        </li>
        <li>
          <Link className="a" to='/bookspage'>Books</Link>
        </li>

        
    </div>
    
    
    
    </>
}

export default Catagorybar;