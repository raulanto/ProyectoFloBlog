function setupRatingInteraction(ratingClass) {
    var svgs = document.querySelector(".".concat(ratingClass)).children;
    var _loop_1 = function (i) {
        svgs[i].onclick = function () {
            for (var j = 0; j <= i; j++) {
                svgs[j].classList.add("fill-yellow-300");
            }
            for (var k = i + 1; k < svgs.length; k++) {
                svgs[k].classList.remove("fill-yellow-300");
            }
        };
    };
    for (var i = 0; i < svgs.length; i++) {
        _loop_1(i);
    }
}
setupRatingInteraction("rating1");
setupRatingInteraction("rating2");
setupRatingInteraction("rating3");
setupRatingInteraction("rating4");
setupRatingInteraction("rating5");
setupRatingInteraction("rating6");
setupRatingInteraction("rating7");
setupRatingInteraction("rating8");
setupRatingInteraction("rating9");
setupRatingInteraction("rating10");
setupRatingInteraction("rating11");
setupRatingInteraction("rating12");
setupRatingInteraction("rating13");
//# sourceMappingURL=setuprating.js.map