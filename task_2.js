alert("Task#2")
var b = prompt("Enter num:", "");
if(b==0){
    alert("нульове число")
} else if (b>0&&b%2==0){
    alert("додатне парне число")
} else if (b>0&&!(b&2==0)){
    alert("додатне непарне число")
} else if (b<0&&b%2==0){
    alert("від’ємне парне число")
} else {
    alert("від’ємне непарне число")
}