import { Link } from "react-router-dom";
function Navbar() {
  const handleLogout=()=>{
            localStorage.removeItem("token");
            console.log("Logged out Sucesfully")
        }
  return (
    <nav>
      <h2> Student Task Portal</h2>
      <div className="nav-links">
        <Link to={"/"}>Dashboard</Link>
        <Link to={"/tasks"}>Tasks</Link>
        <button onClick={handleLogout}>
          logout
        </button>
      </div>
    </nav>
  );
}
export default Navbar;