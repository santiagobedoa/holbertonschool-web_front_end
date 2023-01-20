const roomDimensions = (function () {
  const width = 50;
  const length = 100;

  function getArea() {
    return width * length;
  }

  return {
    getArea,
  };
})();

const boundGetArea = roomDimensions.getArea();
