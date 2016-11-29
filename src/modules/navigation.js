var activePageAndTabAndSideBarBtn = {
    'activeNavTab': null,
    'activeSideBarBtn': null
};

var navIsOpen = false;

function viewPage(idOfNavTabClicked, navigationId) {
    // view page and make tab active
    console.log(idOfNavTabClicked, navigationId)
    addClassById(idOfNavTabClicked, 'activeNavTab', 'active-nav')
    if (navIsOpen) {
        document.getElementById(navigationId).classList.remove('open-nav');
        navIsOpen = false;
    }
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

viewPage(activeTab, 'navigation');