import './index.scss'
import {HeaderComponent} from './components/header.component'

//----------------------------------------------------------------------------
// ВАЖНАЯ СТРОКА ДЛЯ ИМПОРТА ФАЙЛОВ В БИЛД НЕ УДАЛЯТь
require.context('./', true, /\.(png|svg|jpg|gif)$/);
//-----------------------------------------------------------------------------

const header = new HeaderComponent('header')
console.log(header)


