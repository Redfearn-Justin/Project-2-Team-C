var id = $(".idSpan").text();

$(".selection1").on("click", function () {
    var scrap = $(".selection1").attr("data-scrap");
    var crew = $(".selection1").attr("data-crew");
    var prof = $(".selection1").attr("data-prof");
    var chap = $(".selection1").attr("data-chap");
    var page = $(".selection1").attr("data-page");

    var statsObj = {
        scrap: scrap,
        crew: crew,
        prof: prof,
        id: id
    };

    var idObj = {
        id: id,
        chap: chap,
        page: page
    };

    $.ajax({
        url: "/api/changestats",
        type: "PUT",
        data: statsObj
    }).then(
        function (result) {

            console.log("DOESNT GET HERE")

            $.ajax("/play/changepage", {
                type: "GET",
                data: idObj
            }).then(
                function (res) {
                    console.log(res);
                }
            );

        }
    );
});