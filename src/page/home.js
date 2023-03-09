import React from "react";
import Content from "../components";
import ReactLive2d from 'react-live2d';

const Home = () => {

    return (
        <>
           welcome <Content />
            <ReactLive2d
                ModelList = { ['Haru', 'heitaizi_2']}
                width={300}
                height={500}
            />
        </>
    )

}
export default Home;