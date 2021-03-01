let backdropS = document.querySelectorAll(".backdrop")
for (element of backdropS) {
    element.parentElement.style.position = "relative";
    element.parentElement.style.overflow = "hidden";
}
