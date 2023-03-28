import {Component} from 'react';
import {createRoot} from 'react-dom/client';
import React from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import Create from "@/src/pages/create";
export const BASE_URL='http://127.0.0.1:8000';
import List from "@/src/pages/List";
import Edit from "@/src/pages/Edit";

class App extends Component{
    render(){
        return <HashRouter>
            <Routes>
                <Route path='/' element={<List/>}/>
                <Route path='/create' element={<Create/>} />
                <Route path='/edit/:id' element={<Edit/>} />


            </Routes>

        </HashRouter>
    }
}
const root=createRoot(document.getElementById('app'));
root.render(<App/>)

// export class BASE_URL {
// }
