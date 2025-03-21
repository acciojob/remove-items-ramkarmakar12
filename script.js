//your JS code here. If required.
//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("colorSelect");
    const button = document.querySelector("input[type='button']");

    button.addEventListener("click", function () {
        if (select.selectedIndex !== -1) {
            select.remove(select.selectedIndex);
        }
    });
});
