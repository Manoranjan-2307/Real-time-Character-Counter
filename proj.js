document.addEventListener("DOMContentLoaded", function() {
    var txt = document.getElementById("txtarea");
    var Total = document.getElementById("n1");
    var Remaining = document.getElementById("n2");
    var maxChars = 70;

    function count() {
        var charCount = txt.value.length;
        var remainingChars = maxChars - charCount;

        Total.innerText = charCount;
        Remaining.innerText = remainingChars;

        if (remainingChars <= 0) {
            txt.disabled = true;
        } else {
            txt.disabled = false; 
        }
    }

    txt.addEventListener("input", count);
});

