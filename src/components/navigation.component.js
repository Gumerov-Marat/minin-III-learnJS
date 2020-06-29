import { Component } from "../core/component";

export class NavigationComponent extends Component {
  constructor(id) {
    super(id)
  }
  init (){
    console.log(this.$el);
    this.$el.addEventListener('click', tabClickHandler.bind(this))
  }
}

function tabClickHandler(event) {
  event.preventDefault()  //для удаления хеша в адсресной строке
  if(event.target.classList.contains('tab')){
    Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => {
      tab.classList.remove('active')
    })

    event.target.classList.add('active')
  }
}
