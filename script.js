// This is the quote Modal

$(".hero-btn").on("click", function() {
    var heroBtn = $(".hero-btn");
    var quoteModal = $(".quote-modal");


    if (heroBtn == heroBtn) {
        quoteModal.show();
        quoteModal.css("display", "flex");

    } else {
        console.log("something Went Wrong");
    }
})

$(".exitIcon").on("click", function() {
    var quoteModal = $(".quote-modal");
    var exitIcon = $(".exitIcon");


    if (exitIcon == exitIcon) {
        quoteModal.hide();

    } else {
        console.log("something Went Wrong");
    }
})


$(".main-logo-outside").on("click", function() {
    $(".section-indicator").toggle("slide", { direction: "right" }, 500);
    $(".indicator-logo-outside").toggle("slide", { direction: "right" }, 500);

})

$(".close-btn").on("click", function() {
    $(".section-indicator").toggle("slide", { direction: "right" }, 500);
    $(".indicator-logo-outside").toggle("slide", { direction: "right" }, 500);
})

$(".clicked-anchor").on("click", function() {
    $(".section-indicator").toggle("slide", { direction: "right" }, 500);
    $(".indicator-logo-outside").toggle("slide", { direction: "right" }, 500);
})




