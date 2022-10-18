import React from "react";
import {Helmet} from "react-helmet";

const  Application = () => {
  
    return (
            <Helmet>
                <title>Yaseen portfolio</title>
                <meta property="og:title" content="The Rock" />
                <meta property="og:type" content="video.movie" />
                <meta property="og:image" content="https://raw.githubusercontent.com/yasinabdmahmood/react-portfolio/main/src/assets/images/y.png" />
            </Helmet>
    );
  
};

export default Application