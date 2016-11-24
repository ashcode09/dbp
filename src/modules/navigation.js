var activePageAndTabAndSideBarBtn = {
    'activeNavTab': null,
    'activePageView': null,
    'activeSideBarBtn': null
};

function viewPage(idOfPageToView, idOfNavTabClicked) {
    // view page and make tab active
    addClassById(idOfNavTabClicked, 'activeNavTab', 'active-nav')
    addClassById(idOfPageToView, 'activePageView', 'active-page-view');
};

var addClassById = function (idOfElementClicked, lastActiveElement, classToAdd) {
    if (activePageAndTabAndSideBarBtn[lastActiveElement] != null) {
        document.getElementById(activePageAndTabAndSideBarBtn[lastActiveElement]).classList.remove(classToAdd);
    }
    document.getElementById(idOfElementClicked).classList.add(classToAdd);
    activePageAndTabAndSideBarBtn[lastActiveElement] = idOfElementClicked;
};