console.log("Hello twuquwwqu");

let content = document.getElementById("content");

for (let i=1; i<=100; i++) {
    print(`ПРИВЕТ ${2+i} Hello!`);
}


function print(s) {
    content.append(s);
    content.append(document.createElement("br"));
}
