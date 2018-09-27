var id = $(".idSpan").text();

$(".option-buttons").on("click", function () {
    var scrap = $(this).attr("data-scrap");
    var crew = $(this).attr("data-crew");
    var prof = $(this).attr("data-prof");
    var chap = $(this).attr("data-chap");
    var page = $(this).attr("data-page");

    var statsObj = {
        scrap: scrap,
        crew: crew,
        prof: prof,
        id: id
    };

    var idObj = {
        id: id,
        chap: chap,
        page: page,
        crew: crew,
        scrap: scrap,
        prof: prof
    };

    $.ajax({
        url: "/api/changestats",
        type: "PUT",
        data: statsObj
    }).then(
        function (result) {

            $.ajax("/play/changepage", {
                type: "POST",
                data: idObj
            }).then(
                function (res) {
                    console.log("test");
                    console.log(res);
                    $('body').html(res);
                }
            );
            console.log(result);
        }
    );
});

$(".home-button").on("click", function() {
    location.href = "/";
});