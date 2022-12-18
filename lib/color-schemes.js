import Color from 'color'

export function generateColorSchemes(color) {
  const baseColor = Color(color)

  const hue = baseColor.hue()

  const analogous = [
    Color({ h: hue - 30, s: baseColor.saturationv(), v: baseColor.value() }).hex(),
    Color({ h: hue + 30, s: baseColor.saturationv(), v: baseColor.value() }).hex(),
  ]

  const triadic = [
    Color({ h: hue + 120, s: baseColor.saturationv(), v: baseColor.value() }).hex(),
    Color({ h: hue + 240, s: baseColor.saturationv(), v: baseColor.value() }).hex(),
  ]

  const tetradic = [
    Color({ h: hue + 60, s: baseColor.saturationv(), v: baseColor.value() }).hex(),
    Color({ h: hue + 180, s: baseColor.saturationv(), v: baseColor.value() }).hex(),
    Color({ h: hue + 300, s: baseColor.saturationv(), v: baseColor.value() }).hex(),
  ]

  return {
    Complimentary: [baseColor.rotate(180).hex()],
    Monochromatic: [baseColor.hex()],
    Analogous: analogous,
    Triadic: triadic,
    Tetradic: tetradic,
  }
}