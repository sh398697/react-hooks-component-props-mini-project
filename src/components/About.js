import React from "react";

function About(props) {
    
    const imgSrc = props.image ? props.image : "https://via.placeholder.com/215";

    return (
        <div className="About">
            <aside>
                <img src={imgSrc} alt="blog logo" />
                <p>{props.about}</p>
            </aside>
        </div>
  );
}

export default About;
