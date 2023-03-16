function goBack() {
    window.location.pathname = "novels/";
}
function nextPage() {
    var url = window.location.href;
    var nums = parseInt(url.substring(url.indexOf("/dp/") + 4));
    nums++;

    window.location.pathname = "novels/" + "dp/" + nums;
}
function backPage() {
    var url = window.location.href;
    var nums = parseInt(url.substring(url.indexOf("/dp/") + 4));
    nums--;

    window.location.pathname = "novels/" + "dp/" + nums;
}
