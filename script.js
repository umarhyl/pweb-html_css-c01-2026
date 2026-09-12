/* =====================================================
   WINDOWS XP MY PAGE JAVASCRIPT
===================================================== */


/* ================= OPEN WINDOW ================= */

function openWindow(windowId) {

    const windowElement =
        document.getElementById(windowId);

    if (!windowElement) {
        return;
    }

    windowElement.style.display = "block";

    windowElement.style.zIndex =
        getHighestZIndex() + 1;

}


/* ================= CLOSE WINDOW ================= */

function closeWindow(windowId) {

    const windowElement =
        document.getElementById(windowId);

    if (!windowElement) {
        return;
    }

    windowElement.style.display = "none";

}


/* ================= MINIMIZE ================= */

function minimizeWindow(windowId) {

    const windowElement =
        document.getElementById(windowId);

    if (!windowElement) {
        return;
    }

    windowElement.style.display = "none";

}


/* ================= MAXIMIZE ================= */

function maximizeWindow(windowId) {

    const windowElement =
        document.getElementById(windowId);

    if (!windowElement) {
        return;
    }


    if (
        windowElement.classList.contains("maximized")
    ) {

        windowElement.classList.remove("maximized");

        windowElement.style.width = "";
        windowElement.style.height = "";
        windowElement.style.top = "";
        windowElement.style.left = "";
        windowElement.style.transform = "";

    } else {

        windowElement.classList.add("maximized");

        windowElement.style.width = "95vw";
        windowElement.style.height = "85vh";

        windowElement.style.top = "45%";
        windowElement.style.left = "50%";

        windowElement.style.transform =
            "translate(-50%, -50%)";

    }

}


/* ================= Z-INDEX ================= */

function getHighestZIndex() {

    const windows =
        document.querySelectorAll(".window");

    let highest = 50;

    windows.forEach(function (element) {

        const z =
            parseInt(
                window.getComputedStyle(element).zIndex
            );

        if (z > highest) {
            highest = z;
        }

    });

    return highest;
}


/* ================= CLICK WINDOW TO FRONT ================= */

document.addEventListener(
    "mousedown",
    function (event) {

        const windowElement =
            event.target.closest(".window");

        if (windowElement) {

            windowElement.style.zIndex =
                getHighestZIndex() + 1;

        }

    }
);


/* ================= START MENU ================= */

function toggleStartMenu() {

    const menu =
        document.getElementById("startMenu");

    if (menu.style.display === "block") {

        menu.style.display = "none";

    } else {

        menu.style.display = "block";

    }

}


function closeStartMenu() {

    document.getElementById(
        "startMenu"
    ).style.display = "none";

}


/* ================= CLOSE START MENU OUTSIDE ================= */

document.addEventListener(
    "click",
    function (event) {

        const menu =
            document.getElementById("startMenu");

        const startButton =
            document.querySelector(".start-button");

        if (
            menu.style.display === "block" &&
            !menu.contains(event.target) &&
            !startButton.contains(event.target)
        ) {

            menu.style.display = "none";

        }

    }
);


/* ================= CLOCK ================= */

function updateClock() {

    const clock =
        document.getElementById("clock");

    const now =
        new Date();

    let hours =
        now.getHours();

    let minutes =
        now.getMinutes();

    let ampm =
        hours >= 12
            ? "PM"
            : "AM";

    hours =
        hours % 12;

    hours =
        hours
            ? hours
            : 12;

    minutes =
        minutes < 10
            ? "0" + minutes
            : minutes;

    clock.textContent =
        hours +
        ":" +
        minutes +
        " " +
        ampm;

}


/* Update every second */

setInterval(
    updateClock,
    1000
);

updateClock();


/* ================= ESCAPE KEY ================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            const windows =
                document.querySelectorAll(".window");

            windows.forEach(function (windowElement) {

                windowElement.style.display =
                    "none";

            });

            closeStartMenu();

        }

    }
);