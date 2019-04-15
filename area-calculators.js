function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) return undefined;

  return length * width;
}

function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) return undefined;

  return base * height / 2;
}

function calculateCircleArea(radius) {
  if (radius < 0) return undefined;

  return (Math.pow(radius, 2) * Math.PI);
}
