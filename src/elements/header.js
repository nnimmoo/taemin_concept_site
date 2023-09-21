

import "../style/home.css"
import { useEffect } from "react";
import { gsap, Expo } from "gsap";
import { useRef } from "react";
import { Link } from "react-router-dom";
function Header() {

    const boxRef = useRef();

    useEffect(() => {
        gsap.to(boxRef.current, {
            duration: 3,
            scale: "1",
            y: "100px",
            size: "0px",
            ease: Expo.easeInOut,
            delay: 5.5,
        });
    });
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://unpkg.com/ionicons@5.0.0/dist/ionicons.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY < 70) {
                document.getElementsByClassName("navbar")[0].style.display = "block";
                document.getElementsByClassName("btn-container")[0].style.display = "none";
            } else {
                document.getElementsByClassName("navbar")[0].style.display = "none";
                document.getElementsByClassName("btn-container")[0].style.display = "block";
            }
        };
    }, []);

    return (
        <>
            <div className="navbar" ref={boxRef}>
                <Link to="/">
                    <p style={{ display: "inline", fontSize: "17px" }}>01</p> Home
                </Link>

                <Link to="/About">
                    <p style={{ display: "inline", fontSize: "17px" }}>02</p> About
                </Link>
                <Link to="/Discography">
                    <p style={{ display: "inline", fontSize: "17px" }}>03</p> Discography
                </Link>
                <Link to="/Contact">
                    <p style={{ display: "inline", fontSize: "17px" }}>04</p> Contact
                </Link>
            </div>

            <div className="btn-container">
                <Link to="/menu">
                    <ion-icon name="radio-button-on-sharp"></ion-icon>
                </Link>


            </div>
        </>
    );
}

export default Header;
