import "../style/disco.css";
import Slideshow from "../elements/carousel";
import data from '../scripts/discographies.json';

// import { useState } from "react";


// let sliderProps= data.discography[0];

// function Updater(dataNum){

//     let [value, setState] = useState(true);
//     // count= count+1;
//     sliderProps = data.discography[dataNum]
//     return () => setState(!value);
// }

// export default function Discography() {

//     const addSlider = event => {
//         console.log(data.discography[event.currentTarget.id]);
//         updater(event.currentTarget.id);
//         // let mainContainer = React.createElement("div", {}, <Slideshow props={data.discography[event.currentTarget.id]} /> );
//         // ReactDOM.render(mainContainer, document.getElementById("root"));
//     };

//     return (
//         <>
//             <div className="catalogue">
//                 <div className="text">
//                     <ul>
//                         <li id='1' onClick={addSlider}>Ace</li>
//                         <li id='2' onClick={addSlider}>Press It</li>
//                         <li id='3' onClick={addSlider}>Move</li>
//                         <li id='4' onClick={addSlider}>taemin</li>
//                         <li id='5' onClick={addSlider}>want</li>
//                         <li id='6' onClick={addSlider}>Never gonna dance again</li>
//                         <li id='7' onClick={addSlider}>never gonna dance again pt2</li>
//                         <li id='8' onClick={addSlider}>advice</li>
//                     </ul>
//                 </div>
//             </div>
//             <Slideshow props= {sliderProps}/>
//         </>
//     );
// }


// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// let count = data.discography[0];
// let txt = 0;

// function useForceUpdate(num) {
//     let [value, setState] = useState(true);
//     txt = txt + num;
//     count = data.discography[num];
//     console.log(count.name);
//     return () => setState(!value);
// }


// export default function Discography() {
//     return (
//         <div>
//             <div className="catalogue">
//                 <div className="text">
//                     <ul>
//                         <li id='1' onClick={useForceUpdate(1)}>Ace</li>
//                         <li id='2' onClick={useForceUpdate(2)}>Press It</li>
//                         <li id='3' onClick={useForceUpdate(3)}>Move</li>
//                         <li id='4' onClick={useForceUpdate(4)}>taemin</li>
//                         <li id='5' onClick={useForceUpdate(5)}>want</li>
//                         <li id='6' onClick={useForceUpdate(6)}>Never gonna dance again</li>
//                         <li id='7' onClick={useForceUpdate(7)}>never gonna dance again pt2</li>
//                         <li id='8' onClick={useForceUpdate(8)}>advice</li>
//                     </ul>
//                 </div>
//             </div>
//             <h1>{txt} times clicked</h1>
//             <Slideshow props={count} />
            
//         </div>
//     );
// }


//vol3


import React, { useState } from "react";
import ReactDOM from "react-dom";



export default function Discography() {
    const [count, setCount] = useState(data.discography[0]);
    return (
        <div>
            <div className="catalogue">
                <div className="text">
                    <ul>
                        <li id='1' onMouseEnter={() => setCount(data.discography[1])}>Ace</li>
                        <li id='2' onMouseEnter={() => setCount(data.discography[2])}>Press It</li>
                        <li id='3' onMouseEnter={() => setCount(data.discography[3])}>Move</li>
                        <li id='4' onMouseEnter={() => setCount(data.discography[4])}>taemin</li>
                        <li id='5' onMouseEnter={() => setCount(data.discography[5])}>want</li>
                        <li id='6' onMouseEnter={() => setCount(data.discography[6])}>Never gonna dance again</li>
                        <li id='7' onMouseEnter={() => setCount(data.discography[7])}>never gonna dance again pt2</li>
                        <li id='8' onMouseEnter={() => setCount(data.discography[8])}>advice</li>
                    </ul>
                </div>
            </div>
           
            <Slideshow props={count} />
            
        </div>
    );
}