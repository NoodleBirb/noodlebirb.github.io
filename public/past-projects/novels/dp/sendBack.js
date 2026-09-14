function goBack() {
    window.location.pathname = "/past-projects/novels/";
}
function nextPage() {
    var url = window.location.href;
    var nums = parseInt(url.substring(url.indexOf("/dp/") + 4));
    nums++;

    window.location.pathname = "/past-projects/novels/" + "dp/" + nums + ".html";
}
function backPage() {
    var url = window.location.href;
    var nums = parseInt(url.substring(url.indexOf("/dp/") + 4));
    nums--;

    window.location.pathname = "/past-projects/novels/" + "dp/" + nums + ".html";
}
