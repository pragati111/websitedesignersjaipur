import React from "react";
import "./InfiniteScrollBar.css";

import img1 from "../../assets/images/01.PNG";
import img2 from "../../assets/images/02.PNG";
import img3 from "../../assets/images/03.PNG";
import img4 from "../../assets/images/04.PNG";
import img5 from "../../assets/images/05.PNG";
import img6 from "../../assets/images/06.PNG";
import img7 from "../../assets/images/07.PNG";
import img8 from "../../assets/images/08.PNG";
import img9 from "../../assets/images/09.PNG";
import img10 from "../../assets/images/10.PNG";

import img11 from "../../assets/images/11.PNG";
import img12 from "../../assets/images/12.PNG";
import img13 from "../../assets/images/13.PNG";
import img14 from "../../assets/images/14.PNG";
import img15 from "../../assets/images/15.PNG";
import img16 from "../../assets/images/16.PNG";
import img17 from "../../assets/images/17.PNG";
import img18 from "../../assets/images/18.PNG";
import img19 from "../../assets/images/19.PNG";
import img20 from "../../assets/images/20.PNG";

import img21 from "../../assets/images/21.PNG";
import img22 from "../../assets/images/22.PNG";
import img23 from "../../assets/images/23.PNG";
import img24 from "../../assets/images/24.PNG";
import img25 from "../../assets/images/25.PNG";
import img26 from "../../assets/images/26.PNG";
import img27 from "../../assets/images/27.PNG";
import img28 from "../../assets/images/28.PNG";
import img29 from "../../assets/images/29.PNG";
import img30 from "../../assets/images/30.PNG";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30];

const InfiniteScrollBar = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-track">

        {/* First set */}
        {images.map((img, index) => (
          <div className="scroll-item" key={"first-" + index}>
            <img src={img} alt="logo" />
          </div>
        ))}

        {/* Duplicate set for infinite effect */}
        {images.map((img, index) => (
          <div className="scroll-item" key={"second-" + index}>
            <img src={img} alt="logo" />
          </div>
        ))}



      </div>
    </div>
  );
};

export default InfiniteScrollBar;