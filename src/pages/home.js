import { useEffect } from "react";
import { gsap, Expo } from "gsap";

import { useRef } from "react";

import "../style/home.css"
import Footer from "../elements/footer";
import anime from "animejs";
import wKorea from '../assets/imgs/home/wKorea.gif'
import advice from "../assets/imgs/home/home-advice.jpg"
import youtube from "../assets/imgs/logos/youtube.png"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Home() {

    const el = useRef();
    const q = gsap.utils.selector(el);

    useEffect(() => {

        var textWrapper = document.querySelector("#title-one");
        textWrapper.innerHTML = textWrapper.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
        );

        anime.timeline().add({
            targets: "#title-one .letter",
            translateY: [-200, 0],
            easing: "easeOutExpo",
            duration: 1400,
            delay: (els, i) => 6500 + 30 * i,
        });

        textWrapper = document.querySelector("#title-sec");
        textWrapper.innerHTML = textWrapper.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
        );

        anime.timeline().add({
            targets: "#title-sec .letter",
            translateY: [-400, 0],
            easing: "easeOutExpo",
            duration: 1400,
            delay: (el, i) => 6500 + 30 * i,
        });



        gsap.fromTo(q(".container > .block"), {
            y: "150%"
        }, {
            duration: 2,
            y: "0%",
            ease: Expo.easeInOut,
            delay: 1,
            stagger: 0.4
        });

        gsap.to(q(".overlay"), {
            duration: 0.5,
            y: "180%",
            height: "0%",
            z: "-1",
            ease: Expo.easeInOut,
            delay: 5.2,
        });

        gsap.to(q(".container"), {
            duration: 2,
            scale: "2",
            y: "60%",
            size: "0px",
            height: "70vh",
            width: "30vw",
            ease: Expo.easeInOut,
            delay: 5.5,
        });

    }, []);

    return (
        <>
            <div className="mainbody" ref={el}>
                <div className="con" id="first">
                    <div className="container">
                        <div className="block b-1"></div>
                        <div className="block b-2"></div>
                        <div className="block b-3"></div>
                        <div className="block b-4"></div>
                        <div className="block b-5"></div>
                        <div className="block b-6"></div>
                        <div className="block b-7"></div>
                    </div>

                    <div className="overlay"></div>
                    <p className="title" id="title-one">THE ACE</p>
                    <p className="title" id="title-sec">taemin</p>

                </div>

                <div className="con" id="second">
                    <div className="slide">
                        <hr />
                        <h1 className="sec-Con-Header">THE ONE AND ONLY ♠ THE ONE AND ONLY ♦ THE ONE AND ONLY ♣ THE ONE AND ONLY ♥</h1>
                        <hr />
                    </div>
                    <div className="popup" id="I">
                    <AnimationOnScroll initiallyVisible={false} animateIn="animate__fadeInLeft"  animateOnce={true}>
                        
                            <img src={wKorea} alt="WKOREA" />
                            <div className="img-footer">
                                <p>TAEMIN X WKOREA</p>

                            </div>
                        
                    </AnimationOnScroll>
                    </div>

                    <div className="decor-recta">
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                            sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.<br />
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                        </p>
                    </div>
                    <div className="popup" id="II">
                    <AnimationOnScroll initiallyVisible={false} animateIn="animate__fadeInRight"  animateOnce={true}>
                   
                        <div className="pop-link">
                            <img src={youtube} alt="youtube" />
                            <p><strong>Taemin 'Advice'</strong> <br /> official Music Video</p>
                        </div>
                        <img id="II-img" src={advice} alt="advice-perfomace" />
                    
                    </AnimationOnScroll>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
