// router index.js
import Home from "../page/home";


const routers = [
    {
        path: '/',
        name: '主页',
        components: Home    // 引入pages文件下的页面
    }
]

export default routers;    // 将数组导出