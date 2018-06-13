export function progressPoint (progress, min, max) {
  return (max - min) * progress + min
}

// pulled from https://gist.github.com/gre/1650294
export function easeOutQuad (t) {
  return t * (2 - t)
}