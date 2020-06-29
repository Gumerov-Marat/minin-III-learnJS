import './index.scss'
import {HeaderComponent} from './components/header.component'
import {NavigationComponent} from "./components/navigation.component"
import {Createcomponent} from './components/create.component'
import {Favoritecomponent} from "./components/favorite.component"
import {Postcomponent} from "./components/post.component";



//----------------------------------------------------------------------------
// ВАЖНАЯ СТРОКА ДЛЯ ИМПОРТА ФАЙЛОВ В БИЛД НЕ УДАЛЯТь
require.context('./', true, /\.(png|svg|jpg|gif)$/);
//-----------------------------------------------------------------------------

const header = new HeaderComponent('header')
console.log(header)

const navigation = new NavigationComponent('navigation')

const posts = new Postcomponent('posts')
const create = new Createcomponent('create')
const favorite = new Favoritecomponent('favorite')

// регистрация tabs
navigation.registerTabs([
  {name: 'create', component: create},
  {name: 'posts', component: posts},
  {name: 'favorite', component: favorite}
])
