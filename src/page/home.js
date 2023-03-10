import React from "react";
import Content from "../components";
import ReactLive2d from '../react-live2d';
/* eslint-disable */
// eslint-disable-next-line vue/no-setup-props-destructure
const Home = () => {
    return (
        <>
           welcome <Content />
            <ReactLive2d
                ModelList = { ['Haru']}
                width={300}
                motion='f01'
                height={500}
            />
        </>
    )

}
export default Home;