


function toChapter() {
    var chapterChosen = document.getElementById("chapter").value;
    var novel = document.getElementById("selection").value;
    console.log(novel)
    console.log(chapterChosen)
    window.location.pathname = "/novels/novels/" + novel + chapterChosen + ".html";
}
