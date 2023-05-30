
function triangle(a,b,c){
    if(a==b && b==c && c==a){
        console.log("Equilateral");
    } else if(a==b || b==c || c==a){
        console.log("isosceles");
    } else if(a!=b && b!=c && c!=a){
        console.log("Scalene");
    }

}
triangle(3,1,2);