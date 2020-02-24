//依赖包
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
//自定义组件
import Login from '../Login/Login'
import AdminIndex from '../AdminIndex/AdminIndex'
function Main(){
    return (
        <Router>      
            <Route path="/" exact component={Login} />
            <Route path="/index/"  component={AdminIndex} />
        </Router>
    )
}
export default Main