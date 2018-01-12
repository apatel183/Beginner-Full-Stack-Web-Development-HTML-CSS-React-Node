// gives you the area of a triangle if you know all 3 sides
var triarea = function (side1, side2, side3) {
	var para = (side1 + side2 + side3) / 2;
	var area = Math.sqrt(para * (para - side1) * (para - side2) * (para - side3));
  return area;
}
//fill in three side lengths below
console.log(triarea(5,5,5));



9
function cA(rad) {
    let area = Math.PI * rad * rad;
    console.log(area);
 
    let areaRounded = Math.round(area * 100) / 100;
    console.log(areaRounded);
}
 
cA(5);

