module.exports = function reverse (n) {
    n = n.toString();
    n = n.split("");
    n = n.reverse();
    n = n.join("");
    n = Number(n);
    return n;
}
