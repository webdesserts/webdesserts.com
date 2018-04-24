//  Snap to "pages" rather than scroll smoothly
export class IncrementalScroll {
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