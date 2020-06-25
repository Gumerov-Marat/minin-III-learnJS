import {Component} from "../core/component.js";

class HeaderComponent  extends Component {
  constructor(id) {
    super(id)
  }
  init() {
    const btn = this.$el.querySelector('.js-header-start')
    btn.addEventListener('click', buttonHeandler.bind(this))
    
  }
}

function buttonHeandler() {
  this.hide()
}