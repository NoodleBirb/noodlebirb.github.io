

// sends to the correct chapter
function toChapter() {
    var chapterChosen = document.getElementById("chapter").value;
    var novel = document.getElementById("selection").value;
    window.location.pathname = "novels/" + novel + "/" + chapterChosen + ".html";
}
