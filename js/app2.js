function getParameterByName(name) {
    var url = document.URL;
    count = url.indexOf(name);
    sub = url.substring(count);
    amper = sub.indexOf("&");

    if (amper == "-1") {
        var param = sub.split("=");
        return param[1];
    } else {
        var param = sub.substr(0, amper).split("=");
        return param[1];
    }

}

function goBack() {
    history.go(-1);
    navigator.app.backHistory();
}

function goToUrl(x) {
    window.location = x;
}


function proURIDecoder(val) {
    val = val.replace(/\+/g, '%20');
    var str = val.split("%");
    var cval = str[0];
    for (var i = 1; i < str.length; i++) {
        cval += String.fromCharCode(parseInt(str[i].substring(0, 2), 16)) + str[i].substring(2);
    }

    return cval;
}




//Android back button handler methods
$(document).ready(function () {
    document.addEventListener("deviceready", setOverrideBackbutton, false);
});

/**
* Allow override of the back button on Android platforms
*/
function setOverrideBackbutton() {
    if (typeof device != "undefined" && device.platform == "Android") {
        navigator.app.overrideBackbutton(true);
    }
    document.addEventListener("backbutton", backButtonTap, true);
}

/**
* Callback after a backbutton tap on Android and windows platforms.
* Do nothing.
*/
function backButtonTap() {
    //Do not remove
}





$(document).ready(function () {

    $('body').css("display", "block");

    $(".imgLiquidFill").imgLiquid();



    var data = {
        "OUEST AUTOMOBILE DE BOULOGNE": "fiche-etablissement.html",
        "Maryline Charlet": "fiche-individu.html",
        "ALD AUTOMOTIVE": "fiche-etablissement.html",
        "Olivier Guerrand": "fiche-individu.html"
    };


    $('.typeahead').typeahead({
        /*source: ['OUEST AUTOMOBILE DE BOULOGNE', 'Maryline Charlet', 'ALD AUTOMOTIVE', 'bravo', 'charlie', 'delta', 'epsilon', 'gamma', 'zulu'],*/
        updater: function (item) {
            /* navigate to the selected item */
            window.location.href = data[item];
        },

        source: function (typeahead, query) {

            var links = [];
            for (var name in data) {
                links.push(name);
            }

            return links;
        },
        items: 10
    })





});