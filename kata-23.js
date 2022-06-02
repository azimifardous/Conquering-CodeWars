/* Complete the function so that it finds the average of the 
three scores passed to it and returns the letter value associated with that grade. */

const getGrade = (s1, s2, s3) => {
    const average = (s1 + s2 + s3) / 3;
    if (average < 60) return "F";
    if (average < 70) return "D";
    if (average < 80) return "C";
    if (average < 90) return "B";
    return "A";
}