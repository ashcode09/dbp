var activePageAndTabAndSideBarBtn = {
    'activeNavTab': null,
    'activePageView': null,
    'activeSideBarBtn': null
};

var navIsOpen = false;

function viewPage(idOfPageToView, idOfNavTabClicked, navigationId) {
    // view page and make tab active
    addClassById(idOfNavTabClicked, 'activeNavTab', 'active-nav')
    addClassById(idOfPageToView, 'activePageView', 'active-page-view');
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
var modulesToScrollTo = document.getElementsByClassName('side-nav-module');

var activeSideBarButton = function (buttonId) {
    console.log(buttonId);
    //function found in navigation.js
    addClassById(buttonId, 'activeSideBarBtn','active-module')
};

var smoothScrollTo = function(targetId, buttonId) {
    activeSideBarButton(buttonId);
    
    var element = document.querySelector('body');
    var target = document.getElementById(targetId).offsetTop;
    var duration = 600;

    target = Math.round(target);
    duration = Math.round(duration);

    console.log(target, duration, element.scrollTop)

    if (duration < 0) {
        return Promise.reject("bad duration");
    }
    if (duration === 0) {
        element.scrollTop = target;
        return Promise.resolve();
    }

    var start_time = Date.now();
    var end_time = start_time + duration;
    var start_top = element.scrollTop;
    var distance = target - start_top;

    var smooth_step = function(start, end, point) {
        if(point <= start) { return 0; }
        if(point >= end) { return 1; }
        var x = (point - start) / (end - start); // interpolation
        return x*x*(3 - 2*x);
    }

    return new Promise(function(resolve, reject) {
        // This is to keep track of where the element's scrollTop is
        // supposed to be, based on what we're doing
        var previous_top = element.scrollTop;

        // This is like a think function from a game loop
        var scroll_frame = function() {
            if(element.scrollTop != previous_top) {
                reject("interrupted");
                return;
            }

            // set the scrollTop for this frame
            var now = Date.now();
            var point = smooth_step(start_time, end_time, now);
            var frameTop = Math.round(start_top + (distance * point));
            element.scrollTop = frameTop;

            // check if we're done!
            if(now >= end_time) {
                resolve();
                return;
            }

            // If we were supposed to scroll but didn't, then we
            // probably hit the limit, so consider it done; not
            // interrupted.
            if(element.scrollTop === previous_top
                && element.scrollTop !== frameTop) {
                resolve();
                return;
            }
            previous_top = element.scrollTop;

            // schedule next frame for execution
            setTimeout(scroll_frame, 0);
        }

        // boostrap the animation process
        setTimeout(scroll_frame, 0);
    });
    console.log('')
}