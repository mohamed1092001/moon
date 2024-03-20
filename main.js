$(".active button").click(function () {
    let power = $(this).attr("power");
    if (power == "off") {
        $(this).find("i").addClass("fa-caret-up").removeClass("fa-caret-down")
        $(this).attr("power", "on");
        $(".list").slideDown()
    } else {
        $(this).find("i").addClass("fa-caret-down").removeClass("fa-caret-up")
        $(this).attr("power", "off");
        $(".list").slideUp()
    }
})

$(".list button").click(function () {
    let blur = $(this).attr("quality");
    let transcale = $(this).attr("transcale");
    $(".img").css({ "filter": "blur(" + blur + ")", "background-image": "url(moon.avif)", "transform": "scale(" + transcale + ")" })
})

$(".choose").click(function () {
    $(".img").css({ "background-image": "url(aml.jpg)" })
    setTimeout(function () {
        var audio = new Audio("aml.m4a");
        audio.play();
    }, 400)
})

