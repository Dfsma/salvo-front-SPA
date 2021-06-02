import {pages} from '../controllers/index'

let content = document.getElementById('root');
let id = 1;
const router = async (route) => {
    content.innerHTML = '';
    switch (route) {
        case '#/': {
            return content.appendChild(pages.home());
        }  
        case '#/games':
            return content.appendChild(await pages.games());
            
        case '#/game':
            return content.appendChild(await pages.game());
            
        default:
           
            
    }
    
}

export {router};