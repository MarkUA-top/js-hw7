const a = [7, 3, 1];
a[1] = 10;
console.log(a);


const b = ["one", "two", "three"];
b[3] = "four";
console.log(b);


const c = [2, 10, 15];
const d = c[0] + c[1] + c[2];
console.log(d);


const f = [3, 5, 8, 10, 1];
for (let i = 0; i < f.length; i++) {
    console.log(f[i]);
}


const h = ["1234", "12345678", "123456", "0123456789", "123ing"];
for (let i = 0; i < h.length; i++) {
    if  (h[i].length > 5) {
        console.log(h[i]);
}
}

const j = [22, 12, 7, 42, 42, 72, 82, 2, 92, 102];
let k = j[0];
for (let i = 1; i < j.length; i++) {
    if (j[i] > k) {
        k = j[i];
}
}
console.log(k);

let l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < l.length; i++) {
    if (l[i] % 2 === 0) {
        console.log(l[i]);
}
}
