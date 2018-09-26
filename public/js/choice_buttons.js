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

        }
    );
});

$(".selection2").on("click", function () {
    var scrap = $(".selection2").attr("data-scrap");
    var crew = $(".selection2").attr("data-crew");
    var prof = $(".selection2").attr("data-prof");
    var chap = $(".selection2").attr("data-chap");
    var page = $(".selection2").attr("data-page");

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

        }
    );
});

$(".selection3").on("click", function () {
    var scrap = $(".selection3").attr("data-scrap");
    var crew = $(".selection3").attr("data-crew");
    var prof = $(".selection3").attr("data-prof");
    var chap = $(".selection3").attr("data-chap");
    var page = $(".selection3").attr("data-page");

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

        }
    );
});

$(".selection4").on("click", function () {
    var scrap = $(".selection4").attr("data-scrap");
    var crew = $(".selection4").attr("data-crew");
    var prof = $(".selection4").attr("data-prof");
    var chap = $(".selection4").attr("data-chap");
    var page = $(".selection4").attr("data-page");

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

        }
    );
});
