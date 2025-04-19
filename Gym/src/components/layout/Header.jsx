import { useState } from "react";
import { CiCircleChevDown } from "react-icons/ci";
import { CgGym } from "react-icons/cg";
import { TiArrowSortedDown } from "react-icons/ti";

export const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    return (
        <div className="container1 head1">
            <div className="section_header">
                <nav className="navbar1">
                    <div className="logo1">
                        <a href="#"><CgGym /></a>
                    </div>
                    <ul className="nav-links1">
                        <li><a href="#heroId">Home</a></li>
                        <li><a href="#servicesId">Features</a></li>
                        <li><a href="#offerId">Services</a></li>
                        <li><a href="#aboutId">About</a></li>
                    </ul>
                    <button
                        className="btn btn-outline-light hamburgerIcon1"
                        onClick={toggleMenu}
                    >
                        <TiArrowSortedDown />
                    </button>
                </nav>
                <ul className={`hamburgerMenu ${isMenuActive ? 'active' : ''}`}>
                    <li><a href="#heroId">Home</a></li>
                    <li><a href="#servicesId">Features</a></li>
                    <li><a href="#offerId">Services</a></li>
                    <li><a href="#aboutId">About</a></li>
                </ul>
            </div>
        </div>
    );
};
