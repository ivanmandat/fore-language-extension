var firstLoad = true;

if (document.getElementsByClassName == undefined) {
    document.getElementsByClassName = function (cl) {
        var retnode = [];
        var myclass = new RegExp('\\b' + cl + '\\b');
        var elem = this.getElementsByTagName("a");
        for (var i = 0; i < elem.length; i++) {
            var classes = elem[i].className;
            if (myclass.test(classes)) {
                retnode.push(elem[i]);
            }
        }
        return retnode;
    }
};

function getDivSource(el) {
    var src = null;
    if (!src && el.id) {
        for (var i = 0; i < gPopupData.length; i++) {
            if (gPopupData[i].el == el.id) {
                src = gPopupData[i].popupId;
                break;
            }
        }
    }
    if (!src) {
        return;
    }
    var name = src;
    if (src.substr(0, 1) == "#") {
        name = src.substr(1, src.length - 1);
    }
    var srcDiv = getElement(name);
    return srcDiv;
}

function applyHashChangeEvent() {
    var docmode = document.documentMode;
    // Does the browser support window.onhashchange?
    if ('onhashchange' in window && (docmode === undefined || docmode > 7)) {
        window.onhashchange = function () {
            showPopup();
        }
    } else {
        window.location.hash = window.location.hash; // For IE (chm)	
        var oldHref = location.href.toLowerCase();
        window.setInterval(function () {
            var newHref = location.href.toLowerCase();
            if (oldHref !== newHref) {
                oldHref = newHref;
                showPopup();
            }
        }, 100);
    }
}

function openDropDown() {
    showPopup();
    if (firstLoad) {
        applyHashChangeEvent();
        firstLoad = false;
    };
}

function showPopup() {
    var progOpts = location.hash;
    var className = "dropspot";
    var bookMark = "";
    var elem;
    var srcDiv;
    if (progOpts != "") {
        var bookMark = progOpts.substr(1, progOpts.length).toLowerCase();
        if (bookMark != "") {
            var elems = document.getElementsByClassName(className);
            for (var i = 0; i < elems.length; i++) {
                elem = elems[i];
                srcDiv = getDivSource(elem);
                if (srcDiv) {
                    if (srcDiv.style.display != "none") {
                        CustomTextPopup(elem);
                    }
                }
                if (elem.name == "") {
                    var previousSibling = elem.previousSibling;
                    if (previousSibling != null) {
                        if (previousSibling.nodeName.toLowerCase() == "a") {
                            if (isElementNamesEqual(bookMark, previousSibling.name.toLowerCase())) {
                                CustomTextPopup(elem);
                            }
                        }
                    }
                } else {
                    if (isElementNamesEqual(bookMark, elem.name.toLowerCase())) {
                        CustomTextPopup(elem);
                    }
                }
            }
        }
        window.location.hash = window.location.hash;
    }
}

function isElementNamesEqual(name1, name2) {
    // For indexes
    if (name1.localeCompare(name2) == 0) {
        return true;
    }
    // For TOCs in webhelp
    if ((name1.length - name2.length) > 0) {
        var cleanNameLength = name1.indexOf("-") - 2;
        if (cleanNameLength > 0) {
            var cleanName = name1.substr(0, cleanNameLength);
            if (cleanName.localeCompare(name2) == 0) {
                return true;
            }
        }
    }
    // For TOCs in chmhelp
    if ((name1.indexOf(name2) == 0) && (name1.indexOf("=") > 0)) {
        return true;
    }
    return false;
}

function CustomTextPopup(el) {
    if (!gbBsIE4 && !gbBsOpera7 && !gbBsSafari && !gbBsNS6 && !gbBsKonqueror3)
        return;

    if (window.event)
        window.event.cancelBubble = true;

    if (typeof (el) == "string")
        el = getElement(el);

    if (!el || el == window)
        return;

    for (var i = 0; i < getChildNodes(el).length; i++) {
        var child = getChildNodes(el)[i];
        if (child && (child.tagName == "IMG")) {
            if (child.className == "Twisties") {
                if (child.style && (child.style.display == ""))
                    child.style.display = "none";
                else if (child.style)
                    child.style.display = "";
            }
        }

        if (child && (child.tagName == "SPAN")) {
            if (child.className == "MTText") {
                if (child.style && (child.style.display == ""))
                    child.style.display = "none";
                else if (child.style)
                    child.style.display = "";
            }
        }
    }

    var src = null;
    if (!src && el.id) {
        for (var i = 0; i < gPopupData.length; i++)
            if (gPopupData[i].el == el.id) {
                src = gPopupData[i].popupId;
                break;
            }
    }
    if (!src)
        return;

    var name = src;
    if (src.substr(0, 1) == "#")
        name = src.substr(1, src.length - 1);

    var srcDiv = getElement(name);
    if (!srcDiv)
        return;

    if (srcDiv) {
        if (srcDiv.style.display == "")
            srcDiv.style.display = "none";
        else {
            if (srcDiv.className == "expandtext") {
                var inner = RetrieveTextInner(srcDiv);
                if (inner == "")
                    inner = srcDiv.innerHTML;
                if (inner.indexOf("&nbsp;") != 0 && inner.indexOf(" ") != 0) {
                    inner = "&nbsp;" + inner;
                    srcDiv.innerHTML = inner;
                }
            }

            srcDiv.style.display = "";
        }
    }
    return;
}