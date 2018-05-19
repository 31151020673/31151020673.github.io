function random(min, max) {
    min = 1;
    max = parseInt(document.getElementsByName("textBox2")[0].value);
    val = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementsByName("textBoxVal")[0].value = val;
}
function sort(min, max) {

    min = 1;
    max = parseInt(document.getElementsByName("textBox2")[0].value);
    document.getElementsByName("textBoxVal")[0].value = "";
    var ok = 1; r = new Array(max)

    for (var i = 1; i <= max; i++) {
        r[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    for (var i = max; i >= 1; i--) {
        for (var j = max; j >= 1; j--) {
            if ((i != j) && (r[i] == r[j])) ok = 0;
        }
    }
    if (ok) {

        for (var k = 1; k <= max; k++) {
            output = "";
            output += + r[k] + " ";
            document.getElementsByName("textBoxVal")[0].value += output;
        }
    } else sort(min, max);
}