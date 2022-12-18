import color from 'color';

const CalculateColors = (hexColor) => {
    
  const baseColor = color(hexColor);
  // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3), 0 2px 10px rgba(0, 0, 0, 0.2)',

  const complementaryColor = baseColor.complement().hex();
  const monochromaticColors = baseColor.monochromatic().map((c) => c.hex());
  const analogousColors = baseColor.analogous().map((c) => c.hex());
  const triadicColors = baseColor.triadic().map((c) => c.hex());
  const tetradicColors = baseColor.tetradic().map((c) => c.hex());

  return {
    complementaryColor,
    monochromaticColors,
    analogousColors,
    triadicColors,
    tetradicColors,
  };
}

export default CalculateColors