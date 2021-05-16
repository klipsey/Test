function rhombus() {
    var size = document.getElementById("size").value;
    var word = "<p>";
    var even = '<span style="color:' + document.getElementById("even").value + '">' + document.getElementById("symbol").value + "</span>";
    var odd = '<span style="color:' + document.getElementById("odd").value + '">' + document.getElementById("symbol").value + "</span>";
    if (size === "" || isNaN(size)) {
        alert("Empty or Not Numeric");
    } else {
        for (var int = 0; int < size; int++) {
            for (var int1 = size - int; int1 > 0; int1--) {
                word += "&nbsp;&nbsp;";



            }
            for (var int2 = 0; int2 <= int; int2++) {
                if (int2 % 2 === 0) {
                    word += odd;
                } else {
                    word += even;
                }
            }
            word += "&nbsp;";
            for (var int3 = 0; int3 <= int; int3++) {
                if (int3 % 2 === 0) {
                    word += odd;
                } else {
                    word += even;
                }
            }

            word += "<br>";
        }
        word += "<br>";
        for (var int5 = size - 1; int5 >= 0; int5--) {
            for (var int6 = size - int5; int6 > 0; int6--) {
                word += "&nbsp;&nbsp;";



            }
            for (var int7 = 0; int7 <= int5; int7++) {
                if (int7 % 2 === 0) {
                    word += odd;
                } else {
                    word += even;
                }
            }
            word += "&nbsp;";
            for (var int8 = 0; int8 <= int5; int8++) {
                if (int8 % 2 === 0) {
                    word += odd;
                } else {
                    word += even;
                }
            }

            word += "<br>";
        }
    }
    word += "</p>";
    document.getElementById("input").innerHTML = word;
}