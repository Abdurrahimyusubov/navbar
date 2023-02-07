var menu = $("#menu-icon");
var navbar = $(".navbar");


menu.on("click", () => {

    navbar.toggleClass("open");
});
