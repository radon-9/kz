$(function () {
    $("#aus_1").click(function () {
        $('#aus_2').css("display", "none")
        $('.certifactes h1').css("text-align", "center")
        $('#aus_3').css("display", "none")
        $('#aus_4').css("display", "none")
        $('#aus_1').css("width", "auto")
        $('#aus_1').css("height", "521px")
        $('.certifactes').css("position", "relitive")
        $('#aus_1').css("display", "inline-flex")
        $('.certifactes').css("left", "534px")
    });
});
$(function () {
    $("#aus_1").dblclick(function ()  {
        $('.certifactes img').css("display", "inline-flex")
        $('#aus_1').css("height", "260px")
        $('.certifactes').css("left", "0")
    });
});
$(function () {
    $("#aus_2").click(function () {
        $('#aus_1').css("display", "none")
        $('.certifactes h1').css("text-align", "center")
        $('#aus_3').css("display", "none")
        $('#aus_4').css("display", "none")
        $('#aus_2').css("width", "auto")
        $('#aus_2').css("height", "521px")
        $('.certifactes').css("position", "absolute")
        $('#aus_2').css("display", "inline-flex")
        $('.certifactes').css("left", "380px")
    });
});
$(function () {
    $("#aus_2").dblclick(function ()  {
        
        $('.certifactes img').css("display", "inline-flex")
        $('#aus_2').css("height", "260px")
        $('.certifactes').css("left", "0")

    });
});
$(function () {
    $("#aus_3").click(function () {
        $('#aus_1').css("display", "none")
        $('.certifactes h1').css("text-align", "center")
        $('#aus_2').css("display", "none")
        $('#aus_4').css("display", "none")
        $('#aus_3').css("width", "auto")
        $('#aus_3').css("height", "521px")
        $('.certifactes').css("position", "absolute")
        $('#aus_3').css("display", "inline-flex")
        $('.certifactes').css("left", "534px")
    });
});
$(function () {
    $("#aus_3").dblclick(function ()  {
        
        $('.certifactes img').css("display", "inline-flex")
        $('.certifactes').css("left", "0")
        $('#aus_3').css("height", "260px")


    });
});
$(function () {
    $("#aus_4").click(function () {
        $('#aus_1').css("display", "none")
        $('.certifactes h1').css("text-align", "center")
        $('#aus_2').css("display", "none")
        $('#aus_3').css("display", "none")
        $('#aus_4').css("width", "auto")
        $('#aus_4').css("height", "521px")
        $('.certifactes').css("position", "absolute")
        $('#aus_4').css("display", "inline-flex")
        $('.certifactes').css("left", "380px")
    });
});
$(function () {
    $("#aus_4").dblclick(function ()  {
        
        $('.certifactes img').css("display", "inline-flex")
        $('.certifactes').css("left", "0")
        $('#aus_4').css("height", "260px")


    });
});
// $(function () {
//     $("#podrobnee-button").dblclick(function () {
//         let about = $(".astronom-img");
//         if (about.css("display") === "none") {
//             about.css("display", "block");
//         } else {
//             about.css("display", "none");
//         }
//     });
// })
