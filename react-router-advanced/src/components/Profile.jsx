import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="p-4">
            <h1>Profile Page</h1>
            <nav>
                <Link to="details">Profile Details</Link>
                <Link to="settings">Profile Settings</Link>
            </nav>
            <hr />
            {/* Outlet is where nested child routes are rendered */}
            <Outlet />
        </div>
    );
}

export default Profile;