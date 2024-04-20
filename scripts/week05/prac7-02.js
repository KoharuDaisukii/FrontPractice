document.write("입력된 수의 배열<br>");
let array = new Array(5);
for (let i = 0; i < 5; i++) {
    array[i] = prompt("정수 입력", 0);
    if (array[i] == null) array[i] = "X";
    document.writeln(array[i]);
}
document.write("<hr>");
document.write("역순으로 재정렬된 배열<br>");
for (let i = array.length - 1; i >= 0; i--) {
    document.writeln(array[i]);
}
