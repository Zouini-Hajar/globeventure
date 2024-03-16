import { Avatar, Button, Dropdown, Typography } from "antd";
import { ReactComponent as Logo } from '../../images/logo.svg';
import { MdLogout } from "react-icons/md";
import { IoBookmarksOutline } from "react-icons/io5";
import React from "react";
import './header.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../configs/firebaseConfig";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";

const { Text } = Typography;

const Header = ({ setShowSaved }) => {
    const [user] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
    };

    const showSaved = () => {
        setShowSaved(true);
    };

    const items = [
        {
            key: '1',
            label: (
                <Text onClick={showSaved}><IoBookmarksOutline /> Saved</Text>
            ),
        },
        {
            key: '2',
            label: (
                <Text onClick={logOut}><MdLogout /> Log Out</Text>
            ),
        }
    ];

    return (
        <header>
            <Logo />
            {!user ?
                <div>
                    <Button type="text" shape="round">
                        <Link to='/auth'>Log In</Link>
                    </Button>
                    <Button type="primary" shape="round">
                        <Link to='/auth'>Sign Up</Link>
                    </Button>
                </div> :
                <div>
                    <Text strong style={{ marginRight: '0.5rem' }}>{user.displayName}</Text>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="bottomRight"
                        arrow
                    >
                        <Avatar size='large' src={user.photoURL} />
                    </Dropdown>
                </div>}
        </header>
    );
}

export default Header;