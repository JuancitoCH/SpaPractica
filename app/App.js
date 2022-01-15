import api from './helpers/wp_api.js'
import { ajax } from './helpers/ajax.js'
import { Title } from './components/Title.js'
import { Loader } from './components/Loader.js';
export function App(){
    const d= document,
    $root = d.getElementById("root");
    $root.appendChild(Title())
    $root.appendChild(Loader())








    // document.getElementById('root').innerHTML='<h1>Test</h1>'
    
    // ajax({
    //     a:"aaa",
    //     url:api.POSTS,
    //     // la data que paso si es que tuvo exito
    //     cbSuccess: (posts)=>{
    //         console.log(posts)
    //     }
    
    // })
    // console.log(api)
}