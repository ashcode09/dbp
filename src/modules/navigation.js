var activePageAndTab = {
    'activeNavTab': null,
    'activePageView': null
};

function viewPage(idOfPageToView, idOfNavTabClicked) {
    // 
    addClassById(idOfNavTabClicked, 'activeNavTab', 'active-nav')
    addClassById(idOfPageToView, 'activePageView', 'active-page-view');
};

var addClassById = function (idOfElementClicked, lastActiveElement, classToAdd) {
    if (activePageAndTab[lastActiveElement] != null) {
        document.getElementById(activePageAndTab[lastActiveElement]).classList.remove(classToAdd);
    }
    document.getElementById(idOfElementClicked).classList.add(classToAdd);
    activePageAndTab[lastActiveElement] = idOfElementClicked;
};