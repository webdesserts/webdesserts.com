import { ScrollPlane } from './scroll-plane'
import { IncrementalScroll } from './incremental-scroll'
import { progressPoint } from './utils'

export class App {
  constructor($root) {
    // bindings
    this.render = this.render.bind(this)
    this.handleArticleClick = this.handleArticleClick.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.pageLeft = this.pageLeft.bind(this)
    this.pageRight = this.pageRight.bind(this)

    this.articles = [ ]

    let $articles = $root.querySelectorAll('article')
    this.$main = $root.querySelector('main')
    for (let [i, $node] of $articles.entries()) {
      let previous = this.articles[i - 1]

      let left = previous ? previous.right : 0
      let width = $node.offsetWidth
      let center = left + width / 2
      let right = left + width

      this.articles.push({ $node, left, width, right, center })
    }

    let planeWidth = this.articles[this.articles.length - 1].right
    this.plane = new ScrollPlane($root, planeWidth) 
    this.render(0)
    this.plane.onChange(this.render)

    for (let { $node } of this.articles) {
      // click to navigate
      $node.addEventListener('click', this.handleArticleClick)
    }

    // scroll to navigate
    let incremental = new IncrementalScroll($root)
    incremental.onScrollLeft(this.pageLeft)
    incremental.onScrollRight(this.pageRight)

    // use arrows to navigate
    window.addEventListener('keydown', this.handleKeyDown)
  }

  handleArticleClick({ currentTarget }) {
    let article = this.find(currentTarget)
    this.plane.goTo(article.left)
  }

  handleKeyDown({ key }) {
    if (key === 'ArrowRight') this.pageRight()
    else if (key === 'ArrowLeft') this.pageLeft()
  }

  pageLeft() {
    let article = this.nearest(this.plane.x)
    let i = this.articles.indexOf(article)
    let previous = this.articles[--i]
    if (previous) { this.plane.goTo(previous.left) }
  }
  pageRight() {
    let article = this.nearest(this.plane.x)
    let i = this.articles.indexOf(article)
    let next = this.articles[++i]
    if (next) { this.plane.goTo(next.left) }
  }

  find($article) {
    return this.articles.find((article) => article.$node === $article)
  }

  nearest(x) {
    let minDiff = Infinity, nearest = null;

    for (let article of this.articles) {
      let diff = Math.abs(x - article.left)
      if (diff < minDiff) {
        minDiff = diff
        nearest = article
      }
    }

    return nearest
  }

  render(x) {
    this.$main.style.transform = `translateX(${-x}px)`
    for (let { $node, left, width } of this.articles) {
      // at what distance from the column should we start to fade it in?
      let progressStart = width * .75

      let diff = Math.abs(x - left)
      let progress = 1 - Math.min(diff, progressStart) / progressStart

      let scale = progressPoint(progress, .8, 1)
      let blur = progressPoint(progress, 2, 0)
      let opacity = progressPoint(progress, .2, 1)

      $node.style.transform = `scale(${scale})`
      $node.style.filter = `blur(${blur})`
      $node.style.opacity = opacity

      if (diff < 50) $node.classList.add('selected')
      else $node.classList.remove('selected')
    }
  }
}