function goBack() {
    window.location.pathname = "/novels/";
}
function nextPage() {
    var url = window.location.href;
    var dots = 0;
    var begin = 0;
    var end = 0;

    for (let i = 0; i < url.length; i++) {
        if (url.charAt(i) == '.') dots++;
        if (dots == 2) {
            begin = i + 3;
        }
        if (dots == 3) {
            end = i;
        }
    }
    var novelAndNumber = url.substring(begin, end);
    var count = 1;
    while (isNaN(parseInt(novelAndNumber))) {
        novelAndNumber = url.substring(begin + count, end);
        count++;
    }
    var nums = parseInt(novelAndNumber);
    nums++;
    var novel = url.substring(begin, url.indexOf(nums));



    window.location.pathname = "/novels/" + novel + nums + ".html";
}