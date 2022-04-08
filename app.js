function stringClean(s) {
    var noNum = s.replace(/[0-9]/g, '');
    return noNum;
}

console.log(stringClean("")); // ""
console.log(stringClean("! !")); // "! !"
console.log(stringClean("123456789")); // ""
console.log(stringClean("(E3at m2e2!!)")); // "(Eat me!!)"
console.log(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!")); // "Dsa cdsc csa!!! I Am cool!"
console.log(stringClean("A1 A1! AAA   3J4K5L@!!!")); // "A A! AAA   JKL@!!!"