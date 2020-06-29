import './index.scss'
import {HeaderComponent} from './components/header.component'
import {NavigationComponent} from "./components/navigation.component";

//----------------------------------------------------------------------------
// ВАЖНАЯ СТРОКА ДЛЯ ИМПОРТА ФАЙЛОВ В БИЛД НЕ УДАЛЯТь
require.context('./', true, /\.(png|svg|jpg|gif)$/);
//-----------------------------------------------------------------------------

const header = new HeaderComponent('header')
console.log(header)

const navigation = new NavigationComponent('navigation')
