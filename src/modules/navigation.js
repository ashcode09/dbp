var activePageAndTabAndSideBarBtn = {
    'activeNavTab': null,
    'activeSideBarBtn': null,
    'activePageView': null
};

var navIsOpen = false;

function viewPage(idOfPageToView, idOfNavTabClicked, navigationId) {
    // view page and make tab active
    addClassById(idOfNavTabClicked, 'activeNavTab', 'active-nav');
    addClassById(idOfPageToView, 'activePageView', 'active-page-view');
    if (navIsOpen) {
        document.getElementById(navigationId).classList.remove('open-nav');
        navIsOpen = false;
    }
    document.querySelector('body').scrollTop = 0;
};

var addClassById = function (idOfElementClicked, lastActiveElement, classToAdd) {
    if (activePageAndTabAndSideBarBtn[lastActiveElement] != null) {
        document.getElementById(activePageAndTabAndSideBarBtn[lastActiveElement]).classList.remove(classToAdd);
    }
    document.getElementById(idOfElementClicked).classList.add(classToAdd);
    activePageAndTabAndSideBarBtn[lastActiveElement] = idOfElementClicked;
};

var openNav = function (navigationId) {
    if (navIsOpen) {
        document.getElementById(navigationId).classList.remove('open-nav');
        navIsOpen = false;
    } else {
        document.getElementById(navigationId).classList.add('open-nav');
        navIsOpen = true;
    }
};