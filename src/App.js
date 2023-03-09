import React from 'react';
import routers from './router';    // 路由文件
import {Routes, Link, Route} from 'react-router-dom';    // 路由插件
const App = () => (
    <div className="App App-header">
        <Routes>
            {
                routers.map(
                    (item, index) => (
                        <Route path={item.path} key={index} element={<item.components/>}></Route>
                    )
                )
            }
        </Routes>
    </div>
);
export default App;