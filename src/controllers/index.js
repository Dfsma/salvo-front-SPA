import Home from './home.controller'
import Games from './games.controller'
import Game from './game.controller'
import notFound from './404.controller'


const pages = {
    home: Home,
    games: Games,
    game: Game,
    notFound: notFound


}

export {pages};