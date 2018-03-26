let $articles = document.querySelectorAll('main > article');
let $main = document.querySelector('main');

window.addEventListener('load', () => new App(document.body))

/*=============*\
*  Application  *
\*=============*/

class App {
  constructor($root) {
    // bindings
    this.render = this.render.bind(this)
    this.handleArticleClick = this.handleArticleClick.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.pageLeft = this.pageLeft.bind(this)
    this.pageRight = this.pageRight.bind(this)

    this.articles = [ ]

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
    $main.style.transform = `translateX(${-x}px)`
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

/*==============*\
*  Scroll Plane  *
\*==============*/

// Long term, this will allow you to render a scene based on the position of a "camera"
class ScrollPlane {
  constructor (plane, width, scrollable = false) {
    this._onWheel = this._onWheel.bind(this)

    this.changeListeners = []
    this.x = 0;
    this.width = width;
    this.emitting = true

    if (scrollable) plane.addEventListener('wheel', this._onWheel, { passive: true })
  }

  onChange(fn) {
    this.changeListeners.push(fn)
  }

  goTo(x) {
    this.emitting = false
    let startX = this.x 
    let startTime = performance.now();
    let duration = 500;

    let step = (timestamp) => {
      let progress = ((timestamp - startTime) / duration);
      progress = progress > 1 ? 1 : progress
      let adjusted = easeOutQuad(progress)
      let progressX = progressPoint(adjusted, startX, x)
      this._change(progressX)

      if (progress < 1) window.requestAnimationFrame(step);
      else this.emitting = true
    }

    window.requestAnimationFrame(step);
  }

  _onWheel({ deltaX }) {
    let x = this.x += deltaX
    if (x > this.width) x = this.width
    if (x < 0) x = 0
    if (this.emitting) this._change(x)
  }

  _change(x) {
    this.x = x
    this.changeListeners.forEach((fn) => fn(x))
  }
}

/*====================*\
*  Incremental Scroll  *
\*====================*/

//  Snap to "pages" rather than scroll smoothly
class IncrementalScroll {
  constructor (element) {
    this.previousDelta = 0;
    this.previousScrollTime = Date.now();
    this.debounce = 500;
    this.minDelta = 20;
    this.canScroll = true;

    this.listenersRight = []
    this.listenersLeft = []

    this._incrementScroll = this._incrementScroll.bind(this)

    element.addEventListener('wheel', this._incrementScroll)
  }

  _incrementScroll(event) {
    let { deltaX } = event

    let scrollRight = deltaX > 0
    let delta = Math.abs(deltaX)

    let timeDiff = Date.now() - this.previousScrollTime
    let noDebounce = timeDiff > this.debounce; 

    // scroll velocity is increasing
    if (this.previousDelta < delta && this.canScroll && noDebounce && delta > this.minDelta) {
      scrollRight ? this._triggerScrollRight() : this._triggerScrollLeft()
      this.previousScrollTime = Date.now();
      this.canScroll = false
    }

    // scroll velocity is decreasing
    if (this.previousDelta > delta) {
      this.canScroll = true;
    }

    this.previousDelta = delta
  }

  onScrollLeft(fn)  { this.listenersLeft.push(fn)  }
  onScrollRight(fn) { this.listenersRight.push(fn) }

  _triggerScrollLeft()  {
    this.listenersLeft.forEach((fn) => fn())
  }
  _triggerScrollRight() {
    this.listenersRight.forEach((fn) => fn())
  }
}

/*===========*\
*  Utilities  *
\*===========*/

function progressPoint (progress, min, max) {
  return (max - min) * progress + min
}

// pulled from https://gist.github.com/gre/1650294
function easeOutQuad (t) {
  return t * (2 - t)
}