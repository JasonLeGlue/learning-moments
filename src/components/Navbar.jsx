import "./Navbar.css"

export const Navbar = () => {
    return (
        <>
            <div className="logoNTitle">
                <p className="logo">&#128187;</p>
                <h2 className="title">Learning Moments</h2>
            </div>
            <div className="navbar">
                <a>All Posts</a>
                <a>My Posts</a>
                <a>Favorites</a>
                <a>New Post</a>
                <a>Profile</a>
                <a>Logout</a>
            </div>
        </>
    )
}