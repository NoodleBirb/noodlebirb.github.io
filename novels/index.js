


function toChapter() {
    var chapterChosen = document.getElementById("chapter").value;
    var novel = document.getElementById("selection").value;
    window.location.pathname = "novel/" + novel + "/" + chapterChosen + ".html";
}
