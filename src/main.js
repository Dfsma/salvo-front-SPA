
import './css/style.css';
import './css/game.css'

import {router} from './router/index.routes'

router(window.location.hash);
window.addEventListener("hashchange", () => {
    router(window.location.hash);
})