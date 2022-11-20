export function progressPoint(progress: number, min: number, max: number) {
  return (max - min) * progress + min;
}

// pulled from https://gist.github.com/gre/1650294
export function easeOutQuad(t: number) {
  return t * (2 - t);
}
