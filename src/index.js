import { App } from './app';
import DOM from 'react-dom';
import { createElement as html } from 'react'
import { Clock } from './clock';
import { Schedule } from './schedule';

window.addEventListener('load', () => {
  let $app = document.querySelector('#app')
  let $clock = document.querySelector('#clock')
  let $schedule = document.querySelector('#schedule')

  DOM.render(html(Clock), $clock)
  DOM.render(html(Schedule), $schedule)

  new App($app)
})