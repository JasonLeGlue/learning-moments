import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate;

  return (
    <>
      <div className="logoNTitle">
        <p className="logo">&#128187;</p>
        <h2 className="title">Learning Moments</h2>
      </div>
      <ul className="navbar">
        <li>
          <Link to="/allPosts">All Posts</Link>
        </li>
        <li>
          <Link to="/myPosts">My Posts</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <Link to="/newPost">New Post</Link>
        </li>
        <li>
          <Link to="/favorite">Profile</Link>
        </li>
        {localStorage.getItem("learning_user") ? (
          <li>
            <Link
              to=""
              onClick={() => {
                localStorage.removeItem("learning_user");
                navigate("/login", { replace: true });
              }}
            >
              Logout
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
    </>
  );
};
