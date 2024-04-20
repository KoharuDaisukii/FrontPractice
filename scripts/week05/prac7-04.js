let date = new Date();
document.write(
    "현재 시간: " +
        date.getHours() +
        "시 " +
        date.getMinutes() +
        "분 " +
        date.getSeconds() +
        "초"
);

if (date.getSeconds() % 2 == 0)
    document.body.style.backgroundColor = "lightskyblue";
else document.body.style.backgroundColor = "orange";
