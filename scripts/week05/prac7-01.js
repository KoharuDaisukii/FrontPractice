let n = [];
for (let i = 0; i < 10; i++) {
    n[i] = parseInt((Math.random() * 100) % 100) + 1;
}

for (let i = 0; i < 10; i++) {
    document.writeln(n[i]);
}
document.write("<hr>");

let max = n[0];
for (let i = 1; i < 10; i++) {
    if (n[i] > max) max = n[i];
}
document.write("제일 큰 수는 " + max);
document.write("<hr>");

n.sort((a, b) => {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
});
for (let i = 0; i < 10; i++) {
    document.writeln(n[i]);
}
