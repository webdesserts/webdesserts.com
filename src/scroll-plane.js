import { easeOutQuad, progressPoint } from './miscellaneous'

// Long term, this will allow you to render a scene based on the position of a "camera"
export class ScrollPlane {
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
