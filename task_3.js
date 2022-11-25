alert("Task#3")
var a = [2, 2, 2, 3]
alert("Array: " + a)
if(a[0]==a[1]){
    if(a[1]==a[2]){
        if(a[2]!=a[3]){
            alert("4")
        }
    } else {
        alert("3")
    }
}  else if(a[0]==a[2]){
    alert("2")
}else {
    alert("1")
}