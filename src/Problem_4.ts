{
  // start

  type Circle = {
    shape: string;
    radius: number;
  };

  type Rectangle = {
    shape: string;
    height: number;
    width: number;
  };

  type Shape = Circle | Rectangle;

  const calculateShapeArea = (shape: Shape): number | string => {
    if (shape.shape === "rectangle") {
      return parseFloat(
        ((shape as Rectangle).height * (shape as Rectangle).width).toFixed(2)
      );
    } else if (shape.shape === "circle") {
      return parseFloat(
        (
          Math.PI *
          ((shape as Circle).radius * (shape as Circle).radius)
        ).toFixed(2)
      );
    } else {
      return "This is not a valid area";
    }
  };

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 0,
    height: 10,
  });
  const circleArea = calculateShapeArea({
    shape: "circle",
    radius: 0,
  });

  console.log(rectangleArea);
  console.log(circleArea);

  // end
}
