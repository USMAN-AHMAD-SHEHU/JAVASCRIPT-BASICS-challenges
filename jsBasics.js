// CHALLENGE: GRADE CALCULATOR

var mark = prompt('Input your grade');
var grade;
if(mark >= 70 && mark <= 100){
    alert('Grade: A');
}
else if(mark >= 50 && mark <= 60){
    alert('Grade: C');
}
else if(mark >= 0 && mark <=40){
    alert('Grade: F');
}
else{
    alert('Mark is invalid');
}
