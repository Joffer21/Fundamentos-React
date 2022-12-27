import ReactDOM from 'react-dom'
import './index.css'

import Primeiro from './Components/basico/Primeiro'
import ComParametro from './Components/basico/ComParamentro'

ReactDOM.render(
    <div id='app'>
       <Primeiro></Primeiro>
       <ComParametro 
            titulo ="Situação do Aluno" 
            aluno ="Pedro Silva" 
            nota={8.3} />
    </div>,
    document.getElementById('root')    
)