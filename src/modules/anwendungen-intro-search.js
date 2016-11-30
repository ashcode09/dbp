var searchBoxOpen = false;

var openSearchInputBox = function (objectClicked) {
    var siblingsOfObjectClicked = Array.prototype.slice.call(objectClicked.parentNode.childNodes);
    if (!searchBoxOpen) {
        for (var i=0; i<siblingsOfObjectClicked.length; i++) {
            var classListOfSibling = [];
            if (siblingsOfObjectClicked[i].classList != undefined) {
                classListOfSibling = Array.prototype.slice.call(siblingsOfObjectClicked[i].classList);
            }
            if (classListOfSibling != undefined && classListOfSibling.indexOf('searchboxcontainer') >= 0) {
                document.getElementById(siblingsOfObjectClicked[i].id).classList.add('open-search-box');
            }
            if (document.getElementById('searchText').value.length > 0) {
                document.getElementById('searchTextInsert').value = document.getElementById('searchText').value;
            }
        }

        searchBoxOpen = true;
    } else {
        for (var i=0; i<siblingsOfObjectClicked.length; i++) {
            var classListOfSibling = [];
            if (siblingsOfObjectClicked[i].classList != undefined) {
                classListOfSibling = Array.prototype.slice.call(siblingsOfObjectClicked[i].classList);
            }
            if (classListOfSibling != undefined && classListOfSibling.indexOf('open-search-box') >= 0) {
                document.getElementById(siblingsOfObjectClicked[i].id).classList.remove('open-search-box');
            }
        }
        searchBoxOpen = false;
    }
};