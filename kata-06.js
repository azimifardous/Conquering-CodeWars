// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7

function findAreaOfTriangle(a, b, c) {

    let p = (a + b + c) / 2
    let area = Math.sqrt( p * (p - a) * (p - b) * (p - c))
    
    return area
}


console.log(findAreaOfTriangle(5, 6, 7)); // 14.6969


